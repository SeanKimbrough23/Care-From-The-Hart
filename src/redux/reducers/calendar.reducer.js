import { combineReducers } from "redux";

const weekendsVisible = (state = true, action) => {
  switch (action.type) {
    case "TOGGLE_WEEKENDS":
      return !state;

    default:
      return state;
  }
};

const eventsById = (state = {}, action) => {
  switch (action.type) {
    case "RECEIVE_EVENTS":
      return action.plainEventObjects;

    case "CREATE_EVENT":
    case "UPDATE_EVENT":
      return {
        ...state,
        [action.plainEventObject.id]: action.plainEventObject,
      };

    case "DELETE_EVENT":
      const newState = { ...state }; // copy
      delete newState[action.eventId];
      return newState;

    default:
      return state;
  }
};

export default combineReducers({
  weekendsVisible,
  eventsById,
});
// The weekendsVisible reducer toggles the boolean value of the state variable when it receives the TOGGLE_WEEKENDS action and returns the new value.
// The eventsById reducer handles several actions. It sets the state of the eventsById object to the plainEventObjects array when it receives the RECEIVE_EVENTS action. When it receives the CREATE_EVENT or UPDATE_EVENT actions, it adds or updates the event with the given id in the state object, respectively. Finally, when it receives the DELETE_EVENT action, it creates a new object by copying the existing state object and deleting the event with the given eventId.

// The combineReducers function combines the weekendsVisible and eventsById reducers into a single reducer that can be used with the redux library.
