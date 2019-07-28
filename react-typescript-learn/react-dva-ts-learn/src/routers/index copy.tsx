// import React from "react";
// import { DvaInstance } from "dva";
// import { Switch, Route, routerRedux } from "dva/router";
// import H from "history";
// import Loadable from "react-loadable";

// import BasicLayout from "../layouts/BasicLayout";

// import { basicRoutes, userRoutes } from "./config";
// import UserLayout from "../layouts/UserLayout";

// const { ConnectedRouter } = routerRedux;

// const basicAllRoutes = basicRoutes.map(item => {
//   const { path, component, ...reset } = item;
//   return {
//     path: path,
//     component: Loadable({
//       loader: () => component,
//       loading() {
//         return <div style={{ fontSize: 20 }}>Loading...</div>;
//       },
//     }),
//     ...reset,
//   };
// });

// const userAllRoutes = userRoutes.map(item => {
//   const { path, component, ...reset } = item;
//   return {
//     path: path,
//     component: Loadable({
//       loader: () => component,
//       loading() {
//         return <div style={{ fontSize: 20 }}>Loading ...</div>;
//       },
//     }),
//     ...reset,
//   };
// });

// interface RouterConfigProps {
//   history: H.History;
//   app: DvaInstance;
// }

// function RouterConfig({ history, app }: RouterConfigProps) {

//   return (
//     <ConnectedRouter history={history}>
//       {history.location.pathname === "/login" ? (
//         <UserLayout>
//           <Switch>
//             {userAllRoutes.map(item => {
//               const { id, path, component: Component } = item;
//               return <Route exact={path === "/login"} key={id} path={path} component={Component} />;
//             })}
//           </Switch>
//         </UserLayout>
//       ) : (
//         <BasicLayout>
//           <Switch>
//             {basicAllRoutes.map(item => {
//               const { id, path, component: Component } = item;
//               return <Route exact={path === "/"} key={id} path={path} component={Component} />;
//             })}
//           </Switch>
//         </BasicLayout>
//       )}
//     </ConnectedRouter>
//   );
// }

// export default RouterConfig;

// /**
//  * 2. 全部加载
//  */

// // import Home from "../pages/Home";
// // import Login from "../pages/Login";
// // const RouterConfig = ({ app , history}) => {
// //   // console.log("RouterConfig :: ", app, history);
// //   return (
// //     <Router history={history}>
// //       <>
// //         <Switch>
// //           <Route exact path="/" component={HomePage} />
// //           <Route exact path="/login" component={LoginPage} />
// //         </Switch>
// //       </>
// //     </Router>
// //   );
// // };
// // export default RouterConfig;

export default class Index {}
