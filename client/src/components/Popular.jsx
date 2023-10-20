import React from "react";
import img1 from "../assets/images/computer-1.jpeg";
import "../assets/css/popular.css";

const Popular = () => {
  const popular = [
    {
      img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/20/2668132/1.jpg?6251",
      topic: "Phones with the most feature  ",
    },
    {
      img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/55/7046932/1.jpg?2739",
      topic: "Power bank that can last you 4days",
    },
    {
      img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/39/4927521/1.jpg?8740",
      topic: "New Samsung Galaxy cons and pros",
    },
    {
      img: "https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/fashion_300x240.png",
      topic: "Best men Sneaker of the year",
    },
    {
      img: "https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/earphones_300x240.png",
      topic: "A must mobile accessory",
    },
    {
      img: " https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/00/295531/1.jpg?1832",
      topic: "Most rated T shirt",
    },
  ];
  return (
    <section className="popular-container">
      <h2 className="popular-heading">Popular Topics</h2>
      {popular?.map((article, id) => {
        const { img, topic } = article;
        return (
          <div key={id} className="popular-article">
            <img src={img} alt="" className="item-img" />
            <p className="popular-p">{topic}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Popular;
