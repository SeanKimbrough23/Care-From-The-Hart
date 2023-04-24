import { put, takeLatest, takeEvery } from "redux-saga/effects";
import axios from "axios";

function* fetchComments(action) {
  console.log("action for comments", action);
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
    console.log("article comments saga", articleComments);
    yield put({
      type: "SET_ARTICLE_COMMENTS",
      payload: articleComments.data,
    });
  } catch (error) {
    console.log("get comments error", error);
  }
}
function* commentWatcherSaga() {
  //yield takeEvery("FETCH_MOVIES", fetchAllMovies);
  // trigger saga to GET Article
  yield takeEvery("FETCH_COMMENTS", fetchComments);
  yield takeEvery("POST_NEW_COMMENT", handleCommentSubmit);
  // yield takeEvery("UPDATE_MOVIE", updateMovie);
}

export default commentWatcherSaga;
