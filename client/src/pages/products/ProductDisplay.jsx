import React from "react";
import Navbar from "../../components/Navbar";
import Navbar2 from "../../components/Navbar2";
import "../../assets/css/productDisplay.css";
import QueryProduct from "../../components/QueryProduct";
import {
  AiOutlineRight,
  AiOutlineDown,
  AiOutlineMenuFold,
  AiOutlineClose,
} from "react-icons/ai";
import { useGlobalContext } from "../../utils/context";
import { useNavigate, Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";
const url = "http://localhost:5000/api";
//const url = "/api";
import { Alert, Spin } from "antd";
//import { getAllProducts } from "../../utils/axios";
import axios from "axios";

import { useParams } from "react-router-dom";

import { Space, Rate, Radio, Input, Checkbox, Pagination } from "antd";
import { SET_IS_PRODUCTLOADING,SET_PRODUCTS,CLOSE_SUBMENU } from "../../redux/action";
import { connect } from "react-redux";

const ProductDisplay = ({
  showSidebar,
  isProductLoading,
  setIsProductLoading,
  products,
  setProducts,
  closeSubmenu,
}) => {
  let { selectedCategory } = useParams();
  //console.log("select", selectedCategory);
  // let selectedCategory = localStorage.getItem("category");
 // console.log(selectedCategory);
  const {
   // showSidebar,
   // isProductLoading,
   // setIsProductLoading,
  //  products,
  //  setProducts,
  //  closeSubmenu,
  } = useGlobalContext();

  console.log(products)
  let clickedCategory = selectedCategory;
  if (clickedCategory === "All Products") {
    clickedCategory = "";
  }

  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = React.useState(1);
  const [limit, setLimit] = React.useState(8);
  const [totalCount, setTotalCount] = React.useState(30);
  const [sort, setSort] = React.useState("");
  const [searchValue, setSearchValue] = React.useState("");
  const [productWithoutFilter, setProductWithoutFilter] = React.useState([]);
  const [filter, setFilter] = React.useState([]);
  const [category, setCategory] = React.useState(clickedCategory || "");
  // const [sortedUp, setSortedUp] = React.useState("");
  // const [sortedDown, setSortedDown] = React.useState("");

  const [value, setValue] = React.useState("");
  const [toggleCategory, setToggleCategory] = React.useState(false);
  const [toggleRating, setToggleRating] = React.useState(false);
  const [toggleBrand, setToggleBrand] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(false);

  const getAllProducts = async () => {
    return await axios
      .get(
        `${url}/products?page=${currentPage}&limit=${limit}&sort=${sort}&avgrating=${value}&category=${category}&search=${searchValue}&filter=${filter.join(
          ","
        )}`
      )
      .catch((error) => {
    //    console.log(error);
        //toast.error(error.message);
      });
  };

  const getProductsWithoutFilter = async () => {
    return await axios.get(`${url}/products`).catch((error) => {
    //  console.log(error);
    });
  };

  const fetchData = async () => {
    setIsProductLoading(true);
    try {
      const response = await getAllProducts();

      const { items, totalCount, numOfPages } = response.data;
      setProducts(items);
      setTotalCount(totalCount);
      setIsProductLoading(false);
    } catch (error) {
      //console.error("Error fetching data:", error);
    }
  };

  React.useEffect(() => {
    getProductsWithoutFilter().then((response) => {
      //console.log(response.data.items);
      setProductWithoutFilter(response.data.items);
    });
  }, []);

  React.useEffect(() => {
    // Use an async function to fetch data

    fetchData();
  }, [currentPage, value, filter, sort, category]);

  let browseCategory = [
    ...new Set(productWithoutFilter.map((product) => product.category)),
  ];
  let brand = [
    ...new Set(products.map((product) => product.brand)),
    "All Brand",
  ];
  console.log(brand);

  const onChange = (e) => {
 //   console.log("radio checked", e.target.value);
    setValue(e.target.value);

    setShowFilter(false);
  };
  const onChecked = async (checkedValues) => {
 //   console.log("checked", checkedValues);

    let newcheckedValues = checkedValues.map((item) =>
      item === "All Brand" ? " " : item
    );

    setFilter(newcheckedValues);
 //   console.log("checked", newcheckedValues);
    setShowFilter(false);
    //localStorage.setItem("filteredBrand", checkedValues);
    //setFiltered(checkedValues);
  };
  const handlePagechange = (page) => {
    setCurrentPage(page);
 //   console.log(page);
  };

  const openCategorySubLinks = () => {
    setToggleCategory(!toggleCategory);
  };
  const openBrandSubLinks = () => {
    setToggleBrand(!toggleBrand);
  };
  const openRatingSubLinks = () => {
    setToggleRating(!toggleRating);
  };

  const handleProduct = (category, product, id) => {
    navigate(`/products/${category}/${product}/${id}`);
  };
  return (
    <main>
      <div className="sidecheck">
        <Sidebar />
      </div>

      <div
        className={`${showSidebar ? "hide-home-content" : "show-home-content"}`}
      >
        <div className="product-nav">
          <Navbar2 />
        </div>
        {/**
        {isProductLoading && (
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
        {!isProductLoading && products.length == [] && (
          <div>No Result Found</div>
        )}

 */}
        {/**  {!isProductLoading && products.length > 0 && ("")} */}

        <div onMouseOver={closeSubmenu}>
          {" "}
          <div className="query-top product-query">
            <div className="left-query">
              <p className="heading-link">
                <Link to="/" style={{ color: "black" }}>
                  Home{" "}
                </Link>{" "}
                <span>/</span>
                {selectedCategory}
              </p>
              <h2 className="product-heading">{selectedCategory}</h2>
            </div>

            <div className="right-query">
              <p className="per-page"></p>
              <div className="sort-div">
                Sort By:
                <span
                  className="sort-1"
                  onClick={() => {
                    setSort("a-z");
                  }}
                >
                  Price -High To Low
                </span>
                <span
                  className="sort-2"
                  onClick={() => {
                    setSort("z-a");
                  }}
                >
                  Price -Low To High
                </span>
              </div>
            </div>
          </div>
          {/** */}
          <span className="float">
            {showFilter ? (
              <AiOutlineClose onClick={() => setShowFilter(false)} />
            ) : (
              <AiOutlineMenuFold onClick={() => setShowFilter(true)} />
            )}
          </span>
          <section className="products-wrapper">
            <div
              className={`${
                showFilter
                  ? "product-menu show-product-filter "
                  : "product-menu  "
              }`}
            >
              <ul>
                <li className="browse-cat ">
                  <div onClick={openCategorySubLinks} className="link-title">
                    <p className="cat-title">Browse Category </p>
                    <span>
                      {" "}
                      {toggleCategory ? <AiOutlineDown /> : <AiOutlineRight />}
                    </span>
                  </div>
                  <ul
                    className={`${
                      toggleCategory
                        ? " list-sub-container"
                        : " hide-sub-container"
                    }`}
                  >
                    <li>
                      {browseCategory?.map((item, id) => {
                        return (
                          <p
                            className="brw-cat-p"
                            key={id}
                            onClick={() => {
                              setCategory(item);
                            }}
                          >
                            {item}
                          </p>
                        );
                      })}
                    </li>
                  </ul>
                </li>

                <li className="browse-cat">
                  <div onClick={openBrandSubLinks} className="link-title">
                    {" "}
                    <p className="cat-title">Brand </p>
                    <span>
                      {" "}
                      {toggleBrand ? <AiOutlineDown /> : <AiOutlineRight />}
                    </span>
                  </div>
                  <ul
                    className={`${
                      toggleBrand
                        ? " list-sub-container"
                        : " hide-sub-container"
                    }`}
                  >
                    <li>
                      <Input.Search placeholder="search product" />
                    </li>
                    <li className="filter-cat">
                      <Checkbox.Group
                        options={brand}
                        defaultValue={[""]}
                        onChange={onChecked}
                        className="check"
                      />
                    </li>
                  </ul>
                </li>

                <li className="browse-cat">
                  <div onClick={openRatingSubLinks} className="link-title">
                    {" "}
                    <p className="cat-title">Ratings </p>
                    <span>
                      {" "}
                      {toggleRating ? <AiOutlineDown /> : <AiOutlineRight />}
                    </span>
                  </div>
                  <ul
                    className={`${
                      toggleRating
                        ? " list-sub-container"
                        : " hide-sub-container"
                    }`}
                  >
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
                        </Space>
                      </Radio.Group>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <main
              className={`${
                showFilter
                  ? " products-container-main hide-product"
                  : "products-container-main"
              }`}
            >
              {/**here............................. */}

              {/**....................../........... */}
              <main className="products-container">
                {isProductLoading && (
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
                {!isProductLoading && products.length == [] && (
                  <div>No Result Found</div>
                )}
                {/**
                {products?.map((product) => {
                  const { _id, category, name, avgrating, img, numOfReview } =
                    product;

                  return (
                    <section
                      className={`${
                        showFilter
                          ? "product-section-container show-filter-cont"
                          : "product-section-container"
                      }`}
                      key={_id}
                    >
                      <div className="product-intro">
                        <img src={img} alt="" className="product-img" />
                        <p className="product-title">{name} </p>
                      </div>
                      <span className="rev-rate-span">
                        <Rate
                          disabled
                          defaultValue={avgrating}
                          value={avgrating}
                          className="rev-rate"
                        />

                        <p className="rev-num">
                          {numOfReview === 0 || numOfReview === 1
                            ? `${numOfReview}  Review`
                            : `${numOfReview}  Reviews`}{" "}
                        </p>
                      </span>
                      <button
                        className="prod-rev-btn"
                        onClick={() => handleProduct(category, name, _id)}
                      >
                        Reviews
                      </button>
                    </section>
                  );
                })}

                 */}
                {!isProductLoading && products.length != [] && (
                  products?.map((product) => {
                      const {
                        _id,
                        category,
                        name,
                        avgrating,
                        img,
                        numOfReview,
                      } = product;
console.log(product)
                      return (
                        <section
                          className={`${
                            showFilter
                              ? "product-section-container show-filter-cont"
                              : "product-section-container"
                          }`}
                          key={_id}
                        >
                          <div className="product-intro">
                            <img src={img} alt="" className="product-img" />
                            <p className="product-title">{name} </p>
                          </div>
                          <span className="rev-rate-span">
                            <Rate
                              disabled
                              defaultValue={avgrating}
                              value={avgrating}
                              className="rev-rate"
                            />

                            <p className="rev-num">
                              {numOfReview === 0 || numOfReview === 1
                                ? `${numOfReview}  Review`
                                : `${numOfReview}  Reviews`}{" "}
                            </p>
                          </span>
                          <button
                            className="prod-rev-btn"
                            onClick={() => handleProduct(category, name, _id)}
                          >
                            Reviews
                          </button>
                        </section>
                      );
                    })
                )}
              </main>

              {products.length != [] && (
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
          <Footer />
        </div>

        {/**  <QueryProduct />*/}
      </div>
    </main>
  );
};


const mapStateToProps=(state)=>{
  return {
    showSidebar: state.appFunctions.showSidebar,
    isProductLoading: state.product.isProductLoading,
   
    products: state.product.products,
  
   
  };
}

const mapDispatchToProps=(dispatch)=>{
  return {
    setIsProductLoading:(status)=>dispatch({type:SET_IS_PRODUCTLOADING,payload:{status:status}}),
     setProducts:(products)=>dispatch({type:SET_PRODUCTS,payload:{products:products}}),
     closeSubmenu:()=>dispatch({type:CLOSE_SUBMENU})
  };
}
 

export default connect(mapStateToProps,mapDispatchToProps) (ProductDisplay);
