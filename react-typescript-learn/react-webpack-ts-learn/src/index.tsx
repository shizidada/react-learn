import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";

import Counter from "./containers/Counter";

import configureStore from "./store";
const store = configureStore();

// console.log("this message comsole for test");
console.log("store init ...", store);

ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
