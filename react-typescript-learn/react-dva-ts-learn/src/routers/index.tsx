import React from "react";
import { BrowserRouter as Router, Switch, Route, routerRedux, Link } from "dva/router";
const { ConnectedRouter } = routerRedux;
import Loadable from "react-loadable";

import BasicLayout from "../layouts/BasicLayout";

import LoginPage from "../pages/Login";

import { basicRoutes, userRoutes } from "./config";
import UserLayout from "../layouts/UserLayout";
const basicAllRoutes = basicRoutes.map(item => {
  const { path, component, ...reset } = item;
  return {
    path: path,
    component: Loadable({
      loader: () => component,
      loading() {
        return <div>Loading...</div>;
      },
    }),
    ...reset,
  };
});

const userAllRoutes = userRoutes.map(item => {
  const { path, component, ...reset } = item;
  return {
    path: path,
    component: Loadable({
      loader: () => component,
      loading() {
        return <div>Loading ...</div>;
      },
    }),
    ...reset,
  };
});

function RouterConfig({ history, app }) {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        {/* <Route path="/login" component={LoginPage} />; */}
        <UserLayout>
          <Switch>
            {userAllRoutes.map(item => {
              const { id, path, component: Component } = item;
              return <Route exact={path === "/login"} key={id} path={path} component={Component} />;
            })}
          </Switch>
        </UserLayout>
        <BasicLayout>
          <Switch>
            {basicAllRoutes.map(item => {
              const { id, path, component: Component } = item;
              return <Route exact={path === "/"} key={id} path={path} component={Component} />;
            })}
          </Switch>
        </BasicLayout>
      </Switch>
    </ConnectedRouter>
  );
}

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
