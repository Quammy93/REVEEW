import React from "react";
//import { data } from "../utils/jsonFiles/product";
import sublinks from "./data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = React.useState({});
  const [products, setProducts] = React.useState([]);
  const [brands, setBrands] = React.useState([]);
  //const [category, setCategory] = React.useState([]);
  const [subCategory, setSubCategory] = React.useState([]);
  const [newFeeds, setNewFeeds] = React.useState([]);
  const [categoryClicked, setCategoryClicked] = React.useState("");
  const [feeds, setFeeds] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [showSidebar, setShowSidebar] = React.useState(false);
  const [isProductLoading, setIsProductLoading] = React.useState(false);
  const [productInfo, setProductInfo] = React.useState({});
    const [businessInfo, setBusinessInfo] = React.useState({});

  const [errorMessage, setErrorMessage] = React.useState("");
  //const [isShowSubmenu, setIsShowSubmenu] = React.useState(false);
  //const [page, setPage] = React.useState({ page: "", links: [] });
 // const [location, setLocation] = React.useState({});
  const [searchItem, setSearchItem] = React.useState("");
  const [searchResult, setSearchResult] = React.useState([]);
  const [IsSearching, setIsSearching] = React.useState(false);
  const [isLoadingSearch, setIsLoadingSearch] = React.useState(false);
  const [serviceCategory, setServiceCategory] = React.useState("");
  const [serviceLocation, setServiceLocation] = React.useState("");
  const [isServiceContainerOpen, setIsServiceContainerOpen] =
    React.useState(false);
  const [isLocationContainerOpen, setIsLocationContainerOpen] =
    React.useState(false);

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
  const closeSubmenu = () => {
    setIsShowSubmenu(false);
  };

  return (
    <AppContext.Provider
      value={{
       // setIsShowSubmenu,
        products,
        setProducts,
        brands,
        setBrands,
        subCategory,
        setSubCategory,
        feeds,
        setFeeds,
        loading,
        setLoading,
        errorMessage,
        setErrorMessage,
        newFeeds,
        setNewFeeds,
        categoryClicked,
        setCategoryClicked,
        user,
        setUser,
        showSidebar,
        setShowSidebar,
        isProductLoading,
        setIsProductLoading,
        openSubmenu,
        closeSubmenu,
       // isShowSubmenu,
       // page,
      //  location,
        searchItem,
        setSearchItem,
        searchResult,
        setSearchResult,
        productInfo,
        setProductInfo,
        IsSearching,
        setIsSearching,
        isLoadingSearch,
        setIsLoadingSearch,
        serviceCategory,
        setServiceCategory,
        serviceLocation,
        setServiceLocation,
        isServiceContainerOpen,
        setIsServiceContainerOpen,
        isLocationContainerOpen,
        setIsLocationContainerOpen,
        businessInfo,
        setBusinessInfo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return React.useContext(AppContext);
};

export { AppProvider, useGlobalContext };
