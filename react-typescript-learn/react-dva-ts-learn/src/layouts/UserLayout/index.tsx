import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Login from "../../pages/Login";

// interface UserLayoutProps {}
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

export default class UserLayout extends Component {
  public render() {
    return (
      <Switch>
        <Route to="/login" component={Login}></Route>
      </Switch>
    );
  }
}
