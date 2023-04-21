import { combineReducers } from "redux";

//reducer function for storing article details
const articleDetails = (state = {}, action) => {
  switch (action.type) {
    case "SET_ARTICLE_DETAILS":
      console.log("inside reducer", action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default articleDetails;
