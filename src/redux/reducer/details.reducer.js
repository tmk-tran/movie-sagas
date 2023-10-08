import { combineReducers } from "redux";

// This function (our reducer) will be called when an
// action is dipatched.
const detailsReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_DETAILS":
      return action.payload;
    default:
      return state;
  }
};

// Used to store movies returned from the server
const movies = (state = [], action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return action.payload;
    default:
      return state;
  }
};

// Used to store the movie genres
const genres = (state = [], action) => {
  switch (action.type) {
    case "SET_GENRES":
      return action.payload;
    default:
      return state;
  }
};

// Add reducer
const addReducer = (state = [], action) => {
    switch (action.type) {
      case "ADD_MOVIE":
        return action.payload;
      default:
        return state;
    }
  };

export default combineReducers({ detailsReducer, addReducer, movies, genres });
