import React from "react";
import logo2 from "../assets/images/Group 2.png";
import { useGlobalContext } from "../utils/context";
import Submenu from "./Submenu";
import SearchResult from "./SearchResult";
import { MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";
const url = "http://localhost:5000/api";
import { connect } from "react-redux";
import { SET_SEARCH_ITEM,SET_IS_SEARCHING,SET_SEARCH_RESULT,OPEN_SUBMENU, CLOSE_SUBMENU,SET_IS_LOADING_SEARCH } from "../redux/action";
//const url = "/api";

const Navbar2 = ({searchItem,setSearchItem,setIsSearching, setSearchResult, closesubemenu,opensubemenu,setIsLoadingSearch }) => {
  const {
    // closeSubmenu,
    // openSubmenu,

   // searchItem,
   // setSearchItem,

   // setSearchResult,

   // setIsSearching,

   // setIsLoadingSearch,
  } = useGlobalContext();

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closesubemenu();
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
    opensubemenu(page, { center, bottom });
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
              placeholder="Search Reveew"
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
          <div>
            <Link to={"/login"}>
              {/* <button className="sign-in-btn">Sign In</button>* */}
              <button className="sign-in-btn">
                <b>S</b>
              </button>
            </Link>
          </div>
        </div>
      </nav>
      <Submenu />
      <SearchResult />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    searchItem: state.appFunctions.searchItem,
  };
};
const mapDispatchToProps = (dispatch,ownProps) => {
   console.log(ownProps);
  return {
    closesubemenu: () => dispatch({type:CLOSE_SUBMENU}),
    opensubemenu: (text,coordinate) => dispatch({type:OPEN_SUBMENU,payload:{text,coordinate}}),
   
    setSearchItem:(search)=>dispatch({type:SET_SEARCH_ITEM,payload:{input:search}}),
    
    setIsSearching:(status)=>dispatch({type:SET_IS_SEARCHING,payload:{status:status}}),
     setSearchResult:(result)=>dispatch({type:SET_SEARCH_RESULT,payload:{result:result}}),
     setIsLoadingSearch:(status)=>dispatch({type:SET_IS_LOADING_SEARCH,payload:{status:status}})
  };
};



export default connect(mapStateToProps,mapDispatchToProps)(Navbar2);
