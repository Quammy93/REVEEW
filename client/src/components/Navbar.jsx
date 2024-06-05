import React from "react";
import "antd/dist/antd";
import "../assets/css/navbar.css";
import { Button, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";

import { FaUser, FaSortDown, FaCaretRight, FaBars } from "react-icons/fa";
import { MdOutlineExitToApp } from "react-icons/md";
import { useGlobalContext } from "../utils/context";
import axios from "axios";
const url = "http://localhost:5000/api";
//const url = "/api";

const Navbar = () => {
  const [showLogout, setShowLogout] = React.useState(false);
  const navigate = useNavigate();
  let name = "";
  const loggedIn = localStorage.getItem("loggedIn");

  const activeUser = JSON.parse(localStorage.getItem("loggedUser"));

  // const { name, role } = activeUser;
  // console.log("name", name);

  //console.log("loggedUser", loggedUser);
  const {
    user,
    showSidebar,
    setShowSidebar,
    products,
    setProducts,
    isProductLoading,
    setIsProductLoading,
    isSearching,
    setIsSearching,
  } = useGlobalContext();

  // console.log("name", loggedUser.name);

  activeUser ? (name = activeUser.name) : (name = "");
  console.log("user", user);

  const logout = async () => {
    await axios
      .get(`${url}/logout`)
      .then((response) => {
        navigate("/");
        localStorage.removeItem("loggedIn");
        localStorage.removeItem("loggedUser");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const opensidebar = () => {
    setShowSidebar(true);
    console.log(showSidebar);
  };

  const getAllProducts = async (searchValue) => {
    return await axios
      .get(`${url}/products?page=${1}&limit=${8}&search=${searchValue}`)
      .catch((error) => {
        console.log(error);
        //toast.error(error.message);
      });
  };

  const fetchData = async (searchValue) => {
    setIsProductLoading(true);
    try {
      const response = await getAllProducts(searchValue);

      const { products, numOfPages } = response.data;
      setProducts(products);

      setIsProductLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const onSearch = (value, _e, info) => {
    console.log(info?.source, value);
    if (value === "") {
      setIsSearching(false);
    } else {
      setIsSearching(true);
    }
    fetchData(value);
  };

  return (
    <nav>
      <Link to={"/"}>
        <div className="logo rev-logo">
          REVEEW
          {/**<img src={logo1} alt="" className="img-logo" /> */}
        </div>
      </Link>
      <div className="input">
        <Input.Search placeholder="search Product" onSearch={onSearch} />
      </div>

      <FaBars className="menu" onClick={() => opensidebar()} />

      {!loggedIn ? (
        <div className="nav-btn">
          <Link to={"/register"}>
            <Button className="signup-button">Sign up</Button>
          </Link>
          <Link to={"/login"}>
            {" "}
            <Button className="login-button">Login</Button>
          </Link>
        </div>
      ) : (
        <div className="admin-nav-info">
          <main className="admin-user">
            <span>
              <span>
                <FaUser />
              </span>
              <span className="ad-name">{name}</span>
            </span>
            <span>
              {showLogout ? (
                <FaCaretRight
                  onClick={() => {
                    setShowLogout(!showLogout);
                  }}
                  className="logout-icon"
                />
              ) : (
                <FaSortDown
                  onClick={() => {
                    setShowLogout(!showLogout);
                  }}
                  className="logout-icon"
                />
              )}
            </span>
          </main>
          <main>
            <div className={`${showLogout ? "logout show" : "logout"}`}>
              <span className="logout-span" onClick={logout}>
                <div>
                  <span>
                    <MdOutlineExitToApp />
                  </span>
                  <span>Logout</span>
                </div>
              </span>
            </div>
          </main>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
