
// rootReducer.js
import { combineReducers } from 'redux';
import userReducer from './reducers/userReducer';
import productReducer from './reducers/productReducer';
import appFunctionsReducer from './reducers/appFunctionsReducer';



const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  appFunctions:appFunctionsReducer
});

export default rootReducer;


