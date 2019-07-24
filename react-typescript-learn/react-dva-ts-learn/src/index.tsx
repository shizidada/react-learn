// import * as React from "react";
import dva from "dva";
import { createBrowserHistory as createHistory } from "history";

const app = dva({
  history: createHistory(),
  onError: (err, dispatch) => {
    console.log("onError  ===> ", err, dispatch);
  }
});

import Router from "./routers";
app.router(Router);

import homeModel from "./models/home";
app.model(homeModel);

app.start("#root");

// import * as ReactDOM from "react-dom";
// import { Provider } from "react-redux";

// import Counter from "./containers/Counter";

// import configureStore from "./store";
// const store = configureStore();

// // console.log("this message comsole for test");
// console.log("store init ...", store);

// ReactDOM.render(
//   <Provider store={store}>
//     <Counter />
//   </Provider>,
//   document.getElementById("root") as HTMLElement
// );
