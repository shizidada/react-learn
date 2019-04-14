import React, { Component } from "react";
import {
  BrowserRouter,
  HashRouter,
  IndexRoute,
  Switch,
  Route
} from "react-router-dom";

import Nav from "../components/nav";
import Home from "../pages/home";
import Detail from "../pages/detail";
import Upload from "../pages/upload";

// HashRouter
// BrowserRouter
const RouterComponent = () => (
  <BrowserRouter>
    <Nav />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/detail" exact component={Detail} />
      <Route path="/upload" exact component={Upload} />
    </Switch>
  </BrowserRouter>
);

export default RouterComponent;

export { RouterComponent as Router };
