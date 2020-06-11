// import * as React from "react";
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import dva, { Router as DvaRouter } from 'dva';
import { createBrowserHistory as createHistory } from 'history';

import Router from './routers';

import globalModel from './models/global';
import loginModel from './models/login';
import homeModel from './models/home';
import fileModel from './models/file';
import menuModel from './models/menu';

// import 'lib-flexible/flexible.js';
import 'animate.css/animate.css';
import 'normalize.css/normalize.css'

import './global.less';

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
