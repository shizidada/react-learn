import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import Main from "./Main";
import * as serviceWorker from "./serviceWorker";

import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { Provider } from "react-redux";

import rootReducer from "./reducers/root";

import { rootEpic } from "./epics";

const epicMiddleware = createEpicMiddleware();
// epicMiddleware.run(rootEpic);
// const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

function configureStore() {
  const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

  epicMiddleware.run(rootEpic);

  return store;
}

const store = configureStore();

const appWithProvider = (
  <Provider store={store}>
    <Main />
  </Provider>
);

ReactDOM.render(appWithProvider, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
