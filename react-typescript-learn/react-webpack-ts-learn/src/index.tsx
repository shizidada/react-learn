import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import VConsole from 'vconsole';

import configureStore from './store';

import 'normalize.css/normalize.css';
import 'lib-flexible/flexible.js';

import BasicRoute from './routers';

import './global.less';

const store = configureStore();

new VConsole();

ReactDOM.render(
  <Provider store={store}>
    <BasicRoute />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
