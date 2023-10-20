import React from "react";
//import { data } from "../utils/jsonFiles/product";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [products, setProducts] = React.useState([]);
  const [brands, setBrands] = React.useState([]);
  //const [category, setCategory] = React.useState([]);
  const [subCategory, setSubCategory] = React.useState([]);
  const [newFeeds, setNewFeeds] = React.useState([]);
  const [categoryClicked, setCategoryClicked] = React.useState("");

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

        errorMessage,
        setErrorMessage,
        newFeeds,
        setNewFeeds,
        categoryClicked,
        setCategoryClicked,
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
