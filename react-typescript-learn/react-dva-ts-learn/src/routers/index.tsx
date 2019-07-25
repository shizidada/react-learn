import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loadable from "react-loadable";

import BasicLayout from "../layouts/BasicLayout";

import { routes } from "./routes";

import Error from "../pages/Error";

const allRoutes = routes.map(item => {
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

const RouterConfig = ({ app, history }) => {
  return (
    <Router>
      <BasicLayout>
        <Switch>
          {allRoutes.map(item => {
            const { path, component: Component } = item;
            return <Route exact key={path} path={path} component={Component} />;
          })}
        </Switch>
        <Route path="/error" component={Error} />
      </BasicLayout>
    </Router>
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
