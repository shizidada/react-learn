import * as React from "react";
// , Redirect
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Loadable from "react-loadable";

import Loading from "../components/Loading";

import { routes } from "./router";

const LoginPage = Loadable({
  loader: () => import("../pages/login"),
  loading() {
    return <Loading />;
  },
});

const HomePage = Loadable({
  loader: () => import("../pages/home"),
  loading() {
    return <Loading />;
  },
});
// 代码分割处理
const allRoutes = routes.map(item => {
  return {
    path: item.path,
    component: Loadable({
      loader: () => item.component,
      loading() {
        return <Loading />;
      },
    }),
  };
});
console.log(routes);
console.log(allRoutes);

const BasicRouter = () => (
  <BrowserRouter>
    <Switch>
      {allRoutes.map(item => {
        return <Route key={item.path} exact path={item.path} component={item.component} />;
      })}
    </Switch>
  </BrowserRouter>
);

export default BasicRouter;
