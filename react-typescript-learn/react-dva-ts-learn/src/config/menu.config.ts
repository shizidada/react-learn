export interface MenuConfig {
  icon: string;
  name: string;
  path: string;
  children?: MenuConfig[];
}

export const menus: MenuConfig[] = [
  { icon: 'pie-chart', name: 'Home', path: '/' },
  {
    icon: 'user',
    name: 'User',
    path: '/user',
    children: [
      { icon: 'compass', name: 'Tom', path: '/user/tom' },
      { icon: 'picture', name: 'Bill', path: '/user/bill' },
      { icon: 'tablet', name: 'Alex', path: '/user/alex' },
    ],
  },
  {
    icon: 'file',
    name: 'File',
    path: '/file',
    children: [
      { icon: 'compass', name: 'List', path: '/file/list' },
      { icon: 'compass', name: 'Import', path: '/file/import' },
    ],
  },
  {
    icon: 'crown',
    name: 'Product',
    path: '/product',
    children: [
      { icon: 'compass', name: 'List', path: '/product/list' },
      { icon: 'compass', name: 'Create', path: '/product/create' },
    ],
  },
  {
    icon: 'appstore',
    name: 'Order',
    path: '/order',
    children: [
      { icon: 'compass', name: 'List', path: '/order/list' },
      { icon: 'compass', name: 'Create', path: '/order/create' },
    ],
  },
  {
    icon: 'pic-left',
    name: 'Article',
    path: '/article',
    children: [
      { icon: 'compass', name: 'List', path: '/article/list' },
      { icon: 'compass', name: 'Create', path: '/article/create' },
    ],
  },
  {
    icon: 'setting',
    name: 'Setting',
    path: '/setting',
    children: [{ icon: 'skin', name: 'Skin', path: '/setting/skin' }],
  },
  {
    icon: 'team',
    name: 'Team',
    path: '/team',
    children: [
      {
        icon: 'deployment-unit',
        name: 'Team 1',
        path: '/team/team1',
        children: [{ icon: 'hourglass', name: 'Sub Team 1-1', path: '/team/team1/subteam' }],
      },
      { icon: 'pull-request', name: 'Team 2', path: '/team/team2' },
    ],
  },
];
