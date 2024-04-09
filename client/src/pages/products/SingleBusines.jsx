import React from 'react'
import Navbar1 from '../../components/Navbar1'
import axios from "axios";
const url = "http://localhost:5000/api";
import  avarta from "../../assets/images/computer-1.jpeg"
import ReviewDetail from '../../components/ReviewDetail';
import { Checkbox, Rate, Progress, Divider } from "antd";


//const url = "/api";



import { useGlobalContext } from '../../utils/context';

const SingleBusines = () => {
    const { businessInfo, setBusinessInfo } = useGlobalContext();
    console.log(businessInfo)
     const {
       _id,
       business_name,
       business_category,
       business_location,
       numOfReview,
       business_img,
       business_Avgrating,
     } = businessInfo
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
              <img src={business_img} alt="" className="bsn-img-single-bsn" />
            </div>
            <div className="bsn-div">
              <h2>{business_name}</h2>
              <span>
                {" "}
                <Rate value={business_Avgrating} />
                <p>{numOfReview} Reviews</p>
              </span>
              <span>{business_location}</span>
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
              <span>Write a Review</span>
            </span>{" "}
            <span>
              <Rate value={3} defaultValue={3} />
            </span>
          </div>
          <div className="bsn-review-info">
            <ReviewDetail />
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
          <div className="bsn-info"></div>
        </section>
      </main>
    </div>
  );
}

export default SingleBusines
