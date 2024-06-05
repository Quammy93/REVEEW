import React from "react";
import logo from "../assets/images/Group 2.png";
export default function Footer() {
  return (
    <>
      <section className="footer-section">
        <article className="footer-article">
          <div className="footer-links">
            <span>
             
            <img src={logo} alt="" className="footer-logo-main" />
            </span>
          </div>
          <div className="footer-links">
            <h4>QUICK LINKS</h4>
            <ul>
              <li>Feeds</li>
              <li>Product of the week</li>
              <li>Reviews</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>OTHER LINKS</h4>
            <ul>
              <li>Login</li>
              <li>Sign Up</li>
              <li>Post Review</li>
            </ul>
          </div>
          <div className="divider"></div>
          <div className="footer-links">
            <h4>GET IN TOUCH</h4>
            <ul>
              <li>Contact Developers</li>
              <li>Maxwell</li>
              <li>Adedolapo</li>
              <li>Joy</li>
              <li>Ifeoluwa</li>
            </ul>
          </div>
        </article>
    
      </section>
      <footer className="footer-foot">
        <p>©{new Date().getFullYear()} Developed by MDJI. All rights reserved.</p>
      </footer>
    </>
  );
}
