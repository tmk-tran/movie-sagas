import { all } from "redux-saga/effects";

import detailsSaga from "./details.saga";

export default function* () {
  yield all([detailsSaga()]);
}