import React from "react";
import Navbar from "../../components/Navbar";
import "../../assets/css/productDisplay.css";
import QueryProduct from "../../components/QueryProduct";
import { AiOutlineRight, AiOutlineDown } from "react-icons/ai";
import { useGlobalContext } from "../../utils/context";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
const url = "http://localhost:5000/api";
//import { getAllProducts } from "../../utils/axios";
import axios from "axios";

import { useParams } from "react-router-dom";

import { Space, Rate, Radio, Input, Checkbox, Pagination } from "antd";

const ProductDisplay = () => {
  let { selectedCategory } = useParams();
  //const { categoryClicked } = useGlobalContext();
  let clickedCategory = selectedCategory;
  if (clickedCategory === "All Products") {
    clickedCategory = "";
  }

  const navigate = useNavigate();
  const { products, setProducts } = useGlobalContext();

  const [currentPage, setCurrentPage] = React.useState(1);
  const [limit, setLimit] = React.useState(8);
  const [totalCount, setTotalCount] = React.useState(30);
  const [sort, setSort] = React.useState("");
  const [searchValue, setSearchValue] = React.useState("");
  // const [filtered, setFiltered] = React.useState([]);
  const [filter, setFilter] = React.useState([]);
  const [category, setCategory] = React.useState(clickedCategory || "");
  // const [sortedUp, setSortedUp] = React.useState("");
  // const [sortedDown, setSortedDown] = React.useState("");

  const [value, setValue] = React.useState("");
  const [toggleCategory, setToggleCategory] = React.useState(false);
  const [toggleRating, setToggleRating] = React.useState(false);
  const [toggleBrand, setToggleBrand] = React.useState(false);

  const getAllProducts = async () => {
    return await axios
      .get(
        `${url}/products?page=${currentPage}&limit=${limit}&sort=${sort}&product_Avgrating=${value}&product_category=${category}&search=${searchValue}&filter=${filter.join(
          ","
        )}`
      )
      .catch((error) => {
        console.log(error);
        //toast.error(error.message);
      });
  };

  const fetchData = async () => {
    try {
      const response = await getAllProducts();

      const { products, totalCount, numOfPages } = response.data;
      setProducts(products);
      setTotalCount(totalCount);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  React.useEffect(() => {
    // Use an async function to fetch data

    fetchData();
  }, [currentPage, value, filter, sort]);

  let browseCategory = [
    ...new Set(products.map((product) => product.product_category)),
  ];
  let brand = [...new Set(products.map((product) => product.product_brand))];
  console.log(brand);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const onChecked = async (checkedValues) => {
    console.log("checked", checkedValues);
    setFilter(checkedValues);
    //localStorage.setItem("filteredBrand", checkedValues);
    //setFiltered(checkedValues);
  };
  const handlePagechange = (page) => {
    setCurrentPage(page);
    console.log(page);
  };
  const plainOptions = ["Apple", "Pear", "Orange"];
  const options = [
    {
      label: "Apple",
      value: "Apple",
    },
    {
      label: "Pear",
      value: "Pear",
    },
    {
      label: "Orange",
      value: "Orange",
    },
  ];
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
    <div>
      <Navbar />
      {/**  <QueryProduct />*/}
      <div className="query-top">
        <div className="left-query">
          <p className="heading-link">
            Home <span>/</span>
            {selectedCategory}
          </p>
          <h2 className="product-heading">{selectedCategory}</h2>
        </div>

        <div className="right-query">
          <p className="per-page">
          
          </p>
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
      <section className="products-wrapper">
        <div className="product-menu">
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
                  toggleCategory ? " list-sub-container" : " hide-sub-container"
                }`}
              >
                <li>
                  {browseCategory?.map((item, id) => {
                    return (
                      <p className="brw-cat-p" key={id}>
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
                  toggleBrand ? " list-sub-container" : " hide-sub-container"
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
                  toggleRating ? " list-sub-container" : " hide-sub-container"
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
                        <Rate disabled defaultValue={5} />
                      </Radio>
                      <Radio value={4}>
                        <Rate disabled defaultValue={4} />
                      </Radio>
                      <Radio value={3}>
                        <Rate disabled defaultValue={3} />
                      </Radio>
                      <Radio value={2}>
                        <Rate disabled defaultValue={2} />
                      </Radio>
                      <Radio value={1}>
                        <Rate disabled defaultValue={1} />
                      </Radio>
                    </Space>
                  </Radio.Group>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <main className="products-container-main">
          <main className="products-container">
            {products?.map((product) => {
              const {
                _id,
                product_category,
                product_name,
                product_Avgrating,
                img,
              } = product;

              return (
                <section className="product-section-container" key={_id}>
                  <div className="product-intro">
                    <img src={img} alt="" className="product-img" />
                    <p className="product-title">{product_name} </p>
                  </div>
                  <span className="rev-rate-span">
                    {" "}
                    <Rate
                      disabled
                      defaultValue={product_Avgrating}
                      value={product_Avgrating}
                      className="rev-rate"
                    />{" "}
                    <span>5 Reviews</span>
                  </span>
                  <button
                    className="prod-rev-btn"
                    onClick={() =>
                      handleProduct(product_category, product_name, _id)
                    }
                  >
                    Reviews
                  </button>
                </section>
              );
            })}
          </main>
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
      </section>
      <Footer />
    </div>
  );
};

export default ProductDisplay;
