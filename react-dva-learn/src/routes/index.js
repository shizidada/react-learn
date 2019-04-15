import React from "react";
import { Router, Route, Switch } from "dva/router";

import HelloWord from "../components/HelloWorld";
import Count from "../components/Count";

const RouterConfig = ({ history }) => {
  // TODO
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={HelloWord} />
        <Route exact path="/count" component={Count} />
      </Switch>
    </Router>
  );
};
export default RouterConfig;
