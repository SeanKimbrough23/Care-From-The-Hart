import { combineReducers } from "redux";

//reducer function for storing booking requests
const bookingDetails = (state = {}, action) => {
  switch (action.type) {
    case "SET_BOOKINGS":
      console.log("inside booking reducer", action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default bookingDetails;
