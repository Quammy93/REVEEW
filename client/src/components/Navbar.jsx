import React from "react";
import "antd/dist/antd";
import "../assets/css/navbar.css";
import { Button, Input } from "antd";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">REVEEW</div>
      <div className="input">
        <Input.Search placeholder="search Reveev" />
      </div>
      <div className="nav-btn">
        <Link to={"/register"}>
          <Button className="signup-button">Sing up</Button>
        </Link>
        <Link to={"/login"}>
          {" "}
          <Button className="login-button">Login</Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
