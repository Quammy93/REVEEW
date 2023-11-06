import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SubHero from "../components/SubHero";
import Recommend from "./Recommend";
import Footer from "../components/Footer";
const Home = () => {
  let loggedUser = { name: "", role: "" };
 // localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
  return (
    <div>
      <Navbar />
      <div></div>

      <Hero />
      <div className="hh">
        <p>Recomended Products</p>
      </div>
      <Recommend />
      <Footer />
    </div>
  );
};

export default Home;
