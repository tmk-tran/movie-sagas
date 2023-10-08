import { all } from "redux-saga/effects";

import detailsSaga from "./movie.saga";

export default function* () {
  yield all([detailsSaga()]);
}