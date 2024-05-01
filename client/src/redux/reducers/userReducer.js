// reducers/userReducer.js

import { SET_USER,SET_IS_LOGIN } from "../action";


const initialState = {
  // Initial user state
  user:{ },
  isLogin:false
};

const userReducer = (state = initialState, action) => {
  // Handle actions and return new state accordingly

 if(action.type==SET_USER){
  return {...state,user:action.payload.user}
 }
 if(action.type==SET_IS_LOGIN){
  return { ...state,isLogin:action.payload.status}
 }

  return state;
};

export default userReducer;
