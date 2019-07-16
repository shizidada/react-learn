import * as React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Loadable from "react-loadable";

import Loading from "../components/Loading";

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

const BasicRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={LoginPage} />
    </Switch>
  </BrowserRouter>
);

export default BasicRouter;
