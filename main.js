import "@babel/polyfill";
import { createRoot } from "react-dom/client";
import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import Counter from "./Counter";
import { Provider } from "react-redux";
import counterReducer from "./counterSlice";

// !exp creates sagaMiddleware object
const sagaMiddleware = createSagaMiddleware();

// !exp using RTK to create store
const store = configureStore({
  reducer: { counter: counterReducer },
  middleware: [sagaMiddleware],
});

// !exp runs all sagas
sagaMiddleware.run(rootSaga);

const container = document.getElementById("root");
// @ts-ignore
const root = createRoot(container);

function render() {
  root.render(
    <Provider store={store}>
      <Counter />
    </Provider>,
  );
}

render();
store.subscribe(render);
