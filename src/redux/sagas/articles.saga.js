import { put, takeLatest, takeEvery } from "redux-saga/effects";
import axios from "axios";

function* fetchArticleDetails(action) {
  console.log("action for fetch details", action);
  // get single article details
  try {
    const articleDetails = yield axios.get(`/api/articles`);
    console.log("article details saga", articleDetails);
    yield put({
      type: "SET_ARTICLE_DETAILS",
      payload: articleDetails.data,
    });
  } catch (error) {
    console.log("get single article error", error);
  }
}

function* articleWatcherSaga() {
  //yield takeEvery("FETCH_MOVIES", fetchAllMovies);
  // trigger saga to GET Article
  yield takeEvery("FETCH_ARTICLE_DETAILS", fetchArticleDetails);
  // yield takeEvery("POST_NEW_MOVIE", postNewMovie);
  // yield takeEvery("UPDATE_MOVIE", updateMovie);
}

export default articleWatcherSaga;
