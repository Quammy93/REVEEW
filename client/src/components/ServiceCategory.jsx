import React from "react";
import { useGlobalContext } from "../utils/context";
import { connect } from "react-redux";
import {
  SET_SERVICE_CATEGORY,
  SET_IS_SERVICE_CONTAINER_OPEN,
} from "../redux/action";

const businessCategory = [
  "Restaurants",
  "Transport and Logistic",
  "Hotel",
  "Travel and Booking",
];
const ServiceCategory = ({
  isServiceContainerOpen,
  setServiceCategory,
  setIsServiceContainerOpen,
}) => {
  const {
    // setServiceCategory,
    //isServiceContainerOpen,
    //setIsServiceContainerOpen,
  } = useGlobalContext();

  const clicking = (text) => {
    console.log(text.item);
    setServiceCategory(text.item);
  };
  return (
    <article
      className={`${
        isServiceContainerOpen ? "business-category1 show" : "business-category1"
      }`}
      onMouseLeave={() => {
        setIsServiceContainerOpen(false);
      }}
    >
      <ul className="service-container">
        {businessCategory.map((item) => {
          return (
            <li key={item}
              className="bus-cat-list"
              onMouseOver={() => clicking({ item })}
              onClick={() => setIsServiceContainerOpen(false)}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </article>
  );
};

const mapStateToProps = (state) => {
  return {
    isServiceContainerOpen: state.business.isServiceContainerOpen,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(ownProps);
  return {
    setServiceCategory: (category) =>
      dispatch({ type: SET_SERVICE_CATEGORY, payload: { category: category } }),

    setIsServiceContainerOpen: (status) =>
      dispatch({
        type: SET_IS_SERVICE_CONTAINER_OPEN,
        payload: { status: status },
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ServiceCategory);
