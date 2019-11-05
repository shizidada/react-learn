import React, { createElement } from 'react';
import { Spin } from 'antd';
import { Redirect, Route, Switch } from 'dva/router';
import Loadable from 'react-loadable';

import { basicRoutes } from './route.config';

const basicAllRoutes = basicRoutes.map(item => {
  const { path, component, ...reset } = item;
  return {
    path,
    component: Loadable({
      loader: () => component,
      loading() {
        return <div style={{ fontSize: 20, textAlign: 'center' }}>
          <Spin size="large" />
        </div>;
      },
    }),
    ...reset,
  };
});

const BasicRoute = () => (
  <Switch>
    {basicAllRoutes.map(item => {
      const { id, path, component: Component, ...reset } = item;
      return (
        <Route
          key={id}
          exact
          path={path}
          render={routeProps => createElement<object>(Component, { ...routeProps, ...reset })}
        />
      );
    })}
    <Redirect from="/home" to="/" />
  </Switch>
);

export default BasicRoute;
