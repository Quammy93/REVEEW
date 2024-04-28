
import { SET_PRODUCTS,SET_IS_PRODUCTLOADING } from "../action";


// reducers/productReducer.js
const initialState = {
  products: [],
  isProductLoading:false,
};






const productReducer = (state = initialState, action) => {

  if(action.type==SET_PRODUCTS){

    return {...state,products:action.payload.products}
  }
  if(action.type==SET_IS_PRODUCTLOADING){

    return {...state,isProductLoading:action.payload.status}
  }

  // Handle actions and return new state accordingly
  return state;
};

export default productReducer;
