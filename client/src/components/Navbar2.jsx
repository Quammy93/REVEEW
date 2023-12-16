import React from "react";
import logo2 from "../assets/images/Group 2.png";
import { useGlobalContext } from "../utils/context";
import Submenu from "./Submenu";

export default function Navbar2() {
  const { closeSubmenu, openSubmenu, isSidebarOpen, setIsSidebarOpen } =
    useGlobalContext();

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
    console.log(e.target.classList)
  };

  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    console.log(page);
    const tempBtnLocation = e.target.getBoundingClientRect();
    console.log(tempBtnLocation);
    const center = (tempBtnLocation.left + tempBtnLocation.right) / 2;
    const bottom = tempBtnLocation.bottom;
    openSubmenu(page, { center, bottom });
  };

  return (
    <>
      <nav onMouseOver={handleSubmenu}>
        <div>
          <img src={logo2} alt="" className="newlogo" />
        </div>
        <ul className="mid-nav-list">
          <li>
            <input type="search" className="nav-search-box" />
          </li>
          <li className="link-btn" onMouseOver={displaySubmenu}>
            Categories
          </li>
          <li className="link-btn" onMouseOver={displaySubmenu}>
            Features
          </li>
          <li> Write A Review</li>
        </ul>

        <div className="end-nav-list">
          <div>Contact Us</div>
          <button className="sign-in-btn">Sign In</button>
        </div>
      </nav>
      <Submenu/>
    </>
    
  );
}
