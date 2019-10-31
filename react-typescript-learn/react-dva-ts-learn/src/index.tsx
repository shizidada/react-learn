// import * as React from "react";
import dva, { Router as DvaRouter } from 'dva';
import { createBrowserHistory as createHistory } from 'history';

import Router from './routers';

import globalModel from './models/global';
import loginModel from './models/login';
import homeModel from './models/home';
import fileModel from './models/file';

import './global.less';

const app = dva({
  history: createHistory(),
  onError: (err, dispatch) => {
    console.log('onError  ===> ', err, dispatch);
  },
});

app.router(Router as DvaRouter);

app.model(globalModel);
app.model(loginModel);
app.model(homeModel);
app.model(fileModel);

app.start('#root');

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
