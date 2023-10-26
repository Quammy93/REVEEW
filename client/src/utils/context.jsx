import React from "react";
//import { data } from "../utils/jsonFiles/product";

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

  const [errorMessage, setErrorMessage] = React.useState("");

  return (
    <AppContext.Provider
      value={{
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
