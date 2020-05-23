export interface MenuConfig {
  icon: string;
  name: string;
  path: string;
  children?: MenuConfig[];
}

export const menus: MenuConfig[] = [
  { icon: 'pie-chart', name: '首页', path: '/home' },
  {
    icon: 'user',
    name: '用户管理',
    path: '/user',
    children: [{ icon: 'compass', name: '用户列表', path: '/user/list' }],
  },
  {
    icon: 'to-top',
    name: '订单管理',
    path: '/order',
    children: [{ icon: 'bars', name: '订单列表', path: '/order/list' }],
  },
  {
    icon: 'gold',
    name: '商品管理',
    path: '/product',
    children: [{ icon: 'bars', name: '商品列表', path: '/product/list' }],
  },
  {
    icon: 'crown',
    name: '个人中心',
    path: '/profile',
    children: [{ icon: 'skin', name: '个人信息', path: '/profile/personal' }],
  },
  {
    icon: 'setting',
    name: '设置管理',
    path: '/setting',
    children: [{ icon: 'compass', name: '广告设置', path: '/setting/advertisement' }],
  },
  {
    icon: 'setting',
    name: 'Learn',
    path: '/learn',
  },
];
