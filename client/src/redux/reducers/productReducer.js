
import { SET_PRODUCTS,SET_IS_PRODUCTLOADING ,SET_PRODUCT_INFO} from "../action";


// reducers/productReducer.js
const initialState = {
  products: [],
  isProductLoading: false,
  productInfo:{}
};






const productReducer = (state = initialState, action) => {

  if(action.type==SET_PRODUCTS){

    return {...state,products:action.payload.products}
  }
  if(action.type==SET_IS_PRODUCTLOADING){

    return {...state,isProductLoading:action.payload.status}
  }
   if (action.type == SET_PRODUCT_INFO) {
     return { ...state, productInfo: action.payload.product };
   }

  // Handle actions and return new state accordingly
  return state;
};

export default productReducer;
