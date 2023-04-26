import { combineReducers } from "redux";

//reducer function for storing article details
const commentDetails = (state = [], action) => {
  switch (action.type) {
    case "SET_COMMENTS":
      console.log("inside comments reducer", action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default commentDetails;
