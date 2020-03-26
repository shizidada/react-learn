import React, { createElement } from 'react';
import { Spin } from 'antd';
import { Redirect, Route, Switch } from 'dva/router';
import Loadable from 'react-loadable';

const Loading = () => {
  return (
    <div style={{ fontSize: 20, textAlign: 'center' }}>
      <Spin size="large" />
    </div>
  );
};

const BasicRoute = () => (
  <Switch>
    <Route
      path="/setting/profile"
      render={routeProps =>
        createElement<object>(
          Loadable({
            loader: () => import(/* webpackChunkName: "setting.profile.page" */ '../pages/setting/profile'),
            loading() {
              return <Loading />;
            },
          }),
          { ...routeProps },
        )
      }
    />
    <Route
      path="/setting/category"
      render={routeProps =>
        createElement<object>(
          Loadable({
            loader: () => import(/* webpackChunkName: "setting.category.page" */ '../pages/setting/category'),
            loading() {
              return <Loading />;
            },
          }),
          { ...routeProps },
        )
      }
    />

    <Route
      path="/"
      render={routeProps =>
        createElement<object>(
          Loadable({
            loader: () => import(/* webpackChunkName: "home.page" */ '../pages/home'),
            loading() {
              return <Loading />;
            },
          }),
          { ...routeProps },
        )
      }
    />

    <Redirect from="/home" to="/" />
  </Switch>
);

export default BasicRoute;
