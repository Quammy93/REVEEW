import React from 'react'
import { useGlobalContext } from "../utils/context";
import {connect} from "react-redux";
import { SET_SERVICE_LOCATION,SET_IS_LOCATION_CONTAINER_OPEN } from '../redux/action';

const businessCategory = [
  "Lagos",
  "Abuja",
  "Ibadan",
  "PH",
  "Oyo"
];

const Location = ({
  setServiceLocation,
  isLocationContainerOpen,
  setIsLocationContainerOpen,
}) => {
  const {
   // serviceLocation,
  //  setServiceLocation,
  //  isLocationContainerOpen,
  //  setIsLocationContainerOpen,
  } = useGlobalContext();

  const clicking = (text) => {
    console.log(text.item);
    setServiceLocation(text.item);
  };
  return (
    <article
      className={`${
        isLocationContainerOpen
          ? "location-category1 show"
          : "location-category1"
      }`}
      onMouseLeave={() => {
        setIsLocationContainerOpen(false);
      }}
    >
      <ul className="service-container">
        {businessCategory.map((item) => {
          return (
            <li key={item}
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
};


const mapStateToProps = (state) => {
  return {
    isLocationContainerOpen: state.business.isLocationContainerOpen,
   
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(ownProps);
  return {
    setServiceLocation: (location) =>
      dispatch({ type: SET_SERVICE_LOCATION, payload: { location: location } }),

    setIsLocationContainerOpen: (status) =>
      dispatch({
        type: SET_IS_LOCATION_CONTAINER_OPEN,
        payload: { status: status },
      }),
  };
};

export default connect(mapStateToProps,mapDispatchToProps) (Location)
