import { combineReducers } from "redux";

import details from "./details.reducer";
import movies from "./details.reducer";
import genres from "./details.reducer";
import add from "./details.reducer";
import edit from "./details.reducer";

export default combineReducers({ details, movies, genres, add, edit });