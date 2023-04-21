import { combineReducers } from "redux";

//reducer function for storing article details
const articleDetails = (state = {}, action) => {
  switch (action.type) {
    case "SET_ARTICLE_DETAILS":
      return action.payload;
    case "CLEAR_ARTICLE_DETAILS":
      return {};
    default:
      return state;
  }
};

export default combineReducers({
  articleDetails,
});
