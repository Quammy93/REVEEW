import React from "react";
import logo2 from "../assets/images/Group 2.png";
import { useGlobalContext } from "../utils/context";
import Submenu from "./Submenu";
import SearchResult from "./SearchResult";
import { MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";
import { IoSearch } from "react-icons/io5";
import ServiceCategory1 from "./ServiceCategory1";
import Location1 from "./Location1";
import { useNavigate } from "react-router-dom";
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
  SET_IS_LOCATION_CONTAINER_OPEN,
  SET_IS_SERVICE_CONTAINER_OPEN,
  SET_SERVICE_CATEGORY,
  SET_SERVICE_LOCATION,
  SET_BUSINESS_SEARCHED,
  SET_USER,
} from "../redux/action";

const Navbar4 = ({
  searchItem,
  setSearchItem,
  setIsSearching,
  setSearchResult,
  closesubemenu,
  opensubemenu,
  setIsLoadingSearch,
  serviceCategory,
  serviceLocation,
  setServiceCategory,
  setServiceLocation,

  setIsLocationContainerOpen,

  setIsServiceContainerOpen,
  setBusinessSearched,
  isLogin,
  user,
  setUser,
}) => {
  const {
    // closeSubmenu,
    // openSubmenu,
    // searchItem,
    // setSearchItem,
    //  setSearchResult,
    //  setIsSearching,
    // setIsLoadingSearch,
    //  serviceCategory,
    //  setServiceCategory,
    // serviceLocation,
    // setServiceLocation,
    // setIsLocationContainerOpen,
    // setIsServiceContainerOpen,
  } = useGlobalContext();
  const showUser = () => {
    axios.get(`${url}/users/showuser`).then((response) => {
      console.log("response", response.data.user);
      setUser(response.data.user);
    });
  };

  React.useEffect(() => {
    showUser();
  }, []);

  // console.log("....user", user);

  const { name } = user;

  const navigate = useNavigate();

  const getSearchedBusiness = async (category, location) => {
    return await axios
      .get(`${url}/services?category=${category}&location=${location}`)
      .catch((error) => {
        console.log(error);
        //toast.error(error.message);
      });
  };

  const fetchBusiness = async () => {
    const response = await getSearchedBusiness(
      serviceCategory,
      serviceLocation
    );
    console.log(response.data);
    setBusinessSearched(response.data.items);
    navigate("/review-list");
  };

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
            <form action="" className="reviewee-form">
              <div className="therevieweeinput">
                <aside>
                  {" "}
                  <input
                    type="text"
                    placeholder="try resturants,hotel..."
                    className="find-reviewee-inpt1"
                    name="serviceCategory"
                    value={serviceCategory}
                    onChange={(e) => setServiceCategory(e.target.value)}
                    onClick={(e) => {
                      if (e.target.className == "find-reviewee-inpt1") {
                        setIsServiceContainerOpen(true);
                        setIsLocationContainerOpen(false);
                      }
                    }}
                  />
                </aside>
                <input
                  type="text"
                  className="find-reviewee-inpt2"
                  placeholder="location"
                  name="serviceLocation"
                  value={serviceLocation}
                  onChange={(e) => setServiceLocation(e.target.value)}
                  onClick={(e) => {
                    if (e.target.className == "find-reviewee-inpt2") {
                      setIsLocationContainerOpen(true);
                      setIsServiceContainerOpen(false);
                    }
                  }}
                />{" "}
                <span className="reviewee-icon-div">
                  <IoSearch className="reviewee-icon" onClick={fetchBusiness} />
                </span>
              </div>
            </form>
            <ServiceCategory1 />
            <Location1 />
          </li>
          <li className="link-btn" onMouseOver={displaySubmenu}>
            Categories
          </li>
          <li className="link-btn" onMouseOver={displaySubmenu}>
            Features
          </li>
          <a href="/write-review" className="a">
            <li> Write A Review</li>
          </a>
        </ul>

        <div className="end-nav-list">
          <div>Contact Us</div>

          {isLogin ? (
            <b>{name.charAt(0).toUpperCase()}</b>
          ) : (
            <Link to={"/login"}>
              <button className="sign-in-btn">Sign In</button>
            </Link>
          )}
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
    serviceCategory: state.business.serviceCategory,
    serviceLocation: state.business.serviceLocation,
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
    setServiceCategory: (category) =>
      dispatch({ type: SET_SERVICE_CATEGORY, payload: { category: category } }),
    setServiceLocation: (location) =>
      dispatch({ type: SET_SERVICE_LOCATION, payload: { location: location } }),
    setIsLocationContainerOpen: (status) =>
      dispatch({
        type: SET_IS_LOCATION_CONTAINER_OPEN,
        payload: { status: status },
      }),
    setIsServiceContainerOpen: (status) =>
      dispatch({
        type: SET_IS_SERVICE_CONTAINER_OPEN,
        payload: { status: status },
      }),
    setBusinessSearched: (result) =>
      dispatch({ type: SET_BUSINESS_SEARCHED, payload: { result: result } }),
    setUser: (user) => dispatch({ type: SET_USER, payload: { user: user } }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar4);
