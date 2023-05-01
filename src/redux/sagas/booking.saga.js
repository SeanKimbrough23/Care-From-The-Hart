import { put, takeLatest, takeEvery } from "redux-saga/effects";
import axios from "axios";

function* fetchBookings(action) {
  //console.log("action for "booking", action);
  // get bookings
  try {
    const bookingDetails = yield axios.get(`/api/booking`);
    console.log("booking saga", bookingDetails);
    yield put({
      type: "SET_BOOKINGS",
      payload: bookingDetails.data,
    });
  } catch (error) {
    console.log("get booking error", error);
  }
}

// function* pendingBookings(action) {
//   try {
//     const pendingBooking = yield axios.post(`/api/booking/new`, action.payload);
//     yield put({
//       type: "FETCH_PENDING_REQUESTS",
//     });
//   } catch (error) {
//     console.log("error getting pending", error);
//   }
// }

function* handleBookingSubmit(action) {
  console.log("action for submitting bookings", action);
  // get bookings
  try {
    const bookingRequests = yield axios.post(
      `/api/booking/new`,
      action.payload
    );
    yield put({
      type: "FETCH_BOOKINGS",
    });
    console.log("bookings saga", bookingRequests);
    // yield put({
    //   type: "SET_BOOKINGS",
    //   payload: bookingRequests.data,
    // });
  } catch (error) {
    console.log("get bookings  error", error);
  }
}

function* bookingWatcherSaga() {
  // trigger saga to GET Article
  yield takeEvery("FETCH_BOOKINGS", fetchBookings);
  yield takeEvery("POST_NEW_BOOKING", handleBookingSubmit);
  //yield takeEvery("FETCH_PENDING_REQUESTS", pendingBookings);
}

const handleSubmit = async (event) => {
  event.preventDefault();

  try {
    const response = await axios.post("/api/bookings", RequestBooking);
    console.log(response.data);
    // assuming your backend responds with the created booking object
    dispatch({ type: "POST_NEW_BOOKING", payload: response.data });
  } catch (error) {
    console.error(error);
  }

  setBooking("");
};

export default bookingWatcherSaga;
