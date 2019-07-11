import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";

const RouterConfig = ({ app, history }) => {
  // console.log("RouterConfig :: ", app, history);
  return (
    <Router history={history}>
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </>
    </Router>
  );
};

export default RouterConfig;