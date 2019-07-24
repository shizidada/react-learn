export const routes = [
  {
    path: "/",
    component: import("../pages/Home"),
  },
  {
    path: "/login",
    component: import("../pages/Login"),
  },
  {
    path: "/error",
    component: import("../pages/Error"),
  },
];
