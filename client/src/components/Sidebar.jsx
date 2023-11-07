import React from "react";
import NavLinks from "./NavLinks";

import "antd/dist/antd";
import "../assets/css/navbar.css";
import "../assets/css/sidebar.css";
import { Button, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import logo1 from "../assets/images/revlogo.png";
import { FaUser, FaSortDown, FaCaretRight, FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineExitToApp } from "react-icons/md";
import { useGlobalContext } from "../utils/context";
import axios from "axios";
//const url = "http://localhost:5000/api";
const url = "/api";
import User from "./User";

const Sidebar = () => {
  const { showSidebar, setShowSidebar } = useGlobalContext();
  console.log(showSidebar);

  const closesidebar = () => {
    setShowSidebar(false);
    console.log(showSidebar);
  };

  return (
    <div className={`${showSidebar ? "show-sidebar" : "hide-sidebar"}`}>
      <nav>
        <Link to={"/"}>
          <div className="logo rev-logo">
            REVEEW
            {/**<img src={logo1} alt="" className="img-logo" /> */}
          </div>
        </Link>

        <AiOutlineClose className="menu" onClick={() => closesidebar()} />
      </nav>

      <NavLinks />

      <div className="user-detail">
      
        <User />
      </div>
    </div>
  );
};

export default Sidebar;
