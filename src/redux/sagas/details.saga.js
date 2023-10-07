import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

function* detailsSaga(action) {
  try {
    console.log('action payload', action.payload)
    const response = yield axios({
      method: "GET",
      url: `/api/details/${action.payload}`,
    });
    // console.log("Received payload from server:", action.payload);

    yield put({ type: "SET_DETAILS", payload: response.data });
  } catch (error) {
    console.log("Unable to get details from server", error);
  }
}

function* fetchAllMovies() {
  // get all movies from the DB
  try {
    const movies = yield axios.get("/api/movie");
    console.log("get all:", movies.data);
    yield put({ type: "SET_MOVIES", payload: movies.data });
  } catch {
    console.log("get all error");
  }
}

function* rootSaga() {
  yield takeEvery("GET_DETAILS", detailsSaga);
  yield takeEvery("FETCH_MOVIES", fetchAllMovies);
  //   yield takeEvery("SET_MOVIES", fetchAllMovies);
}

export default rootSaga;
