import * as React from "react";
import { HashRouter, BrowserRouter, Switch, Route } from "react-router-dom";
import Loadable from "react-loadable";
import ReactLoading from "react-loading";

const Loading = () => {
  return <ReactLoading type="spinningBubbles" color="red" />;
};

const homePage = Loadable({
  // /* webpackChunkName: 'page-home' */
  loader: () => import("../pages/home"),
  loading: Loading,
  delay: 30000, // 0.3 seconds
});

const articlePage = Loadable({
  // /* webpackChunkName: 'page-article' */
  loader: () => import("../pages/article"),
  loading: Loading,
  delay: 30000, // 0.3 seconds
});

const BasicRoute = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={homePage} />
      <Route exact path="/article" component={articlePage} />
    </Switch>
  </BrowserRouter>
);

export default BasicRoute;
