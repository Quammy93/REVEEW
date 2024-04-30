import React from "react";
import Navbar1 from "../../components/Navbar1";
import axios from "axios";
const url = "http://localhost:5000/api";
import avarta from "../../assets/images/computer-1.jpeg";
import ReviewDetail from "../../components/ReviewDetail";
import { Checkbox, Rate, Progress, Divider, Pagination } from "antd";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import { SET_BUSINESS_INFO } from "../../redux/action";
import { connect } from "react-redux";

//const url = "/api";

import { useGlobalContext } from "../../utils/context";

const SingleBusines = ({ businessInfo, setBusinessInfo }) => {
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

  const getAllReviews = async (id) => {
    return await axios.get(`${url}/reviews/${id}`).catch((error) => {
      console.log(error);
      //toast.error(error.message);
    });
  };

  const fetchReview = async (id) => {
    setIsReviewLoading(true);
    try {
      const response = await getAllReviews(id);

      const { reviews } = await response.data;

      console.log(response);

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
  }, []);

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

              <Link
                to={`/business/feedback/${_id}?reviewed=product&queryName=${name}`}
              >
                Write a Review
              </Link>
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
            />
          </div>
          <main>
            {" "}
            <div className="bsn-reviews">
              <div className="writer-container">
                {" "}
                <span className="writer-span">
                  <img src={avarta} alt="" className="writer-avarta" />
                  <span>Ifeoluwa</span>
                  <span>12 December 2023</span>
                </span>{" "}
              </div>
              <Divider className="divider-rev" />
              <article>
                {" "}
                <span>
                  <Rate value={5} defaultValue={5} /> Verified{" "}
                </span>
                19 hours ago
              </article>
              <article>
                <h3>
                  <b>We booked flight with this and it went horribly wrong.</b>
                </h3>
                <p>
                  We booked flight with this and it went horribly wrong. You
                  guys wouldn’t help when our flight was delayed for a long time
                  because of maintenance. We only got $68 when it cost a couple
                  hundred for what we lost. And we paid over a hundred for this
                  insurance. So the best you could do is refund us since you
                  couldn’t do the reason we booked using your insurance.
                </p>
                <p>
                  {" "}
                  <b>Date of Experience:</b>10 December 2023
                </p>
              </article>
              <Divider className="divider-rev" />
              <span>useful</span>
              <span>Reply</span>
              <span>Flag</span>
            </div>
            <div className="bsn-reviews">
              <div className="writer-container">
                {" "}
                <span className="writer-span">
                  <img src={avarta} alt="" className="writer-avarta" />
                  <span>Ifeoluwa</span>
                  <span>12 December 2023</span>
                </span>{" "}
              </div>
              <Divider className="divider-rev" />
              <article>
                {" "}
                <span>
                  <Rate value={5} defaultValue={5} /> Verified{" "}
                </span>
                19 hours ago
              </article>
              <article>
                <h3>
                  <b>We booked flight with this and it went horribly wrong.</b>
                </h3>
                <p>
                  We booked flight with this and it went horribly wrong. You
                  guys wouldn’t help when our flight was delayed for a long time
                  because of maintenance. We only got $68 when it cost a couple
                  hundred for what we lost. And we paid over a hundred for this
                  insurance. So the best you could do is refund us since you
                  couldn’t do the reason we booked using your insurance.
                </p>
                <p>
                  {" "}
                  <b>Date of Experience:</b>10 December 2023
                </p>
              </article>
              <Divider className="divider-rev" />
              <span>useful</span>
              <span>Reply</span>
              <span>Flag</span>
            </div>
            <div className="bsn-reviews">
              <div className="writer-container">
                {" "}
                <span className="writer-span">
                  <img src={avarta} alt="" className="writer-avarta" />
                  <span>Ifeoluwa</span>
                  <span>12 December 2023</span>
                </span>{" "}
              </div>
              <Divider className="divider-rev" />
              <article>
                {" "}
                <span>
                  <Rate value={5} defaultValue={5} /> Verified{" "}
                </span>
                19 hours ago
              </article>
              <article>
                <h3>
                  <b>We booked flight with this and it went horribly wrong.</b>
                </h3>
                <p>
                  We booked flight with this and it went horribly wrong. You
                  guys wouldn’t help when our flight was delayed for a long time
                  because of maintenance. We only got $68 when it cost a couple
                  hundred for what we lost. And we paid over a hundred for this
                  insurance. So the best you could do is refund us since you
                  couldn’t do the reason we booked using your insurance.
                </p>
                <p>
                  {" "}
                  <b>Date of Experience:</b>10 December 2023
                </p>
              </article>
              <Divider className="divider-rev" />
              <span>useful</span>
              <span>Reply</span>
              <span>Flag</span>
            </div>
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
          <article className="bsn-map">Track ur way to {name}</article>
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setBusinessInfo:(business)=>dispatch({type:SET_BUSINESS_INFO,payload:{business:business}})
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SingleBusines);
