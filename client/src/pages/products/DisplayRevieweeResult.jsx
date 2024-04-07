import React from "react";
import Navbar4 from "../../components/Navbar4";
import "../../assets/css/displayreview.css";
import { Rate } from "antd";
import axios from "axios";
const url = "http://localhost:5000/api";
//const url = "/api";

const DisplayRevieweeResult = () => {
  const desc = ["terrible", "bad", "normal", "good", "wonderful"];


  const [business, setBusiness] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [limit, setLimit] = React.useState(8);

  const getAllBusiness = async () => {
    return await axios.get(`${url}/business`).catch((error) => {
      console.log(error);
      //toast.error(error.message);
    });
  };

  const fetchData = async () => {
    //setIsProductLoading(true);
    try {
      const response = await getAllBusiness();

      console.log(response.data);

      console.log(business);

      //  const { products, totalCount, numOfPages } = response.data;
      setBusiness(response.data.business);
      //  setTotalCount(totalCount);
      //setIsProductLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  React.useEffect(() => {
    // Use an async function to fetch data

    fetchData();
  }, []);

  return (
    <section>
      <Navbar4 />

      <main>
        <p className="link-up">Reveew/Resturant</p>

        <article>
          <div className="display-review-top">
            <h2>Best Restuarants around Lagos</h2>
            <span>
              <label htmlFor="">sort -</label>
              <select name="sort" id="" className="select-sort">
                <option value="Recommended">All</option>
                <option value="Recommended">Recommended</option>
                <option value="most-reviewed">Most Reviewed</option>
                <option value="high-rate">Highest Rating</option>
              </select>
            </span>
          </div>
        </article>
      </main>
      <section className="display-business-container">
        <main className="business-filter">
          <article>
            <p>Rating</p>
            <ul>
              <li>Any</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
            </ul>
            <p>Location</p>
            <ul>
              <li>Any</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
            </ul>
          </article>
        </main>
        <section>
          {business.map((item) => {
            const {
              _id,
              business_name,
              business_category,
              business_location,
              numOfReview,
              business_img,
              business_Avgrating,
            } = item;

            return (
              <article className="display-business-article">
                <main className="bsn-art-container">
                  <div>
                    <img src={business_img} alt="" className="bsn-img" />
                  </div>
                  <div>
                    <h2>{business_name}</h2>
                    <span>
                      {" "}
                      <Rate tooltips={desc} value={business_Avgrating} />
                      <p>{numOfReview} Reviews</p>
                    </span>
                    <span>{business_location}</span>
                  </div>
                </main>
                <div>Most Relevant</div>
              </article>
            );
          })}
        </section>
      </section>
    </section>
  );
};

export default DisplayRevieweeResult;
