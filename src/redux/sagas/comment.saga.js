import { put, takeLatest, takeEvery } from "redux-saga/effects";
import axios from "axios";

function* fetchComments(action) {
  //console.log("action for comments", action);
  // get comments
  try {
    const commentDetails = yield axios.get(`/api/comment`);
    console.log("comment saga", commentDetails);
    yield put({
      type: "SET_COMMENTS",
      payload: commentDetails.data,
    });
  } catch (error) {
    console.log("get comments error", error);
  }
}

function* handleCommentSubmit(action) {
  console.log("action for submitting comments", action);
  // get comments
  try {
    const articleComments = yield axios.post(
      `/api/comment/new`,
      action.payload
    );
    yield put({
      type: "FETCH_COMMENTS",
    });
    console.log("article comments saga", articleComments);
    yield put({
      type: "SET_ARTICLE_COMMENTS",
      payload: articleComments.data,
    });
  } catch (error) {
    console.log("get comments error", error);
  }
}

function* updateComment(action) {
  try {
    const articleComments = yield axios.put(
      `/api/comment/${action.payload.commentId}`,
      action.payload
    );
    yield put({ type: "FETCH_COMMENTS", articleComments });
  } catch (error) {
    console.log("Error updating comment error", error);
  }
}

function* deleteComment(action) {
  try {
    const response = yield axios.delete(`/api/comment/${action.payload}`);
    {
      yield put({ type: "FETCH_COMMENTS" });
    }
  } catch (error) {
    console.log("Error deleting comment", error);
  }
}

function* commentWatcherSaga() {
  // trigger saga to GET Article
  yield takeEvery("FETCH_COMMENTS", fetchComments);
  yield takeEvery("POST_NEW_COMMENT", handleCommentSubmit);
  yield takeEvery("UPDATE_COMMENT", updateComment);
  yield takeEvery("DELETE_COMMENT", deleteComment);
}

export default commentWatcherSaga;

//dispath triggers the SAGA which connects to the Route (router.js), which sends the QUERY to the DB
//action.payload becomes req.body
