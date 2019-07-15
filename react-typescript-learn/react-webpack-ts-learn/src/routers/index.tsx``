import * as React from "react";
import { HashRouter, BrowserRouter, Switch, Route } from "react-router-dom";
import loadable from "@loadable/component";

// import HomePage from "../pages/home";
// import ArticlePage from "../pages/article";

// import ReactLoading from "react-loading";
// const Loading = () => {
//   return <ReactLoading type="spinningBubbles" color="red" />;
// };

const homePage = loadable(() => import("../pages/home"));
const articlePage = loadable(() => import("../pages/article"));

const BasicRoute = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={homePage} />
      <Route exact path="/article" component={articlePage} />
    </Switch>
  </BrowserRouter>
);

export default BasicRoute;
