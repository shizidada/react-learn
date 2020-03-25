export interface MenuConfig {
  icon: string;
  name: string;
  path: string;
  children?: MenuConfig[];
}

export const menus: MenuConfig[] = [
  { icon: 'pie-chart', name: '首页', path: '/' },
  {
    icon: 'appstore',
    name: '订单',
    path: '/order',
    children: [
      { icon: 'compass', name: '订单列表', path: '/order' },
    ],
  },
  {
    icon: 'crown',
    name: '产品',
    path: '/product',
    children: [
      { icon: 'compass', name: '产品配置', path: '/product' },
    ],
  },
  {
    icon: 'setting',
    name: '设置',
    path: '/setting',
    children: [
      { icon: 'compass', name: '个人设置', path: '/setting' },
    ],
  },
  {
    icon: 'pic-left',
    name: '文章',
    path: '/article',
    children: [
      { icon: 'compass', name: '文章列表', path: '/article' },
    ],
  },
];
