import React from "react";
// import Loadable from "react-loadable";
import { Switch, Route } from "dva/router";

import Home from "../pages/Home";
// import Login from "../pages/Login";

// const allRoutes = routes.map(item => {
//   const { path, component, ...reset } = item;
//   return {
//     path: path,
//     component: Loadable({
//       loader: () => component,
//       loading() {
//         return <div>Loading ...</div>;
//       },
//     }),
//     ...reset,
//   };
// });

const ChildRoutes = () => {
  return (
    <Switch>
      <Route to="/" component={Home}></Route>
      {/* <Route to="/login" component={Login}></Route> */}
    </Switch>
  );
};

export default ChildRoutes;
