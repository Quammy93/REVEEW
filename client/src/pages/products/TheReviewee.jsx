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
import { connect } from "react-redux";
import { SET_SERVICE_CATEGORY,SET_SERVICE_LOCATION,SET_IS_LOCATION_CONTAINER_OPEN,SET_IS_SERVICE_CONTAINER_OPEN } from "../../redux/action";

const TheReviewee = ({
  serviceCategory,
  setServiceCategory,
  serviceLocation,
  setServiceLocation,

  setIsLocationContainerOpen,

  setIsServiceContainerOpen,
}) => {
  const suggestions = [
    { name: "Gramma's Kitchen", img: "" },
    { name: "Gramma's Kitchen", img: "" },
    { name: "Gramma's Kitchen", img: "" },
    { name: "Gramma's Kitchen", img: "" },
    { name: "Gramma's Kitchen", img: "" },
    { name: "Gramma's Kitchen", img: "" },
    { name: "Gramma's Kitchen", img: "" },
    { name: "Gramma's Kitchen", img: "" },
    { name: "Gramma's Kitchen", img: "" },
    { name: "Gramma's Kitchen", img: "" },
    { name: "Gramma's Kitchen", img: "" },
    { name: "Gramma's Kitchen", img: "" },
    { name: "Gramma's Kitchen", img: "" },
    { name: "Gramma's Kitchen", img: "" },
    { name: "Gramma's Kitchen", img: "" },
  ];

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
      <div className="reviewee-container">
        <main className="review-input-container-main">
          <h2>Find a business to review</h2>
          <h4>
            Review anything from your favorite patio spot to your local flower
            shop.
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
                <span className="reviewee-icon-div1">
                  <IoSearch className="reviewee-icon1" />
                </span>
              </span>
            </div>
          </form>
          <ServiceCategory />
          <Location />
        </main>
        <div className="reviewee-image">
          <img src={reviewee} alt="" className="reviewee-illus" />
        </div>
      </div>
      <section className="reviewee-section">
        <h3>Visited one of these places recently?</h3>
        <div className="visited-container">
          <article className="visited-article">
            <div>
              <img src={cake} alt="" className="visited-image" />
            </div>
            <div className="visited-desc">
              {" "}
              <h3>Grandma's </h3>
              <p>Do you recommend this business?</p>
              <Rate tooltips={desc} onChange={setValue} value={value} />
              {value ? <span>{desc[value - 1]}</span> : null}
            </div>
            <span>
              <MdClose className="close-visited" />
            </span>
          </article>
          <article className="visited-article">
            <div>
              <img src={cake} alt="" className="visited-image" />
            </div>
            <div className="visited-desc">
              {" "}
              <h3>Grandma's </h3>
              <p>Do you recommend this business?</p>
              <Rate tooltips={desc} onChange={setValue} value={value} />
              {value ? <span>{desc[value - 1]}</span> : null}
            </div>
            <span>
              <MdClose className="close-visited" />
            </span>
          </article>
          <article className="visited-article">
            <div>
              <img src={cake} alt="" className="visited-image" />
            </div>
            <div className="visited-desc">
              {" "}
              <h3>Grandma's </h3>
              <p>Do you recommend this business?</p>
              <Rate tooltips={desc} onChange={setValue} value={value} />
              {value ? <span>{desc[value - 1]}</span> : null}
            </div>
            <span>
              <MdClose className="close-visited" />
            </span>
          </article>
          <article className="visited-article">
            <div>
              <img src={cake} alt="" className="visited-image" />
            </div>
            <div className="visited-desc">
              {" "}
              <h3>Grandma's </h3>
              <p>Do you recommend this business?</p>
              <Rate tooltips={desc} onChange={setValue} value={value} />
              {value ? <span>{desc[value - 1]}</span> : null}
            </div>
            <span>
              <MdClose className="close-visited" />
            </span>
          </article>
          <article className="visited-article">
            <div>
              <img src={cake} alt="" className="visited-image" />
            </div>
            <div className="visited-desc">
              {" "}
              <h3>Grandma's </h3>
              <p>Do you recommend this business?</p>
              <Rate tooltips={desc} onChange={setValue} value={value} />
              {value ? <span>{desc[value - 1]}</span> : null}
            </div>
            <span>
              <MdClose className="close-visited" />
            </span>
          </article>
        </div>
      </section>
      <span>Show more suggestions</span>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
     serviceCategory: state.business. serviceCategory,
      serviceLocation: state.business.  serviceLocation,
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
  };
};



export default  connect (mapStateToProps,mapDispatchToProps)(TheReviewee);
