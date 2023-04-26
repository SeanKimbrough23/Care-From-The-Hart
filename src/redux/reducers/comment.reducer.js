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
const updateLikes = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_LIKE_COUNT":
      const commentIndex = state.commentDetails.findIndex(
        (comment) => comment.id === action.payload.commentId
      );
      const updatedComment = {
        ...state.commentDetails[commentIndex],
        likes: action.payload.newLikeCount,
      };
      const updatedCommentDetails = [...state.commentDetails];
      updatedCommentDetails[commentIndex] = updatedComment;
      return { ...state, commentDetails: updatedCommentDetails };
  }
};

const addComment = (state = {}, action) => {
  switch (action.type) {
    case "ADD_COMMENT":
      return {
        ...state,
        commentDetails: [...state.commentDetails, action.payload],
      };
  }
};
export default commentDetails;
