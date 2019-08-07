export const basicRoutes = [
  {
    id: 1001,
    path: '/',
    component: import('../pages/manager/home'),
  },
  {
    id: 2002,
    path: '/order',
    component: import('../pages/manager/order'),
  },
  {
    id: 2003,
    path: '/order/create',
    component: import('../pages/manager/order/create'),
  },

  {
    id: 3001,
    path: '/product',
    component: import('../pages/manager/product'),
  },
  {
    id: 3002,
    path: '/product/create',
    component: import('../pages/manager/product/create'),
  },
];

export const userRoutes = [
  {
    id: 7001,
    path: '/login',
    component: import('../pages/login'),
  },
];