import React from 'react'
import Navbar1 from '../../components/Navbar1'
import axios from "axios";
const url = "http://localhost:5000/api";
import  avarta from "../../assets/images/computer-1.jpeg"
import ReviewDetail from '../../components/ReviewDetail';


//const url = "/api";

import { Rate } from 'antd';

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
          <div className="bsn-reviews">
            <div className="writer-container">
              {" "}
              <span className="writer-span">
                <img src={avarta} alt="" className="writer-avarta" />
                <span>Ifeoluwa</span>
                <span>1 Review</span>
              </span>{" "}
             
            </div>
          </div>
        </section>
        <section>
          <div className="bsn-info"></div>
        </section>
      </main>
    </div>
  );
}

export default SingleBusines
