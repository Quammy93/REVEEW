import React from 'react'
import { useGlobalContext } from "../utils/context";

const businessCategory = [
  "Lagos",
  "Abuja",
  "Ibadan",
  "PH",
];

const Location = () => {

    const {
      serviceLocation,
      setServiceLocation,
      isLocationContainerOpen,
      setIsLocationContainerOpen,
    } = useGlobalContext();
 
  

  const clicking = (text) => {
    console.log(text.item);
    setServiceLocation(text.item)
  };
  return (
    <article className={`${
        isLocationContainerOpen ? "location-category show" : "location-category"
      }`} 
   onMouseLeave={()=>{setIsLocationContainerOpen(false)}}>
      <ul className="service-container">
        {businessCategory.map((item) => {
          return (
            <li
              className="bus-cat-list"
              onMouseOver={() => clicking({ item })}
              onClick={() => setIsLocationContainerOpen(false)}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </article>
  );
}

export default Location
