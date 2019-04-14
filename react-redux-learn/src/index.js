import React from "react";
import ReactDOM from "react-dom";

// import { BrowserRouter, Route } from "react-router-dom";
// import App from "../src/components/app";

import { Provider } from "react-redux";

import Router from "../src/router";

import { store } from "../src/store";

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById("app")
);

// ReactDOM.render(
//     <BrowserRouter>
//         <Route path="/index" exact component={App} />
//     </BrowserRouter>,
//     document.getElementById("app")
// );
