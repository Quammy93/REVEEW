import React from "react";
import Footer from "../../components/Footer";
import Navbar4 from "../../components/Navbar4";
import "../../assets/css/displayreview.css";
//import { Rate } from "antd";
import axios from "axios";
const url = "http://localhost:5000/api";
//const url = "/api";

import { useGlobalContext } from "../../utils/context";
import { useNavigate } from "react-router-dom";
import { Rating } from "@mui/material";

import { Space,Spin, Radio,  Checkbox, Pagination } from "antd";
import { connect } from "react-redux";
import { CLOSE_SUBMENU } from "../../redux/action";

const DisplayRevieweeResult = ({closesubemenu}) => {
  const navigate = useNavigate();

  const desc = ["Terrible", "Bad", "Normal", "Good", "Excellent"];

  const [business, setBusiness] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [limit, setLimit] = React.useState(8);
  const [value, setValue] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [totalCount, setTotalCount] = React.useState(30);
  const [isLoading,setIsLoading] = React.useState(false);

  const handleItemClick = async (id) => {
    //await setBusinessInfo(item);

    navigate(`/business/${id}`);
  };

  const getAllBusiness = async () => {
    return await axios
      .get(
        `${url}/services?page=${currentPage}&limit=${limit}&location=${location}&avgrating=${value}`
      )
      .catch((error) => {
        console.log(error);
        //toast.error(error.message);
      });
  };
  const handlePagechange = (page) => {
    setCurrentPage(page);
    console.log(page);
  };
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
    // setShowFilter(false);
  };

  console.log("value", value);
  console.log("location", location);

  const onChecked = (e) => {
    console.log(e.target.checked);
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await getAllBusiness();

      console.log(response.data);

      //console.log(business);

      //  const { products, totalCount, numOfPages } = response.data;
      setBusiness(response.data.items);
       setTotalCount(response.data.totalCount);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  React.useEffect(() => {
    // Use an async function to fetch data

    fetchData();
  }, [value, location,currentPage]);

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
      <section
        className="display-business-container"
        onMouseOver={closesubemenu}
      >
        <main className="business-filter" onMouseOver={closesubemenu}>
          <article>
            <ul>
              <li className="browse-cat">
                <div className="link-title">
                  {" "}
                  <p className="cat-title">Ratings </p>
                  <span></span>
                </div>
                <ul className=" list-sub-container">
                  <li>
                    <Radio.Group
                      onChange={onChange}
                      value={value}
                      className="label-s"
                    >
                      <Space direction="vertical">
                        <Radio value={5}>
                          <Rating
                            name="read-only"
                            value={5}
                            readOnly
                            className="ui"
                          />
                        </Radio>
                        <Radio value={4}>
                          <Rating
                            name="read-only"
                            value={4}
                            readOnly
                            className="ui"
                          />
                        </Radio>
                        <Radio value={3}>
                          <Rating
                            name="read-only"
                            value={3}
                            readOnly
                            className="ui"
                          />
                        </Radio>
                        <Radio value={2}>
                          <Rating
                            name="read-only"
                            value={2}
                            readOnly
                            className="ui"
                          />
                        </Radio>
                        <Radio value={1}>
                          <Rating
                            name="read-only"
                            value={1}
                            readOnly
                            className="ui"
                          />
                        </Radio>
                        <Radio value={0}>
                          <Rating
                            name="read-only"
                            value={0}
                            readOnly
                            className="ui"
                          />
                        </Radio>
                        <Radio
                          value={""}
                          onClick={() => {
                            setValue("");
                          }}
                        >
                          <span className="radio-any">All Ratings </span>
                        </Radio>
                      </Space>
                    </Radio.Group>
                  </li>
                </ul>
              </li>
            </ul>
            <p className="cat-title location">Location </p>

            <select
              name=""
              id=""
              className="select-service"
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            >
              <option value="">Any</option>
              <option value="current">Current Location</option>
              <option value="Lagos">Lagos</option>
              <option value="Ibadan">Ibadan</option>
              <option value="Oyo">Oyo</option>
            </select>
          </article>
          <main>
            <p className="cat-title location">Company Status </p>

            <div>
              <article className="bsn-status">
                <span>Verified</span>
                <span>
                  <Checkbox onChange={onChecked} />
                </span>
              </article>
              <article className="bsn-status">
                <span>Claimed</span>
                <span>
                  <Checkbox onChange={onChecked} />
                </span>
              </article>
            </div>
          </main>
        </main>

        {/**business display container */}
        <section onMouseOver={closesubemenu}>
          {isLoading && (
            <div className="product-spin">
              <Space
                direction="vertical"
                style={{
                  width: "100%",
                }}
              >
                <Spin tip="Loading" size="large">
                  <div className="content " />
                </Spin>{" "}
              </Space>
            </div>
          )}
          {!isLoading && business.length == [] && <div>No Result Found</div>}

          {!isLoading &&
            business.length != [] &&
            business.map((item) => {
              const {
                _id,
                name,
                category,
                location,
                numOfReview,
                img,
                avgrating,
              } = item;

              return (
                <article className="display-business-article" key={_id}>
                  <main className="bsn-art-container">
                    <div>
                      <img src={img} alt="" className="bsn-img" />
                    </div>
                    <div>
                      <h2>
                        <b>{name}</b>
                      </h2>
                      <span>
                        {" "}
                        <Rating
                          name="read-only"
                          value={avgrating}
                          readOnly
                          className="ui"
                        />
                        <p>{numOfReview} Reviews</p>
                      </span>
                      <span>{location}</span>
                    </div>
                  </main>
                  <article className="reveewee-review-btn-div">
                    {" "}
                    <div>Most Relevant</div>
                    <button
                      className="reveewee-review-btn"
                      onClick={() => handleItemClick(_id)}
                    >
                      {" "}
                      Review
                    </button>
                  </article>
                </article>
              );
            })}

          {!isLoading && business.length != [] && (
            <main>
              <Pagination
                total={totalCount}
                pageSize={limit}
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
                current={currentPage}
                onChange={handlePagechange}
                className="paginate"
              />
            </main>
          )}
        </section>
      </section>
      <Footer  />
    </section>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    closesubemenu: () => dispatch({ type: CLOSE_SUBMENU }),
   
  };
};

export default connect(null,mapDispatchToProps) (DisplayRevieweeResult);
