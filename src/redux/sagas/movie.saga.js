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
    console.log("MOVIES GET ALL:", movies.data);
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

function* editMovieSaga(action) {
  console.log("INCOMING: ", action.payload);
  try {
    yield axios({
      method: "PUT",
      url: `/api/movie/${action.payload.id}`,
      data: action.payload,
    });
    console.log("ADDING: payload is: ", action.payload)
    yield put({ type: "FETCH_MOVIES" });
  } catch (error) {
    console.log(error);
    alert("Unable to save movie");
  }
}

// Runs after activation from action creator dispatch, contacts server
function* fetchAllGenres() {
  try {
    const genres = yield axios.get("/api/genre");
    console.log("GENRES GET ALL:", genres.data);
    yield put({ type: "SET_GENRES", payload: genres.data });
    console.log("GENRES SET:", genres.data);
  } catch {
    console.log("get all error");
  }
}

function* rootSaga() {
  yield takeEvery("GET_DETAILS", detailsSaga);
  yield takeEvery("FETCH_MOVIES", fetchAllMovies);
  yield takeEvery("ADD_MOVIE", addMovieSaga);
  yield takeEvery("EDIT_MOVIE", editMovieSaga);
  yield takeEvery("FETCH_GENRES", fetchAllGenres); //--> activates function when action creator (from MovieList) dispatches FETCH_GENRES
}

export default rootSaga;
