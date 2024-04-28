// reducers/userReducer.js
const initialState = {
  // Initial user state
  user:{ name: "", userId: "", role: ""}
};

const userReducer = (state = initialState, action) => {
  // Handle actions and return new state accordingly

  console.log(state);

  return state;
};

export default userReducer;
