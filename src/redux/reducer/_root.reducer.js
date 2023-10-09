import { combineReducers } from "redux";

import details from "./movie.reducer";
import movies from "./movie.reducer";
import genres from "./movie.reducer";
import add from "./movie.reducer";
import edit from "./movie.reducer";

export default combineReducers({ details, movies, genres, add, edit });