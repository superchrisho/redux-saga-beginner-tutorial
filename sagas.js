import { all, call, put, takeEvery } from "redux-saga/effects";
import { INCREMENT, INCREMENT_ASYNC } from "./counterSlice";

export const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export function* helloSaga() {
  console.log("Hello Sagas!");
}

export function* incrementAsync() {
  yield call(delay, 1000);
  yield put(INCREMENT());
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeEvery(INCREMENT_ASYNC().type, incrementAsync);
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([helloSaga(), watchIncrementAsync()]);
}
