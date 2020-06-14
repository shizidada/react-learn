import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store';

import 'normalize.css/normalize.css';
import 'lib-flexible/flexible.js';
import 'antd-mobile/dist/antd-mobile.less';

import BasicRoute from './routers';

import './global.less';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BasicRoute />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
