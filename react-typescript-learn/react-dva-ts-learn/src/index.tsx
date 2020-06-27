// import * as React from "react";
// import 'lib-flexible/flexible.js';
import 'animate.css/animate.css';
import dva, { Router as DvaRouter } from 'dva';
import { createBrowserHistory as createHistory } from 'history';
import 'normalize.css/normalize.css';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import './global.less';
import fileModel from './models/file';
import globalModel from './models/global';
import homeModel from './models/home';
import loginModel from './models/login';
import menuModel from './models/menu';
import Router from './routers';





const app = dva({
  history: createHistory(),
  onError: (err, dispatch) => {
    console.log('onError  ===> ', err, dispatch);
  }
});

app.router(Router as DvaRouter);

app.model(globalModel);
app.model(loginModel);
app.model(homeModel);
app.model(fileModel);
app.model(menuModel);

app.start('#root');
