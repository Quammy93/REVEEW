import React from "react";
import "../assets/css/hero.css";
import NavLinks from "./NavLinks";
import Feeds from "./Feeds";
import Popular from "./Popular";

const Hero = () => {
  return (
    <section className="hero-container">
      <article className="nav-container">
        <NavLinks />
      </article>

      <article className="feed-container">
        <Feeds />
      </article>
      <article className="other-container">
        <Popular />
      </article>
    </section>
  );
};

export default Hero;
