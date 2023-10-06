import { combineReducers } from "redux";

import details from "./details.reducer";
import movies from "./details.reducer";
import genres from "./details.reducer";

export default combineReducers({ details, movies, genres });