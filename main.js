import "@babel/polyfill";
import { createRoot } from "react-dom/client";
import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import Counter from "./Counter";
import reducer from "./reducers";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

const action = (type) => store.dispatch({ type });

const container = document.getElementById("root");
// @ts-ignore
const root = createRoot(container);

function render() {
  root.render(
    <Counter
      value={store.getState()}
      onIncrement={() => action("INCREMENT")}
      onDecrement={() => action("DECREMENT")}
      onIncrementAsync={() => action("INCREMENT_ASYNC")}
    />,
  );
}

render();
store.subscribe(render);
