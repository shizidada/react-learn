import React from "react";
// HashRouter, BrowserRouter as Router,
import { Switch, Route, routerRedux } from "dva/router";
// import { createBrowserHistory } from "history";

import BasicLayout from "../layouts/BasicLayout";
import UserLayout from "../layouts/UserLayout";

const { ConnectedRouter } = routerRedux;

import ErrorPage from "../pages/Error";
// import LoginPage from "../pages/Login";

const RouterConfig = ({ app, history }) => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact={true} path="/" render={routeProps => <BasicLayout {...routeProps} />} />
        <Route path="/login" render={routeProps => <UserLayout {...routeProps} />} />
        <Route path="/error" exact={true} render={({ location }) => <ErrorPage />} />
      </Switch>
    </ConnectedRouter>
  );
};

export default RouterConfig;

/**
 * 2. 全部加载
 */

// import Home from "../pages/Home";
// import Login from "../pages/Login";
// const RouterConfig = ({ app , history}) => {
//   // console.log("RouterConfig :: ", app, history);
//   return (
//     <Router history={history}>
//       <>
//         <Switch>
//           <Route exact path="/" component={HomePage} />
//           <Route exact path="/login" component={LoginPage} />
//         </Switch>
//       </>
//     </Router>
//   );
// };
// export default RouterConfig;
