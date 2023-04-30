import { put, takeLatest, takeEvery } from "redux-saga/effects";
import axios from "axios";

function* fetchBookings(action) {
  //console.log("action for "booking", action);
  // get bookings
  try {
    const bookingDetails = yield axios.get(`/api/booking`);
    console.log("booking saga", bookingDetails);
    yield put({
      type: "SET_BOOKING",
      payload: bookingDetails.data,
    });
  } catch (error) {
    console.log("get booking error", error);
  }
}
