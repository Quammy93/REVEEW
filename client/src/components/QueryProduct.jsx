import React from "react";
import "../assets/css/queryProduct.css";

import { useGlobalContext } from "../utils/context";

import { useParams } from "react-router-dom";


const QueryProduct = () => {
  const { categoryClicked } = useGlobalContext();

  const { selectedCategory } = useParams();

  return (
    <div className="query-top">
      <div className="left-query">
        <p className="heading-link">
          Home <span>/</span>
          {selectedCategory}
        </p>
        <h2 className="product-heading">{selectedCategory}</h2>
      </div>

      <div className="right-query">
        <p className="per-page">
          1 <span>out</span>45
        </p>
        <div className="sort-div">
          Sort By:
          <span className="sort-1">Price -High To Low</span>
          <span className="sort-2">Price -Low To High</span>
        </div>
      </div>
    </div>
  );
};

export default QueryProduct;
