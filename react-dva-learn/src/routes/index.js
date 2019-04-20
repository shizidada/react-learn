import React from "react";
import { Router, Route, Switch } from "dva/router";

import Header from "../components/Header";
import Tracker from "../components/Tracker";

import Home from "../pages/home";
import Publish from "../pages/publish";

const RouterConfig = ({ history }) => {
  // TODO
  return (
    <Router history={history}>
      <Tracker history={history}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/publish" component={Publish} />
        </Switch>
      </Tracker>
    </Router>
  );
};
export default RouterConfig;
