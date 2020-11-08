import { Spin } from 'antd';
import { Redirect, Route, Switch } from 'dva/router';
import React, { createElement } from 'react';
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
    {/* profile router config end */}
    <Route
      path="/profile"
      render={(routeProps) =>
        createElement<object>(
          Loadable({
            loader: () => import(/* webpackChunkName: "profile.personal.page" */ '../pages/profile/personal'),
            loading() {
              return <Loading />;
            }
          }),
          { ...routeProps }
        )
      }
    />
    {/* profile router config end */}

    <Route
      path="/mock"
      render={(routeProps) =>
        createElement<object>(
          Loadable({
            loader: () => import(/* webpackChunkName: "mock.page" */ '../pages/mock'),
            loading() {
              return <Loading />;
            }
          }),
          { ...routeProps }
        )
      }
    />

    <Route
      path="/home"
      render={(routeProps) =>
        createElement<object>(
          Loadable({
            loader: () => import(/* webpackChunkName: "home.page" */ '../pages/home'),
            loading() {
              return <Loading />;
            }
          }),
          { ...routeProps }
        )
      }
    />

    <Redirect from="/" to="/home" />
  </Switch>
);

export default BasicRoute;
