// reducers/userReducer.js
import { SET_SERVICE_CATEGORY,SET_SERVICE_LOCATION,SET_IS_LOCATION_CONTAINER_OPEN,SET_IS_SERVICE_CONTAINER_OPEN } from "../action";


const initialState = {
  // Initial user state
  serviceCategory: "",
  serviceLocation: "",
  isServiceContainerOpen: false,
  isLocationContainerOpen:false,
};

const businessReducer = (state = initialState, action) => {
  // Handle actions and return new state accordingly
if(action.type==SET_SERVICE_CATEGORY){
    return{...state,serviceCategory:action.payload.category}
}
if (action.type == SET_SERVICE_LOCATION) {
  return { ...state, serviceLocation: action.payload.location };
}
if (action.type == SET_IS_LOCATION_CONTAINER_OPEN) {
  return { ...state, isLocationContainerOpen: action.payload.status };
}
if (action.type == SET_IS_SERVICE_CONTAINER_OPEN) {
  return { ...state, isLocationContainerOpen: action.payload.status };
}
 
  return state;
};

export default businessReducer;
