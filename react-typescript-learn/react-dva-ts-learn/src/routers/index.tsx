import React from "react";
import { BrowserRouter as Router, Switch, Route } from "dva/router";
import Loadable from "react-loadable";

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
      <Switch>
        {allRoutes.map(item => {
          const { path, component: Component } = item;
          return <Route exact key={path} path={path} component={Component} />;
        })}
        <Route component={Error} />
      </Switch>
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
