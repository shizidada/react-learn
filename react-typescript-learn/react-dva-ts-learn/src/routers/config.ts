export const basicRoutes = [
  {
    id: 1001,
    path: '/',
    component: import('../pages/Home'),
  },
  {
    id: 1002,
    path: '/order',
    component: import('../pages/Order'),
  },
];

export const userRoutes = [
  {
    id: 2001,
    path: '/login',
    component: import('../pages/Login'),
  },
];
