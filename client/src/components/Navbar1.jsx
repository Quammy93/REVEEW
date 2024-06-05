import React from "react";
import logo2 from "../assets/images/Group 2.png";
import { useGlobalContext } from "../utils/context";
import Submenu from "./Submenu";
import SearchResult from "./SearchResult";
import UserNavigation from "./UserNavigation";
import { useNavigate } from "react-router-dom";
import { MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";
import { Avatar } from "antd";
const url = "http://localhost:5000/api";
//const url = "/api";

import { connect } from "react-redux";
import {
  SET_SEARCH_ITEM,
  SET_IS_SEARCHING,
  SET_SEARCH_RESULT,
  OPEN_SUBMENU,
  CLOSE_SUBMENU,
  SET_IS_LOADING_SEARCH,
  SET_USER,
} from "../redux/action";

const Navbar1 = ({
  searchItem,
  setSearchItem,
  setIsSearching,
  setSearchResult,
  closesubemenu,
  opensubemenu,
  setIsLoadingSearch,
  isLogin,
  user,
  setUser,
}) => {
  const {} = useGlobalContext();



  const showUser = () => {
    axios.get(`${url}/users/showuser`).then((response) => {
      console.log("response", response.data.user);
      setUser(response.data.user);
    });
  };

  React.useEffect(() => {
    showUser();
  }, []);











  const { name } = user;

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closesubemenu();
    }
    console.log(e.target.classList);
  };

  const navigate = useNavigate();

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
      setSearchResult(response?.data?.items);
      console.log("products", response?.data?.items);

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
        <a href="/">
          <img src={logo2} alt="" className="newlogo" />
        </a>
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

          <a href="/write-review" className="a">
            <li> Review</li>
          </a>
        </ul>

        <div className="end-nav-list">
          <div>Contact Us</div>

          <div>
            {isLogin ? (
              <Avatar>{name.charAt(0).toUpperCase()}</Avatar>
            ) : (
              <Link to={"/login"}>
                <button className="sign-in-btn">Sign In</button>
              </Link>
            )}
          </div>
        </div>
        <UserNavigation />
      </nav>
      <Submenu />
      <SearchResult />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    searchItem: state.appFunctions.searchItem,
    user: state.user.user,
    isLogin: state.user.isLogin,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(ownProps);
  return {
    closesubemenu: () => dispatch({ type: CLOSE_SUBMENU }),
    opensubemenu: (text, coordinate) =>
      dispatch({ type: OPEN_SUBMENU, payload: { text, coordinate } }),

    setSearchItem: (search) =>
      dispatch({ type: SET_SEARCH_ITEM, payload: { input: search } }),

    setIsSearching: (status) =>
      dispatch({ type: SET_IS_SEARCHING, payload: { status: status } }),
    setSearchResult: (result) =>
      dispatch({ type: SET_SEARCH_RESULT, payload: { result: result } }),
    setIsLoadingSearch: (status) =>
      dispatch({ type: SET_IS_LOADING_SEARCH, payload: { status: status } }),
    setUser: (user) => dispatch({ type: SET_USER, payload: { user: user } }),
  };
};


export default connect(mapStateToProps, mapDispatchToProps) (Navbar1)