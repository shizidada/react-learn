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
      path="/file/list"
      render={routeProps =>
        createElement<object>(
          Loadable({
            loader: () => import(/* webpackChunkName: "file" */ '../pages/manager/file'),
            loading() {
              return <Loading />;
            },
          }),
          { ...routeProps },
        )
      }
    />

    <Route
      path="/file/import"
      render={routeProps =>
        createElement<object>(
          Loadable({
            loader: () => import(/* webpackChunkName: "file" */ '../pages/manager/file/import'),
            loading() {
              return <Loading />;
            },
          }),
          { ...routeProps },
        )
      }
    />
    <Route
      path="/order/list"
      render={routeProps =>
        createElement<object>(
          Loadable({
            loader: () => import(/* webpackChunkName: "order.list" */ '../pages/manager/order/list'),
            loading() {
              return <Loading />;
            },
          }),
          { ...routeProps },
        )
      }
    />
    <Route
      path="/order/create"
      render={routeProps =>
        createElement<object>(
          Loadable({
            loader: () =>
              import(/* webpackChunkName: "order.create" */ '../pages/manager/order/create'),
            loading() {
              return <Loading />;
            },
          }),
          { ...routeProps },
        )
      }
    />

    <Route
      path="/product/list"
      render={routeProps =>
        createElement<object>(
          Loadable({
            loader: () =>
              import(/* webpackChunkName: "product.list" */ '../pages/manager/product/list'),
            loading() {
              return <Loading />;
            },
          }),
          { ...routeProps },
        )
      }
    />
    <Route
      path="/product/create"
      render={routeProps =>
        createElement<object>(
          Loadable({
            loader: () =>
              import(/* webpackChunkName: "product.create" */ '../pages/manager/product/create'),
            loading() {
              return <Loading />;
            },
          }),
          { ...routeProps },
        )
      }
    />

    <Route
      path="/article/list"
      render={routeProps =>
        createElement<object>(
          Loadable({
            loader: () => import(/* webpackChunkName: "article" */ '../pages/manager/article/list'),
            loading() {
              return <Loading />;
            },
          }),
          { ...routeProps },
        )
      }
    />

    <Route
      path="/article/create"
      render={routeProps =>
        createElement<object>(
          Loadable({
            loader: () =>
              import(/* webpackChunkName: "article.create" */ '../pages/manager/article/create'),
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
            loader: () => import(/* webpackChunkName: "home" */ '../pages/manager/home'),
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
