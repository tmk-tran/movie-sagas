import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

function* detailsSaga(action) {
  try {
    const response = yield axios({
      method: "GET",
      url: `/api/details/${action.payload}`,
    });
    console.log("Received payload from server:", action.payload);

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

function* addMovieSaga(action) {
  try {
    yield axios({
      method: "POST",
      url: "/api/movie",
      data: action.payload,
    });
    console.log("ADDING: payload is: ", action.payload)
    yield put({ type: "FETCH_MOVIES" });
  } catch (error) {
    console.log(error);
    alert("Unable to save movie");
  }
}

// function* addMovieSaga(action) {
//   try {
//     // Extract the payload directly from the action
//     const { movieData } = action;

//     // Make a POST request to add the movie
//     yield axios.post("/api/movie", movieData);

//     // After adding the movie, fetch the updated list of movies
//     yield put({ type: "FETCH_MOVIES" }); // Dispatch an action to fetch movies
//   } catch (error) {
//     console.error("Error adding movie:", error);
//     alert("Unable to add movie.");
//   }
// }

function* rootSaga() {
  yield takeEvery("GET_DETAILS", detailsSaga);
  yield takeEvery("FETCH_MOVIES", fetchAllMovies);
  yield takeEvery("ADD_MOVIE", addMovieSaga);
}

export default rootSaga;
