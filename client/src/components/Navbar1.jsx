import React from "react";
import logo2 from "../assets/images/Group 2.png";
import { useGlobalContext } from "../utils/context";
import Submenu from "./Submenu";
import SearchResult from "./SearchResult";
import { MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";
//const url = "http://localhost:5000/api";
const url = "/api";

export default function Navbar1() {
  const {
    closeSubmenu,
    openSubmenu,
    isSidebarOpen,
    setIsSidebarOpen,
    searchItem,
    setSearchItem,
    searchResult,
    setSearchResult,
    isSearching,
    setIsSearching,
    isLoadingSearch,
    setIsLoadingSearch,
  } = useGlobalContext();

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
    console.log(e.target.classList);
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

  const handleSearch = async (e) => {
    await setSearchItem(e.target.value);
    console.log(searchItem);

    searchItem ? setIsSearching(true) : setIsSearching(false);

    fetchData(searchItem);
  };

  const fetchData = async (searchValue) => {
    // setIsProductLoading(true);
    setIsLoadingSearch(true);
    try {
      const response = await getAllProducts(searchValue);

      // const { products, numOfPages } = response.data;
      // setProducts(products);
      setSearchResult(response?.data?.products);
      console.log("products", response?.data?.products);

      //  setIsProductLoading(false);
      setIsLoadingSearch(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getAllProducts = async (searchValue) => {
    return await axios
      .get(`${url}/products?search=${searchValue}`)
      .catch((error) => {
        console.log(error);
        //toast.error(error.message);
      });
  };

  return (
    <>
      <nav onMouseOver={handleSubmenu}>
        <div>
          <img src={logo2} alt="" className="newlogo" />
        </div>
        <ul className="mid-nav-list">
          <li className="list-search">
            <span className="search-icon-cat">
              <MdSearch className="search-icon" />{" "}
            </span>
            <input
              type="text"
              className="nav-search-box"
              placeholder="Search for another company"
              value={searchItem}
              onChange={(e) => setSearchItem(e.target.value)}
              onKeyUp={handleSearch}
            />
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

          <Link to={"/login"}>
            <button className="sign-in-btn">Sign In</button>
          </Link>
        </div>
      </nav>
      <Submenu />
      <SearchResult />
    </>
  );
}
