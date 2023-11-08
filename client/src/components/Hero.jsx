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
        <article>
          {/** <main className="home-intro">
            <h4>
              Read reviews on a any product , Post Review on a product .Find the
              brand and product you can trust
            </h4>
            <p>Share your experience to help other make the right decision</p>
            <div className="home-btn">
              {" "}
              <button className="home-btn">Get Started</button>
            </div>
          </main> */}
          <p>Feeds</p>
          Be informed and get updated with news and features of your favourite
          brand and products
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
