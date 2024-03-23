import React from 'react'
import { useGlobalContext } from "../utils/context";

const businessCategory = [
  "Restaurants",
  "Transport and Logistic",
  "Hotel",
  "Travel and Booking",
];

const Location = () => {

    const { serviceLocation, setServiceLocation } = useGlobalContext();
 
  

  const clicking = (text) => {
    console.log(text.item);
    setServiceLocation(text.item)
  };
  return (
    <article className="location-category">
      <ul className="service-container">
        {businessCategory.map((item) => {
          return (
            <li className="bus-cat-list" onMouseOver={() => clicking({ item })}>
              {item}
            </li>
          );
        })}
      </ul>
    </article>
  );
}

export default Location
