
import React, { createElement } from 'react';
import { Switch, Route } from 'react-router-dom'
import Loadable from 'react-loadable'

import Loading from '../components/Loading';

function BasicRoute() {
  return (
    <Switch>
      <Route
        path="/"
        exact
        render={routeProps =>
          createElement(
            Loadable({
              loader: () => import(/* webpackChunkName: "home.page" */ '../pages/home'),
              loading() {
                return <Loading />;
              },
            }),
            { ...routeProps },
          )
        }
      />
      <Route
        path="/user"
        render={routeProps =>
          createElement(
            Loadable({
              loader: () => import(/* webpackChunkName: "user.page" */ '../pages/user'),
              loading() {
                return <Loading />;
              },
            }),
            { ...routeProps },
          )
        }
      />
    </Switch>
  )
}

export default BasicRoute;