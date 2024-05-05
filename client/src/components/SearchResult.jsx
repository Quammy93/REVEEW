import React from "react";
import { useGlobalContext } from "../utils/context";
import axios from "axios";
//const url = "http://localhost:5000/api";
const url = "/api";
import { useNavigate } from "react-router-dom";
import { Rate } from "antd";
import { connect } from "react-redux";
import {
  SET_PRODUCT_INFO,
  SET_SEARCH_ITEM,
  SET_IS_SEARCHING,
  SET_IS_LOADING_SEARCH
} from "../redux/action";



const SearchResult = ({
  searchResult,
  IsSearching,
  isLoadingSearch,
  setSearchItem,
  setIsSearching,
  setIsLoadingSearch,
  setProductInfo,
}) => {
  const {
    // searchResult,

   // setProductInfo,
    //setSearchItem,
    // IsSearching,
    //setIsSearching,
    //isLoadingSearch,
    //setIsLoadingSearch,
  } = useGlobalContext();
  const navigate = useNavigate();

  console.log(searchResult);

  const getAllProducts = async (id) => {
    return await axios.get(`${url}/products/${id}`).catch((error) => {
      console.log(error);
      //toast.error(error.message);
    });
  };

  const fetchData = async (id) => {
    try {
      const response = await getAllProducts(id);
      setIsLoadingSearch(false);

      const { product } = response.data;

      console.log(response);

      setProductInfo(product);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = async (category, product, id) => {
    //console.log("hllllllli");
    // setIsLoadingSearch(true);
    console.log("looading", isLoadingSearch);
    await fetchData(id);
    // setIsLoadingSearch(false);
    navigate(`/products/${category}/${product}/${id}`);
    handlSearchResultClick();
  };

  const handlSearchResultClick = () => {
    setSearchItem("");
    setIsSearching(false);
  };

  return (
    <section
      className={`${
        IsSearching
          ? "search-result-container"
          : "search-result-container not-searching"
      }`}
    >
      <section>
        <h5 className="search-result-heading">
          {isLoadingSearch ? "Searching..." : "Search results"}
        </h5>

        <div>
          {!isLoadingSearch && searchResult?.length == 0 && "No result found"}
        </div>

        <div>
          {searchResult?.map((result) => {
            const {
              _id,
              product_Avgrating,
              product_brand,
              product_category,
              product_name,
            } = result;

            return (
              <div
                key={_id}
                onClick={() =>
                  handleSearch(product_category, product_name, _id)
                }
                className="search-result-div"
              >
                <h5>{product_name}</h5>
                <span className="search-result-container-list">
                  {" "}
                  <h6>Category-{product_category}</h6>
                  <h6>120k Reviews</h6>
                  <span>
                    <Rate
                      disabled
                      defaultValue={product_Avgrating}
                      value={product_Avgrating}
                      className="rev-rate"
                    />
                  </span>
                </span>
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
};


const mapStateToProps = (state) => {
  return {
    isLoadingSearch: state.appFunctions.isLoadingSearch,
    searchResult: state.appFunctions.searchResult,
    IsSearching: state.appFunctions.IsSearching,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(ownProps);
  return {
    setSearchItem: (search) =>
      dispatch({ type: SET_SEARCH_ITEM, payload: { input: search } }),

    setIsSearching: (status) =>
      dispatch({ type: SET_IS_SEARCHING, payload: { status: status } }),

    setIsLoadingSearch: (status) =>
      dispatch({ type: SET_IS_LOADING_SEARCH, payload: { status: status } }),
    setProductInfo:(product)=>dispatch({type:SET_PRODUCT_INFO,payload:{product:product}})
  };
};





export default connect(mapStateToProps,mapDispatchToProps) (SearchResult);
