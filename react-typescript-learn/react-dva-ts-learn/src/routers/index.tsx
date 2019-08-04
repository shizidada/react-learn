import React, { createElement } from 'react';
import { DvaInstance } from 'dva';
import { Switch, Route, routerRedux } from 'dva/router';
import H from 'history';
import Loadable from 'react-loadable';

import { userRoutes } from './config';

import BasicLayout from '../layouts/BasicLayout';
import UserLayout from '../layouts/UserLayout';

import Error from '../pages/error';

const { ConnectedRouter } = routerRedux;

interface RouterConfigProps {
  history: H.History;
  app: DvaInstance;
}

const userAllRoutes = userRoutes.map(item => {
  const { path, component, ...reset } = item;
  return {
    path,
    component: Loadable({
      loader: () => component,
      loading() {
        return <div style={{ fontSize: 20 }}>Loading ...</div>;
      },
    }),
    ...reset,
  };
});

function RouterConfig({ history, app }: RouterConfigProps) {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        {userAllRoutes.map(item => {
          const { id, path, component: Component, ...reset } = item;
          return (
            <Route
              key={id}
              path={path}
              render={routeProps =>
                createElement<any>(UserLayout, {
                  ...routeProps,
                  ...reset,
                  view: createElement<any>(Component, {
                    ...routeProps,
                    ...reset,
                  }),
                })
              }
            />
          );
        })}
        <Route path="/error" render={routeProps => createElement<any>(Error, { ...routeProps })} />
        <Route path="/" render={routeProps => createElement<any>(BasicLayout, { ...routeProps })} />
      </Switch>
    </ConnectedRouter>
  );
}

export default RouterConfig;
