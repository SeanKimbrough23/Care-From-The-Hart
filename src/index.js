import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import store from "./redux/store";
import createSagaMiddleware from "redux-saga";
import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

import App from "./components/App/App";

const root = ReactDOM.createRoot(document.getElementById("react-root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
