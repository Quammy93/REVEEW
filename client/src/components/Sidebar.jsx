import React from "react";
import NavLinks from "./NavLinks";

import "antd/dist/antd";
import "../assets/css/navbar.css";
import "../assets/css/sidebar.css";
import { Button, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import logo1 from "../assets/images/Group 2.png";
import { FaUser, FaSortDown, FaCaretRight, FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineExitToApp } from "react-icons/md";
import { useGlobalContext } from "../utils/context";
import axios from "axios";
const url = "http://localhost:5000/api";
//const url = "/api";
import User from "./User";
import { connect } from "react-redux";
import { SET_SHOW_SIDEBAR } from "../redux/action";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  const {  } = useGlobalContext();
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


const mapStateToProps = (state) => {
  return {
    showSidebar: state.appFunctions.showSidebar,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(ownProps);
  return {
    setShowSidebar: (status) =>
      dispatch({
        type: SET_SHOW_SIDEBAR,
        payload: { status: status },
      }),

  };
};



export default  connect(mapStateToProps,mapDispatchToProps) (Sidebar);
