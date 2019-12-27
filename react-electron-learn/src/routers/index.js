import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "../containers/NavBar";

import App from "../pages/app";
import Login from "../pages/login";

function RouterConfig() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={App}></Route>
        <Route path="/" component={Login}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default RouterConfig;
