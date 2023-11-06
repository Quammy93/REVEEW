import React from "react";
import "../assets/css/hero.css";
import NavLinks from "./NavLinks";
import Feeds from "./Feeds";
import Popular from "./Popular";
import { useGlobalContext } from "../utils/context";


const Hero = () => {
  return (
    <section className="hero-container">
      <article className="nav-container">
        <NavLinks />
      </article>
      <section>
     

        <article className="">
          <Feeds />
        </article>
      </section>
      <article className="other-container">
        <Popular />
      </article>
    </section>
  );
};

export default Hero;
