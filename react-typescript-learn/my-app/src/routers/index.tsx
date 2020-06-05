import React, { createElement } from "react";
import Loadable from "react-loadable";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Spin } from "antd";

import BasicLayout from "../layouts/BasicLayout";

const Loading = () => {
  return (
    <div style={{ fontSize: 20, textAlign: 'center' }}>
      <Spin size="large" />
    </div>
  );
};

const BasicRouter = () => (
  <BrowserRouter>
    <BasicLayout>
      <Switch>
        <Route
          exact
          path={"/"}
          render={routeProps =>
            createElement<object>(
              Loadable({
                loader: () => import(/* webpackChunkName: "home.page" */ "../pages/home"),
                loading() {
                  return <Loading />;
                },
              }),
              { ...routeProps }
            )
          }
        />
        <Route
          exact
          path={"/login"}
          component={Loadable({
            loader: () => import(/* webpackChunkName: "login.page" */ "../pages/login"),
            loading() {
              return <Spin />;
            },
          })}
        />
      </Switch>
    </BasicLayout>
  </BrowserRouter>
);

export default BasicRouter;
