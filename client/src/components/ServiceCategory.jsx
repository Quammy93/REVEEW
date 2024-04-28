import React from "react";
import { useGlobalContext } from "../utils/context";

const businessCategory = [
  "Restaurants",
  "Transport and Logistic",
  "Hotel",
  "Travel and Booking",
];
const ServiceCategory = () => {
  const {
   
    setServiceCategory,
    isServiceContainerOpen,
    setIsServiceContainerOpen,
  } = useGlobalContext();
 
  

  const clicking = (text) => {
    console.log(text.item);
    setServiceCategory(text.item)
  };
  return (
    <article
      className={`${
        isServiceContainerOpen ? "business-category show" : "business-category"
      }`} 
   onMouseLeave={()=>{setIsServiceContainerOpen(false)}} >
      <ul className="service-container">
        {businessCategory.map((item) => {
          return (
            <li className="bus-cat-list" onMouseOver={() => clicking({ item })} onClick={()=>setIsServiceContainerOpen(false)}>
              {item}
              
            </li>
          );
        })}
      </ul>
    </article>
  );
};

export default ServiceCategory;
