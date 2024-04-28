// rootReducer.js
import { combineReducers } from "redux";
import userReducer from "./reducers/userReducer";
import productReducer from "./reducers/productReducer";
import appFunctionsReducer from "./reducers/appFunctionsReducer";
import businessReducer from "./reducers/businessReducer";

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  appFunctions: appFunctionsReducer,
  business: businessReducer,
});

export default rootReducer;
