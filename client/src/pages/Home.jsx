import React from "react";
import Navbar from "../components/Navbar";
import Navbar2 from "../components/Navbar2";
import SubMenu from "antd/es/menu/SubMenu";

import SubHero from "../components/SubHero";
import Recommend from "./Recommend";
import Footer from "../components/Footer";
import MostReview from "../components/MostReview";
import Sidebar from "../components/Sidebar";
import { useGlobalContext } from "../utils/context";
import img from "../assets/images/main8.jpg";
const Home = () => {
  const { showSidebar, closeSubmenu } = useGlobalContext();
  let loggedUser = { name: "", role: "" };
  // localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
  return (
    <main>
      <div className="sidecheck">
        <Sidebar />
      </div>
      {/**displaying home page or side menu*/}
      <div
        className={`${showSidebar ? "hide-home-content" : "show-home-content"}`}
      >
        <Navbar2 />

        {/**hero */}
        <div className="hero-aside" onMouseOver={closeSubmenu}>
          <img src={img} alt="" className="hero-image" />
          <div className="overlay"></div>
          <div className="intro-container">
            <h4>
              Read reviews ,Post Review .Find the brand and product you can
              trust
            </h4>
            <p>Share your experience to help other make the right decision</p>
            <button className="overlay-btn">Get Started</button>
          </div>
        </div>
        {/**hero */}
      </div>
    </main>
  );
};

export default Home;
