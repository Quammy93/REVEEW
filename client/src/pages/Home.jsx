import React from "react";
import Navbar from "../components/Navbar"
import Hero from "../components/Hero";
import SubHero from "../components/SubHero";
import Recommend from "./Recommend";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
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
