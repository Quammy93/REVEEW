import React from "react";
import "antd/dist/antd";
import "../assets/css/navlinks.css";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../utils/context";

const NavLinks = () => {
  const navigate = useNavigate();

  const [current, setCurrent] = React.useState("feeds");
  const onClick = async (e) => {
    console.log("click ", e);
    setCurrent(e.key);
    console.log(e.key);
    if (e.key === "feeds") {
      return navigate("/");
    } else {
      return navigate(`/products/${e.key}?category=${e.key}`);
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
                key: "Aplliances",
              },
            ],
          },
        ]}
      ></Menu>
    </section>
  );
};

export default NavLinks;
