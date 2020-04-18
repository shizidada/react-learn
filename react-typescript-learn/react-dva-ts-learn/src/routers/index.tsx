import React, { createElement } from 'react';
import { DvaInstance } from 'dva';
import { Spin } from 'antd';
import { Switch, Route, routerRedux } from 'dva/router';
import H from 'history';
import Loadable from 'react-loadable';

import BasicLayout from '../layouts/BasicLayout';
import UserLayout, { UserLayoutProps } from '../layouts/UserLayout';

import Error from '../pages/ErrorPage';

const { ConnectedRouter } = routerRedux;

interface RouterConfigProps {
  history: H.History;
  app: DvaInstance;
}


const Loading = () => {
  return <div style={{ fontSize: 20, textAlign: 'center' }}>
    <Spin size="large" />
  </div>
}

function RouterConfig({ history, app }: RouterConfigProps) {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route
          path="/index.html"
          render={routeProps =>
            createElement<UserLayoutProps>(UserLayout, {
              ...routeProps,
              view: createElement<any>(
                Loadable({
                  loader: () => import(/* webpackChunkName: "user.index" */ '../pages/IndexPage'),
                  loading() {
                    return <Loading />
                  },
                }),
                { ...routeProps },
              ),
            })
          }
        />
        <Route
          path="/login"
          render={routeProps =>
            createElement<UserLayoutProps>(UserLayout, {
              ...routeProps,
              view: createElement<any>(
                Loadable({
                  loader: () => import(/* webpackChunkName: "user.login" */ '../pages/user/LoginPage'),
                  loading() {
                    return <Loading />
                  },
                }),
                { ...routeProps },
              ),
            })
          }
        />
        <Route path="/error" render={routeProps => createElement<any>(Error, { ...routeProps })} />
        <Route path="/" render={routeProps => createElement<any>(BasicLayout, { ...routeProps })} />
      </Switch>
    </ConnectedRouter>
  );
}

export default RouterConfig;
