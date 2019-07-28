import React, { createElement } from "react";
import { Redirect, Route, Switch } from "dva/router";
import Loadable from "react-loadable";

import { basicRoutes } from "./config";

const basicAllRoutes = basicRoutes.map(item => {
  const { path, component, ...reset } = item;
  return {
    path: path,
    component: Loadable({
      loader: () => component,
      loading() {
        return <div style={{ fontSize: 20 }}>Loading...</div>;
      },
    }),
    ...reset,
  };
});

const BasicRoute = () => {
  return (
    <Switch>
      {basicAllRoutes.map(item => {
        const { id, path, component: Component, ...reset } = item;
        return (
          <Route
            key={id}
            exact={path === "/"}
            path={path}
            render={routeProps => createElement<any>(Component, { ...routeProps, ...reset })}
          />
        );
      })}
      <Redirect from="/home" to="/" />
    </Switch>
  );
};

export default BasicRoute;
