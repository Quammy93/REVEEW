import React from "react";
import Navbar from "../components/Navbar";
import Navbar2 from "../components/Navbar2";
import SubMenu from "antd/es/menu/SubMenu";
import { useGlobalContext } from "../utils/context";
import sublinks from "../utils/data";
import { connect } from "react-redux";

import "../assets/css/hero.css";

import SubHero from "../components/SubHero";
import Recommend from "./Recommend";
import Footer from "../components/Footer";
import MostReview from "../components/MostReview";
import Sidebar from "../components/Sidebar";
import img from "../assets/images/main8.jpg";
import img4 from "../assets/images/main6.jpg";
import img49 from "../assets/images/main49.jpg";
import img20 from "../assets/images/main20.jpg";
import img21 from "../assets/images/main21.jpg";
import icon1 from "../assets/images/icon1.gif";
import icon2 from "../assets/images/icon2.gif";
import icon3 from "../assets/images/icon3.gif";
import icon4 from "../assets/images/icon4.gif";
import icon5 from "../assets/images/icon5.gif";
import icon6 from "../assets/images/icon6.gif";
import icon7 from "../assets/images/icon7.gif";
import icon8 from "../assets/images/icon8.gif";
import icon9 from "../assets/images/icon9.gif";
import icon10 from "../assets/images/icon10.gif";
import icon11 from "../assets/images/icon11.gif";
import icon12 from "../assets/images/icon12.gif";
import icon13 from "../assets/images/icon13.gif";
import icon14 from "../assets/images/icon14.gif";
import icon15 from "../assets/images/icon15.gif";
import icon16 from "../assets/images/icon16.gif";
import icon17 from "../assets/images/icon17.gif";
import icon18 from "../assets/images/icon18.gif";
import icon19 from "../assets/images/icon19.gif";
import icon20 from "../assets/images/icon20.gif";
import icon21 from "../assets/images/icon21.gif";
import logo from "../assets/images/Group 2.png";
import {CLOSE_SUBMENU} from "../redux/action"


const Home = ({ showSidebar, closesubemenu }) => {
  //const {closeSubmenu } = useGlobalContext();
  let loggedUser = { name: "", role: "" };

  //handling page
  /** 
   const openSubmenu = (text, coordinates) => {
     const page = sublinks.find((link) => {
       if (link.page === text) {
         return link;
       }
     });
     setPage(page);
     setLocation(coordinates);
     setIsShowSubmenu(true);
   };
 */

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
        <div className="hero-aside" onMouseOver={closesubemenu}>
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

        <main className="hero-main">
          <section className="hero-container">
            <h3>Features Builts For Everyone</h3>

            <article className="hero-feature-article">
              <div className="hero-article-main">
                <span>
                  <img src={icon21} alt="" className="icon-img" />
                </span>
                <div className="hero-fearure-intro">
                  <h4>Connect in Minutes</h4>
                  <p>
                    The most proffesional will contact you within one minute The
                    The most proffesional will contact you within one minute The
                  </p>
                </div>
              </div>

              <div className="hero-article-main">
                <span>
                  <img src={icon20} alt="" className="icon-img" />
                </span>
                <div className="hero-fearure-intro">
                  <h4>Connect in Minutes</h4>
                  <p>
                    The most proffesional will contact you within one minute
                  </p>
                </div>
              </div>
              <div className="hero-article-main">
                <span>
                  <img src={icon3} alt="" className="icon-img" />
                </span>
                <div className="hero-fearure-intro">
                  <h4>Connect in Minutes</h4>
                  <p>
                    The most proffesional will contact you within one minute
                  </p>
                </div>
              </div>

              <div className="hero-article-main">
                <span>
                  <img src={icon10} alt="" className="icon-img" />
                </span>
                <div className="hero-fearure-intro">
                  <h4>Connect in Minutes</h4>
                  <p>
                    The most proffesional will contact you within one minute
                  </p>
                </div>
              </div>
              <div className="hero-article-main">
                <span>
                  <img src={icon11} alt="" className="icon-img" />
                </span>
                <div className="hero-fearure-intro">
                  <h4>Connect in Minutes</h4>
                  <p>
                    The most proffesional will contact you within one minute
                  </p>
                </div>
              </div>

              <div className="hero-article-main">
                <span>
                  <img src={icon15} alt="" className="icon-img" />
                </span>
                <div className="hero-fearure-intro">
                  <h4>Connect in Minutes</h4>
                  <p>
                    The most proffesional will contact you within one minute
                  </p>
                </div>
              </div>

              <div className="hero-article-main">
                <span>
                  <img src={icon17} alt="" className="icon-img" />
                </span>
                <div className="hero-fearure-intro">
                  <h4>Connect in Minutes</h4>
                  <p>
                    The most proffesional will contact you within one minute
                  </p>
                </div>
              </div>
              <div className="hero-article-main">
                <span>
                  <img src={icon18} alt="" className="icon-img" />
                </span>
                <div className="hero-fearure-intro">
                  <h4>Connect in Minutes</h4>
                  <p>
                    The most proffesional will contact you within one minute
                  </p>
                </div>
              </div>
            </article>
          </section>
        </main>

        <aside className="hero-all">
          <section className="hero2-display">
            <div>
              <main className="self-img">
                <img src={img4} alt="" className="hero-img2" />

                <div>
                  <img src={img49} alt="" className="hero-img1" />
                  <p>
                    Read reviews ,Post Review .Find the brand and product you
                    can trust Read reviews ,Post Review .Find the brand and
                    product you can trust Read reviews ,Post Review .Find the
                    brand and product you can trust Read reviews ,Post Review
                    .Find the brand and product you can trust Read reviews ,Post
                    Review .Find the brand and product you can trust Read
                    reviews ,Post Review .Find the brand and product you can
                    trust
                  </p>

                  <button className="self-btn">Write a Review</button>
                </div>
              </main>
              <article></article>
            </div>
          </section>
          <section className="hero-step">
            <div className="hero-step-container">
              <span className="hero-step-icon">1</span>
              <h3>Create an account</h3>
              <p>
                Sign up on reveew by filing the sign up form and get started w
              </p>
            </div>

            <div className="hero-step-container">
              <span className="hero-step-icon">2</span>
              <h3>Read Reviews</h3>
              <p>You can read reviews of others from their experience </p>
            </div>
            <div className="hero-step-container">
              <span className="hero-step-icon">3</span>
              <h3>Post Review</h3>
              <p>
                tell your story about everything,help other make rigt decision
              </p>
            </div>
            <section>Hello</section>
          </section>

          <article className="explore-category">
            <main>
              <div className="explore-category-heading">
                <h2>Explore categories</h2>
                <span className="explore-btn">
                  <p>Explore More</p>
                </span>
              </div>

              <ul className="explore-category-list">
                {sublinks[0].links.map((link, index) => {
                  const { label, icon } = link;

                  return (
                    <li className="cat-list">
                      <span className="list-icon">{icon}</span>{" "}
                      <span className="list-label">{label}</span>
                    </li>
                  );
                })}
              </ul>
            </main>
          </article>
          <section>Recent Reviews</section>
          <section className="hero-abs">
            <div className="hero-abs1">
              <div className="hero-abs1-container">
                <img src={logo} alt="" />
                <h3>
                  Trustpilot is a review platform that’s open to everyone. Share
                  your experiences to help others make better choices and
                  encourage companies to up their game
                </h3>
                <button className="hero-abs1-btn"> Get Started</button>
              </div>
            </div>
            <div className="hero-abs2">
              <div className="hero-abs2-container">
                <img src={img21} alt="" className="abs-img" />
                <img src={img20} alt="" className="abs-img" />
              </div>
              <p>
                Trustpilot is a review platform that’s open to everyone. Share
                your experiences to help others make better choices and
                encourage companies to up their game
              </p>
            </div>
          </section>
          <main className="hero3">
            <section className="hero-contact-us">
              <div className="hero-contact">
                <span>
                  <h4>
                    <b>
                      Need to Integrate with ur Busineess or Want us to List a
                      Product?
                    </b>
                  </h4>
                  <p>
                    Trustpilot is a review platform that’s open to everyone.
                    Share your experiences to help others make better choices
                    and
                  </p>
                </span>
                <div>
                  <button> Contact Us</button>
                </div>
              </div>
            </section>
            <Footer />
          </main>
        </aside>
      </div>
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    showSidebar: state.appFunctions.showSidebar,
  }
}
 const mapDispatchToProps = (dispatch) => {
 
  return { 
    closesubemenu:()=> dispatch({type:CLOSE_SUBMENU})
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Home);
