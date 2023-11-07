import React from "react";
import "antd/dist/antd";
import "../assets/css/navlinks.css";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../utils/context";
import axios from "axios";
const url = "/api";

const NavLinks = () => {
  const {
    showSidebar,
    setShowSidebar,
    products,
    setProducts,
    isProductLoading,
    setIsProductLoading,
  } = useGlobalContext();
  const navigate = useNavigate();

  const [current, setCurrent] = React.useState("feeds");
  const onClick = async (e) => {
    console.log("click ", e);
    setCurrent(e.key);
    console.log(e.key);
    if (e.key === "feeds") {
      setShowSidebar(false);
      localStorage.setItem("category", e.key);
      return navigate("/");
    } else {
      setShowSidebar(false);
      localStorage.setItem("category", e.key);

      if (e.key === "All Products") {
        fetchData("");
        return navigate(`/products/${e.key}?category=`);
      }

      fetchData(e.key);
      return navigate(`/products/${e.key}?category=${e.key}`);
    }
  };

  const getAllProducts = async (category) => {
    return await axios
      .get(`${url}/products?page=${1}&limit=${6}&product_category=${category}`)
      .catch((error) => {
        console.log(error);
        //toast.error(error.message);
      });
  };

  const fetchData = async (category) => {
     setIsProductLoading(true);
    try {
      const response = await getAllProducts(category);

      const { products, totalCount, numOfPages } = response.data;
      setProducts(products);
      // setTotalCount(totalCount);
        setIsProductLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <section>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        className="navlinks-container"
        mode="inline"
        defaultOpenKeys={["home"]}
        items={[
          {
            label: "HOME",
            key: "home",
            children: [{ label: "Feeds", key: "feeds" }],
          },
          {
            label: "CATEGORIES",
            key: "categories",

            children: [
              {
                label: "All Products",
                key: "All Products",
              },
              {
                label: "Fashion",
                key: "Fashion",
              },

              {
                label: "Electronics",
                key: "Electronics",
              },
              {
                label: "Computing",
                key: "Computing",
              },
              {
                label: "Phone & tablet",
                key: "Phone and tablet",
              },
              {
                label: "Appliances",
                key: "Appliances",
              },
            ],
          },
        ]}
      ></Menu>
    </section>
  );
};

export default NavLinks;
