import React from "react";
import { Router, Route, Switch } from "dva/router";

import { default as Loadable } from "react-loadable";

import Header from "../components/Header";
import Tracker from "../components/Tracker";

// import Home from "../pages/home";
// import Publish from "../pages/publish";
function Loading() {
  return <div>Loading...</div>;
}

const Home = Loadable({
  loader: () => import(/* webpackChunkName: "home" */ "../pages/home"),
  loading: Loading,
  delay: 10000,
  timeout: 10000 // 10 seconds
});

const Publish = Loadable({
  loader: () => import(/* webpackChunkName: "publish" */ "../pages/publish"),
  loading: Loading,
  timeout: 10000 // 10 seconds
});

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
