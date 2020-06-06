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
    {/* user router config start */}
    <Route
      path="/user/list"
      render={routeProps =>
        createElement<object>(
          Loadable({
            loader: () => import(/* webpackChunkName: "user.list.page" */ '../pages/user/list'),
            loading() {
              return <Loading />;
            },
          }),
          { ...routeProps },
        )
      }
    />
    {/* user router config end */}

    {/* profile router config end */}
    <Route
      path="/profile"
      render={routeProps =>
        createElement<object>(
          Loadable({
            loader: () =>
              import(/* webpackChunkName: "profile.personal.page" */ '../pages/profile/personal'),
            loading() {
              return <Loading />;
            },
          }),
          { ...routeProps },
        )
      }
    />
    {/* profile router config end */}

    {/* order router config start */}
    <Route
      path="/order/list"
      render={routeProps =>
        createElement<object>(
          Loadable({
            loader: () => import(/* webpackChunkName: "order.list.page" */ '../pages/order/list'),
            loading() {
              return <Loading />;
            },
          }),
          { ...routeProps },
        )
      }
    />
    {/* order router config end */}

    {/* product router config start */}
    <Route
      path="/product/list"
      render={routeProps =>
        createElement<object>(
          Loadable({
            loader: () =>
              import(/* webpackChunkName: "product.list.page" */ '../pages/product/list'),
            loading() {
              return <Loading />;
            },
          }),
          { ...routeProps },
        )
      }
    />
    {/* product router config end */}

    {/* setting router config start */}
    <Route
      path="/setting/advertisement"
      render={routeProps =>
        createElement<object>(
          Loadable({
            loader: () =>
              import(
                /* webpackChunkName: "setting.advertisement.page" */ '../pages/setting/advertisement'
              ),
            loading() {
              return <Loading />;
            },
          }),
          { ...routeProps },
        )
      }
    />
    {/* setting router config end */}
    <Route
      path="/mock"
      render={routeProps =>
        createElement<object>(
          Loadable({
            loader: () => import(/* webpackChunkName: "mock.page" */ '../pages/mock'),
            loading() {
              return <Loading />;
            },
          }),
          { ...routeProps },
        )
      }
    />

    <Route
      path="/home"
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

    <Redirect from="/" to="/index.html" />
  </Switch>
);

export default BasicRoute;
