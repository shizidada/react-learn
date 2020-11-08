import { Spin } from 'antd';
import { DvaInstance } from 'dva';
import { Route, routerRedux, Switch } from 'dva/router';
import H from 'history';
import React, { createElement } from 'react';
import Loadable from 'react-loadable';
import BasicLayout from '../layouts/BasicLayout';
import EditorLayout, { EditorLayoutProps } from '../layouts/EditorLayout';
import UserLayout, { UserLayoutProps } from '../layouts/UserLayout';
import BlankLayout from '../layouts/BlankLayout';

import Error from '../pages/error';

const { ConnectedRouter } = routerRedux;

interface RouterConfigProps {
  history: H.History;
  app: DvaInstance;
}

const Loading = () => {
  return (
    <div className="global-loading">
      <Spin size="large" />
    </div>
  );
};

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
                  loader: () => import(/* webpackChunkName: "user.index" */ '../pages/index'),
                  loading() {
                    return <Loading />;
                  }
                }),
                { ...routeProps }
              )
            })
          }
        />
        <Route
          path="/detail"
          render={routeProps =>
            createElement<UserLayoutProps>(UserLayout, {
              ...routeProps,
              view: createElement<any>(
                Loadable({
                  loader: () => import(/* webpackChunkName: "detail.index" */ '../pages/detail'),
                  loading() {
                    return <Loading />;
                  }
                }),
                { ...routeProps }
              )
            })
          }
        />
        <Route
          path="/login"
          render={routeProps =>
            createElement<UserLayoutProps>(BlankLayout, {
              ...routeProps,
              view: createElement<any>(
                Loadable({
                  loader: () => import(/* webpackChunkName: "login.page" */ '../pages/login'),
                  loading() {
                    return <Loading />;
                  }
                }),
                { ...routeProps }
              )
            })
          }
        />

        <Route
          path="/editor"
          render={routeProps =>
            createElement<EditorLayoutProps>(EditorLayout, {
              ...routeProps,
              view: createElement<any>(
                Loadable({
                  loader: () => import(/* webpackChunkName: "editor.page" */ '../pages/editor'),
                  loading() {
                    return <Loading />;
                  }
                }),
                { ...routeProps }
              )
            })
          }
        />

        <Route
          path="/video"
          render={routeProps =>
            createElement<UserLayoutProps>(UserLayout, {
              ...routeProps,
              view: createElement<any>(
                Loadable({
                  loader: () => import(/* webpackChunkName: "video.page" */ '../pages/video'),
                  loading() {
                    return <Loading />;
                  }
                }),
                { ...routeProps }
              )
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
