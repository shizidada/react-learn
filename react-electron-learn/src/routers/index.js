import React, { createElement } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Loadable from 'react-loadable';

import BasicLayout from '../layout/BasicLayout';
import UserLayout from '../layout/UserLayout';

import Loading from '../components/Loading';

import App from "../pages/app";
import Login from "../pages/login";

function RouterConfig() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" render={routeProps =>
          createElement(UserLayout, {
            ...routeProps,
            view: createElement(
              Loadable({
                loader: () => import(/* webpackChunkName: "user.login" */ '../pages/login'),
                loading() {
                  return <Loading />;
                },
              }),
              { ...routeProps },
            ),
          })
        } />
        <Route path="/" exact component={App}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default RouterConfig;
