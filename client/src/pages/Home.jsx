import React from "react";
import Navbar from "../components/Navbar";
import Navbar2 from "../components/Navbar2";
import SubMenu from "antd/es/menu/SubMenu";
import Hero from "../components/Hero";
import SubHero from "../components/SubHero";
import Recommend from "./Recommend";
import Footer from "../components/Footer";
import MostReview from "../components/MostReview";
import Sidebar from "../components/Sidebar";
import { useGlobalContext } from "../utils/context";
import img from "../assets/images/main52.jpg"
const Home = () => {
  const { showSidebar } = useGlobalContext();
  let loggedUser = { name: "", role: "" };
  // localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
  return (
    <main>
      <div className="sidecheck">
        <Sidebar />
      </div>

      <div
        className={`${showSidebar ? "hide-home-content" : "show-home-content"}`}
      >
        <Navbar2 />

        {/**  <div></div>

        <Hero />
        <section>
          <MostReview />
        </section>
        <div className="hh">
          <p>Recomended Products</p>
        </div>
        <Recommend />
        <Footer /> */}
        <div>
          <img src={img} alt="" className="hero-image" />
        </div>
      </div>
    </main>
  );
};

export default Home;
