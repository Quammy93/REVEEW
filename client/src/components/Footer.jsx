import React from "react";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-logo">
        <span style={{ font: "30px", fontWeight: 100 }}>Reveew</span>
      </div>
      <div className="sections">
        <div className="section2">
          <p>Links</p>
          <p>Chrome extension</p>
          <p>Login</p>
          <p>Sign Up</p>
        </div>
        <div className="section3">
          <p>Product</p>
          <p>Pricing</p>
          <p>Browse Products</p>
          <p>Browse Brand</p>
          <p>How it Works</p>
          <p>New Features</p>
        </div>
        <div className="section1">
          <p>Developers</p>
          <p>Maxwell</p>
          <p>Joy</p>
          <p>Adedolapo</p>
          <p>Ifeoluwa</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
