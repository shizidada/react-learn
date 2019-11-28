interface BasicRouteConfig {
  id: number;
  path: string;
  component: Promise<any>;
  // TODO: router authority from permission manager/user
  type?: string;
}

export const basicRoutes: BasicRouteConfig[] = [
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

  {
    id: 4001,
    path: '/file',
    component: import('../pages/manager/file'),
  },
];

export const userRoutes = [
  {
    id: 7001,
    path: '/user/login',
    component: import('../pages/user/login'),
  },
];
