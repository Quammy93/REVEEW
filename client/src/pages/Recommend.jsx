import React from "react";
import { recomend } from "../utils/jsonFiles/recomend";
import "../assets/css/recommend.css";

const Recommend = () => {
  return (
    <section className="recommend-wrapper">
      {recomend?.map((item) => {
        const { id, img, product_name } = item;

        return (
          <main key={id} className="recommend-container">
            <img src={img} alt="" className="recommend-img" />
            <p className="recomend-title">{product_name} </p>
          </main>
        );
      })}
    </section>
  );
};

export default Recommend;
