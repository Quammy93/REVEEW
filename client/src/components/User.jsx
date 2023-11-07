import React from "react";
import "antd/dist/antd";
import "../assets/css/navbar.css";
import { Button, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import logo1 from "../assets/images/revlogo.png";
import { FaUser, FaSortDown, FaCaretRight, FaBars } from "react-icons/fa";
import { MdOutlineExitToApp } from "react-icons/md";
import { useGlobalContext } from "../utils/context";
import axios from "axios";
//const url = "http://localhost:5000/api";
const url = "/api";

const User = () => {


 const [showLogout, setShowLogout, showSidebar, setShowSidebar] =
   React.useState(false);
 const navigate = useNavigate();
 let name = "";
 const loggedIn = localStorage.getItem("loggedIn");

 const activeUser = JSON.parse(localStorage.getItem("loggedUser"));

 // const { name, role } = activeUser;
 // console.log("name", name);

 //console.log("loggedUser", loggedUser);
 const { user } = useGlobalContext();

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




  return (
    <div>
      {!loggedIn ? (
        <div className="">
          <Link to={"/register"}>
            <Button className="signup-button sidebar-reg">Sign up</Button>
          </Link>
          <Link to={"/login"}>
            {" "}
            <Button className="login-button sidebar-login">Login</Button>
          </Link>
        </div>
      ) : (
        <div className="admin-nav-info-user ">
          <main className="admin-user-user ">
            <span>
              <span>
                <FaUser />
              </span>
              <span className="ad-name-user">{name}</span>
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
    </div>
  );
};

export default User;
