import React, { lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import ReactLoading from 'react-loading';

const Loading = () => {
  return <ReactLoading type="spinningBubbles" />;
};

const homePage = Loadable({
  loader: () => import(/* webpackChunkName: 'home.page' */ '../pages/home'),
  loading: Loading,
  delay: 30000
});

const articlePage = Loadable({
  loader: () => import(/* webpackChunkName: 'article.page' */ '../pages/article'),
  loading: Loading,
  delay: 30000
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
