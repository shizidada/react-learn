export default [
  {
    path: '/',
    component: '../layouts/BlankLayout',
    routes: [
      // user
      {
        path: '/user',
        component: '../layouts/UserLayout',
        routes: [
          { path: '/user/login', name: 'login', component: '../pages/user/login' },
        ],
      },
      // app
      {
        path: '/',
        component: '../layouts/BasicLayout',
        routes: [
          // home
          {
            path: '/home',
            name: 'Home',
            icon: 'dashboard',
          },
          // order
          {
            path: '/order',
            icon: 'table',
            name: 'Order',
            routes: [
              {
                path: '/order/create',
                name: 'searchtable',
                component: '../pages/manager/order/create',
              },
            ],
          },
        ],
      },
    ],
  },
];
