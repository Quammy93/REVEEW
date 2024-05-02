import React from "react";
import Navbar4 from "../../components/Navbar4";
import "../../assets/css/displayreview.css";
//import { Rate } from "antd";
import axios from "axios";
const url = "http://localhost:5000/api";
//const url = "/api";

import { useGlobalContext } from "../../utils/context";
import { useNavigate } from "react-router-dom";

import { Space, Rate, Radio, Input, Checkbox, Pagination } from "antd";

const DisplayRevieweeResult = () => {
  const navigate = useNavigate();

 

  const desc = ["terrible", "bad", "normal", "good", "wonderful"];

  const [business, setBusiness] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [limit, setLimit] = React.useState(8);
  const [value, setValue] = React.useState("");
  const [totalCount, setTotalCount] = React.useState(30);

  const handleItemClick = async (id) => {
    //await setBusinessInfo(item);

    navigate(`/business/${id}`);
  };

  const getAllBusiness = async () => {
    return await axios.get(`${url}/services`).catch((error) => {
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

  const onChecked = (e) => {
    console.log(e.target.checked);
  };

  const fetchData = async () => {
    //setIsProductLoading(true);
    try {
      const response = await getAllBusiness();

      console.log(response.data);

      //console.log(business);

      //  const { products, totalCount, numOfPages } = response.data;
      setBusiness(response.data.items);
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
                          <Rate
                            disabled
                            defaultValue={5}
                            style={{ backgroundColor: "white" }}
                          />
                        </Radio>
                        <Radio value={4}>
                          <Rate
                            disabled
                            defaultValue={4}
                            style={{ backgroundColor: "white" }}
                          />
                        </Radio>
                        <Radio value={3}>
                          <Rate
                            disabled
                            defaultValue={3}
                            style={{ backgroundColor: "white" }}
                          />
                        </Radio>
                        <Radio value={2}>
                          <Rate
                            disabled
                            defaultValue={2}
                            style={{ backgroundColor: "white" }}
                          />
                        </Radio>
                        <Radio value={1}>
                          <Rate
                            disabled
                            defaultValue={1}
                            style={{ backgroundColor: "white" }}
                          />
                        </Radio>
                        <Radio value={0}>
                          <Rate
                            disabled
                            defaultValue={0}
                            style={{ backgroundColor: "white" }}
                          />
                        </Radio>
                        <Radio value={""}>
                          <span className="radio-any">All Ratings</span>
                        </Radio>
                      </Space>
                    </Radio.Group>
                  </li>
                </ul>
              </li>
            </ul>
            <p className="cat-title location">Location </p>

            <select name="" id="" className="select-service">
              <option value="Lagos">Lagos</option>
              <option value="Ibadan">Ibadan</option>
              <option value="Oyo">Oyo</option>
              <option value="Lagos">Lagos</option>
              <option value="Ibadan">Ibadan</option>
              <option value="Oyo">Oyo</option>
              <option value="Lagos">Lagos</option>
              <option value="Ibadan">Ibadan</option>
              <option value="Oyo">Oyo</option>
              <option value="Lagos">Lagos</option>
              <option value="Ibadan">Ibadan</option>
              <option value="Oyo">Oyo</option>
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
        <section>
          {business.map((item) => {
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
                <main
                  className="bsn-art-container"
                  onClick={() => handleItemClick(_id)}
                >
                  <div>
                    <img src={img} alt="" className="bsn-img" />
                  </div>
                  <div>
                    <h2>{name}</h2>
                    <span>
                      {" "}
                      <Rate tooltips={desc} value={avgrating} />
                      <p>{numOfReview} Reviews</p>
                    </span>
                    <span>{location}</span>
                  </div>
                </main>
                <div>Most Relevant</div>
              </article>
            );
          })}

          <main>
            {business.length != [] && (
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
            )}
          </main>
        </section>
      </section>
    </section>
  );
};

export default DisplayRevieweeResult;
