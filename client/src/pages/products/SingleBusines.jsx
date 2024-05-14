import React from "react";
import Navbar1 from "../../components/Navbar1";
import axios from "axios";
const url = "http://localhost:5000/api";
import avarta from "../../assets/images/computer-1.jpeg";
import ReviewDetail from "../../components/ReviewDetail";
import { Checkbox, Rate, Progress, Divider, Pagination } from "antd";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import { SET_BUSINESS_INFO, SET_REVIEW_QUERIED } from "../../redux/action";
import { connect } from "react-redux";
import { IoMdFlag } from "react-icons/io";
import { FaReply } from "react-icons/fa";
import { AiTwotoneLike } from "react-icons/ai";
import MapComponent from "../../components/MapComponent";

//const url = "/api";

let combinedQuerry = [];

import { useGlobalContext } from "../../utils/context";


const SingleBusines = ({
  businessInfo,
  setBusinessInfo,
  reviewChecked,
  reviewSorted,
  setReviewQueried,
}) => {
  const [reviews, setReviews] = React.useState([]);
  const [numOfFiveReview, setNumOfFiveReview] = React.useState(0);
  const [numOfFourReview, setNumOfFourReview] = React.useState(0);
  const [numOfThreeReview, setNumOfThreeReview] = React.useState(0);
  const [numOfTwoReview, setNumOfTwoReview] = React.useState(0);
  const [numOfOneReview, setNumOfOneReview] = React.useState(0);
  const [numOfZeroReview, setNumOfZeroReview] = React.useState(0);
  const [isproductLoading, setIsProductLoading] = React.useState(false);
  const [isReviewLoading, setIsReviewLoading] = React.useState(false);

  let totalReviews = 0;
  const urlLocation = useLocation();


  // Function to split values and add them to the combined array
  function addValuesToArray(queryObject, key) {
    if (queryObject[key]) {
      const values = queryObject[key].split(",");
      combinedQuerry.push(...values);

    }
  }

  const getAllReviews = async (id) => {
    return await axios
      .get(
        `${url}/reviews/${id}?sort=${reviewSorted}&filter=${reviewChecked.join(
          ","
        )}`
      )
      .catch((error) => {
        console.log(error);
        //toast.error(error.message);
      });
  };

  const fetchReview = async (id) => {
    setIsReviewLoading(true);
    try {
      const response = await getAllReviews(id);

      const { reviews } = await response.data;

      console.log("response", response);

      const { requestQuerry } = await response.data;
      console.log("requestQuerry", requestQuerry);

      

      // Add 'filter' and 'sort' values to the combined array
    //  addValuesToArray(requestQuerry, "filter");
      //addValuesToArray(requestQuerry, "sort");

    // console.log(new Set(combinedQuerry)); // Output: ['5', '4', 'most-liked']
    //  setReviewQueried( new Set(combinedQuerry));
   //console.log(combinedQuerry)


  function updateCombinedArray() {
    combinedQuerry = [];
    addValuesToArray(requestQuerry, "filter");
    addValuesToArray(requestQuerry, "sort");
   
  }
 updateCombinedArray();
 console.log(new Set(combinedQuerry));
 setReviewQueried([...new Set(combinedQuerry)]);
      setReviews(reviews);
      setIsReviewLoading(false);
      setNumOfZeroReview(response?.data?.numOfZeroReview);
      setNumOfOneReview(response?.data?.numOfOneReview);
      setNumOfTwoReview(response?.data?.numOfTwoReview);
      setNumOfThreeReview(response?.data?.numOfThreeReview);
      setNumOfFourReview(response?.data?.numOfFourReview);
      setNumOfFiveReview(response?.data?.numOfFiveReview);

      totalReviews =
        numOfZeroReview +
        numOfOneReview +
        numOfTwoReview +
        numOfThreeReview +
        numOfFourReview +
        numOfFiveReview;

      console.log("totalreview", totalReviews);
      console.log("num", numOfFiveReview);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  React.useEffect(() => {
    // Use an async function to fetch data

    fetchReview(companyID);
  }, [reviewChecked, reviewSorted]);

  const navigate = useNavigate();
  const { companyID } = useParams();
  // const { businessInfo, setBusinessInfo } = useGlobalContext();
  console.log(businessInfo);

  const getCompany = async (id) => {
    return await axios.get(`${url}/item/${id}`).catch((error) => {
      console.log(error);
      //toast.error(error.message);
    });
  };

  const fetchData = async (id) => {
    // setIsProductLoading(true);
    try {
      const response = await getCompany(id);

      const { item } = response.data;

      console.log(response);
      setBusinessInfo(item);

      //  setIsProductLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  React.useEffect(() => {
    // Use an async function to fetch data

    fetchData(companyID);
  }, []);

  const mapStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",

    // Ensure the map is behind other content
  };

  const { _id, name, category, location, numOfReview, img, avgrating, desc } =
    businessInfo;

  return (
    <div>
      <Navbar1 />
      <section>
        <span>
          Money & Insurance - Insurance -Travel Insurance Company- Heymondo
          Italia
        </span>

        <article className="display-business-article-single-bsn">
          <main className="bsn-art-container-single-bsn">
            <div>
              <img src={img} alt="" className="bsn-img-single-bsn" />
            </div>
            <div className="bsn-div">
              <h2>{name}</h2>
              <span>
                {" "}
                <Rate value={avgrating} />
                <p>{numOfReview} Reviews</p>
              </span>
              <span>{location}</span>
            </div>
          </main>
          <div className="website-link">Website</div>
        </article>
      </section>
      <main className="single-bsn-container">
        <section>
          <div className="writer-container">
            {" "}
            <span className="writer-span">
              <img src={avarta} alt="" className="writer-avarta" />

              <p
                onClick={() => {
                  navigate(
                    `/business/feedback/${_id}?reviewed=product&queryName=${name}`,
                    { state: { single: urlLocation }, replace: true }
                  );
                }}
              >
                Write a Review
              </p>
            </span>{" "}
            <span>
              <Rate value={avgrating} defaultValue={avgrating} />
            </span>
          </div>
          <div className="bsn-review-info">
            <ReviewDetail
              rating={avgrating}
              revNum={numOfReview}
              revN1={numOfOneReview}
              revN2={numOfTwoReview}
              revN3={numOfThreeReview}
              revN4={numOfFourReview}
              revN5={numOfFiveReview}
              cent5={Math.round((numOfFiveReview / numOfReview) * 100)}
              cent4={Math.round((numOfFourReview / numOfReview) * 100)}
              cent3={Math.round((numOfThreeReview / numOfReview) * 100)}
              cent2={Math.round((numOfTwoReview / numOfReview) * 100)}
              cent1={Math.round((numOfOneReview / numOfReview) * 100)}
            />
          </div>
          <main>
            {reviews.map((review) => {
              const {
                _id,
                title,
                comment,
                value,
                reviewer,
                formattedTimestamp,
              } = review;

              return (
                <div className="bsn-reviews">
                  <div className="writer-container1">
                    {" "}
                    <span className="writer-span">
                      <img src={avarta} alt="" className="writer-avarta" />
                      <span className="reviewer-detail">
                        <span>{reviewer.name}</span>
                        <span>{formattedTimestamp}</span>
                      </span>
                    </span>{" "}
                  </div>

                  <article className="review-duration">
                    {" "}
                    <span>
                      <Rate value={value} defaultValue={value} /> Verified{" "}
                    </span>
                    19 hours ago
                  </article>
                  <article className="business-review-article">
                    <h3>
                      <b>{title}</b>
                    </h3>
                    <p>{comment}</p>
                    <p>
                      {" "}
                      <b>Date of Experience:</b>
                      {formattedTimestamp}
                    </p>
                  </article>
                  <Divider className="divider-rev" />
                  <div className="review-reaction">
                    <span>
                      <span>
                        <AiTwotoneLike className="review-reaction-icon" />
                      </span>
                      <span>
                        <FaReply className="review-reaction-icon" />
                      </span>
                      <span>
                        <IoMdFlag
                          className="review-reaction-icon"
                          style={{ color: "red" }}
                        />
                      </span>
                    </span>
                  </div>
                </div>
              );
            })}
          </main>
        </section>
        <section>
          <div className="bsn-info">
            <span>
              <h3>About {name}</h3>
              <span>Information provided by various external sources</span>
              <p>{desc}</p>
              <h5>Contact</h5>
              <div>Email:@gmail Phone no :00000000000 Address : Ajah Lagos</div>

              <h5>Category</h5>
              <span>
                <p>Resturants</p>
                <p>Hotel and Relaxation</p>
              </span>
            </span>
          </div>

          <article className="bsn-map">
            <h3>Track ur way to {name}</h3>
            <MapComponent style={mapStyle} />
          </article>
        </section>
      </main>

      <main>
        <Pagination
          total={45}
          pageSize={4}
          itemRender={(_, type, page) => {
            if (type === "prev") {
              return "Prev";
            }
            if (type === "next") {
              return "Next";
            }

            return page;
          }}
          showSizeChanger={false}
          current={2}
          className="paginate"
        />
      </main>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    businessInfo: state.business.businessInfo,
    reviewChecked: state.appFunctions.reviewChecked,
    reviewSorted: state.appFunctions.reviewSorted,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setBusinessInfo: (business) =>
      dispatch({ type: SET_BUSINESS_INFO, payload: { business: business } }),
    setReviewQueried: (queried) => {
      dispatch({
        type: SET_REVIEW_QUERIED,
        payload: { queried: queried },
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SingleBusines);
