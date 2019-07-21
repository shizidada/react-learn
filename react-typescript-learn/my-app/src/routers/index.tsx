import * as React from "react";
// , Redirect
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Loadable from "react-loadable";

import BasicLayout from "../layouts/BasicLayout";
import Loading from "../components/Loading";

import { routes } from "./router";
const allRoutes = routes.map(item => {
  const { path, component, ...reset } = item;
  return {
    path: path,
    component: Loadable({
      loader: () => component,
      loading() {
        return <Loading />;
      },
    }),
    ...reset,
  };
});

const BasicRouter = () => (
  <BrowserRouter>
    <BasicLayout>
      <Switch>
        {allRoutes.map(item => {
          const { id, path, component: Component } = item;
          return <Route exact key={id} path={path} component={Component} />;
        })}
      </Switch>
    </BasicLayout>
  </BrowserRouter>
);

export default BasicRouter;
