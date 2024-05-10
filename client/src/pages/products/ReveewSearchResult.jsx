import React from "react";
import Navbar3 from "../../components/Navbar3";
import "../../assets/css/thereviewee.css";
import { IoSearch } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import reviewee from "../../assets/images/reviewee1.jpg";
import cake from "../../assets/images/cake1.jpg";
import { Rate } from "antd";
import Footer from "../../components/Footer";
import ServiceCategory from "../../components/ServiceCategory";
import Location from "../../components/Location";
import { useGlobalContext } from "../../utils/context";
import MapComponent from "../../components/MapComponent";
import { connect } from "react-redux";
 const mapStyle = {
   position: "absolute",
   top: 0,
   left: 0,
   width: "100%",
   height: "100%",
   
    // Ensure the map is behind other content
 };

import axios from "axios";
const url = "http://localhost:5000/api";
//const url = "/api";
import {
  SET_SERVICE_CATEGORY,
  SET_SERVICE_LOCATION,
  SET_IS_LOCATION_CONTAINER_OPEN,
  SET_IS_SERVICE_CONTAINER_OPEN,SET_BUSINESS_SEARCHED

} from "../../redux/action";

const ReveewSearchResult = ({
  serviceCategory,
  setServiceCategory,
  serviceLocation,
  setServiceLocation,

  setIsLocationContainerOpen,

  setIsServiceContainerOpen,
  setBusinessSearched,
  businessSearched,
}) => {

const [issearchingBusiness, setIssearchingBusiness] = React.useState(false);


  const getSearchedBusiness = async (category, location) => {
    return await axios
      .get(`${url}/services?category=${category}&location=${location}`)
      .catch((error) => {
        console.log(error);
        //toast.error(error.message);
      });
  };

  const fetchBusiness = async () => {
    const response = await getSearchedBusiness(
      serviceCategory,
      serviceLocation
    );
    console.log(response.data);
    setBusinessSearched(response.data.items);
  };

  const {
    // serviceCategory,
    // setServiceCategory,
    // serviceLocation,
    // setServiceLocation,
    // setIsLocationContainerOpen,
    //  setIsServiceContainerOpen,
  } = useGlobalContext();
  const desc = ["terrible", "bad", "normal", "good", "wonderful"];
  const [value, setValue] = React.useState(0);

  return (
    <div>
      <Navbar3 />
      <main className="reviewee-wrapper">
        <div className="reviewee-container-parent">
          <div className="reviewee-container">
            <main className="review-input-container-main">
              <h2>Find a business to review</h2>
              <h4>
                Review anything from your favorite patio spot to your local
                flower shop.
              </h4>
              <form action="" className="reviewee-form1">
                <div className="therevieweeinput1">
                  <aside>
                    {" "}
                    <input
                      type="text"
                      placeholder="try resturants,hotel..."
                      className="find-reviewee-inpt11"
                      name="serviceCategory"
                      value={serviceCategory}
                      onChange={(e) => setServiceCategory(e.target.value)}
                      onClick={(e) => {
                        if (e.target.className == "find-reviewee-inpt11") {
                          setIsServiceContainerOpen(true);
                          setIsLocationContainerOpen(false);
                        }
                      }}
                    />
                  </aside>
                  <span className="flex-input2-icon">
                    <input
                      type="text"
                      className="find-reviewee-inpt21"
                      placeholder="location"
                      name="serviceLocation"
                      value={serviceLocation}
                      onChange={(e) => setServiceLocation(e.target.value)}
                      onClick={(e) => {
                        if (e.target.className == "find-reviewee-inpt21") {
                          setIsLocationContainerOpen(true);
                          setIsServiceContainerOpen(false);
                        }
                      }}
                    />{" "}
                    <span
                      className="reviewee-icon-div1"
                      onClick={fetchBusiness}
                    >
                      <IoSearch className="reviewee-icon1" />
                    </span>
                  </span>
                </div>
              </form>
              <ServiceCategory />
              <Location />
            </main>
          </div>
          <section className="list-article-main1">
            {issearchingBusiness && "Loading..."}
            {businessSearched?.length==0  && !issearchingBusiness && "Loading..."}

            {businessSearched.map((item) => {
              console.log(item);
              const { img, name, avgrating } = item;

              return (
                <article className="list-article-main">
                  <div className="list-article">
                    <div>
                      <img src={img} alt="" className="visited-image" />
                    </div>
                    <div className="list-desc">
                      {" "}
                      <h3 className="list-heading-desc">{name} </h3>
                      <Rate
                        tooltips={desc}
                        onChange={setValue}
                        value={avgrating}
                      />
                    </div>
                  </div>
                </article>
              );
            })}
          </section>
        </div>
        <div>
          <MapComponent style={mapStyle} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    serviceCategory: state.business.serviceCategory,
    serviceLocation: state.business.serviceLocation,
    businessSearched: state.business.businessSearched,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(ownProps);
  return {
    setServiceCategory: (category) =>
      dispatch({ type: SET_SERVICE_CATEGORY, payload: { category: category } }),

    setIsServiceContainerOpen: (status) =>
      dispatch({
        type: SET_IS_SERVICE_CONTAINER_OPEN,
        payload: { status: status },
      }),
    setServiceLocation: (location) =>
      dispatch({ type: SET_SERVICE_LOCATION, payload: { location: location } }),

    setIsLocationContainerOpen: (status) =>
      dispatch({
        type: SET_IS_LOCATION_CONTAINER_OPEN,
        payload: { status: status },
      }),
    setBusinessSearched: (result) =>
      dispatch({
        type: SET_BUSINESS_SEARCHED,
        payload: { result: result },
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReveewSearchResult);
