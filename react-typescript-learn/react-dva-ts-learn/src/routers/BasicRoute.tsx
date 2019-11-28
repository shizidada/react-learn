import React, { createElement } from 'react';
import { Spin } from 'antd';
import { Redirect, Route, Switch } from 'dva/router';
import Loadable from 'react-loadable';

const BasicRoute = () => (
  <Switch>

    <Route
      path="/file"
      render={routeProps =>
        createElement<object>(
          Loadable({
            loader: () => import(/* webpackChunkName: "file" */ '../pages/manager/file'),
            loading() {
              return (
                <div style={{ fontSize: 20, textAlign: 'center' }}>
                  <Spin size="large" />
                </div>
              );
            },
          }),
          { ...routeProps },
        )
      }
    />

    <Route
      path="/order"
      render={routeProps =>
        createElement<object>(
          Loadable({
            loader: () => import(/* webpackChunkName: "order" */ '../pages/manager/order'),
            loading() {
              return (
                <div style={{ fontSize: 20, textAlign: 'center' }}>
                  <Spin size="large" />
                </div>
              );
            },
          }),
          { ...routeProps },
        )
      }
    />
    <Route
      path="order/create"
      render={routeProps =>
        createElement<object>(
          Loadable({
            loader: () =>
              import(/* webpackChunkName: "order.create" */ '../pages/manager/order/create'),
            loading() {
              return (
                <div style={{ fontSize: 20, textAlign: 'center' }}>
                  <Spin size="large" />
                </div>
              );
            },
          }),
          { ...routeProps },
        )
      }
    />

    <Route
      path="/product"
      render={routeProps =>
        createElement<object>(
          Loadable({
            loader: () => import(/* webpackChunkName: "product" */ '../pages/manager/product'),
            loading() {
              return (
                <div style={{ fontSize: 20, textAlign: 'center' }}>
                  <Spin size="large" />
                </div>
              );
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
              return (
                <div style={{ fontSize: 20, textAlign: 'center' }}>
                  <Spin size="large" />
                </div>
              );
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
              return (
                <div style={{ fontSize: 20, textAlign: 'center' }}>
                  <Spin size="large" />
                </div>
              );
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
