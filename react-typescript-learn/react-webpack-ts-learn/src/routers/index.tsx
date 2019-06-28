import * as React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import HomePage from "../pages/home";
import ArticlePage from "../pages/article";

const BasicRoute = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/article" component={ArticlePage} />
    </Switch>
  </HashRouter>
);

export default BasicRoute;
