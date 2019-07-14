import * as React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Loadable from "react-loadable";

// import HomePage from "../pages/home";
// import ArticlePage from "../pages/article";

import ReactLoading from "react-loading";
const Loading = () => {
  return <ReactLoading type="spinningBubbles" color="red" />;
};

const BasicRoute = () => (
  <HashRouter>
    <Switch>
      <Route
        exact
        path="/"
        component={Loadable({
          // /* webpackChunkName: 'page-home' */
          loader: () => import(/* webpackChunkName: 'page-home' */ "../pages/home"),
          loading: Loading,
          delay: 300, // 0.3 seconds
        })}
      />
      <Route
        exact
        path="/article"
        component={Loadable({
          // /* webpackChunkName: 'page-article' */
          loader: () => import(/* webpackChunkName: 'page-article' */ "../pages/article"),
          loading: Loading,
          delay: 300, // 0.3 seconds
        })}
      />
    </Switch>
  </HashRouter>
);

export default BasicRoute;
