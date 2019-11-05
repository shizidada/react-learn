export interface MenuConfig {
  icon: string;
  name: string;
  path: string;
  children?: MenuConfig[];
}

export const menus: MenuConfig[] = [
  { icon: 'pie-chart', name: 'Home', path: '/' },
  { icon: 'file', name: 'File', path: '/file' },
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
    icon: 'crown',
    name: 'Product',
    path: '/product',
    children: [
      { icon: 'table', name: 'Order', path: '/product/order' },
    ],
  },
  {
    icon: 'setting',
    name: 'Setting',
    path: '/setting',
    children: [
      { icon: 'skin', name: 'Skin', path: '/setting/skin' },
    ],
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
        children: [
          { icon: 'hourglass', name: 'Sub Team 1-1', path: '/team/team1/subteam' },
        ],
      },
      { icon: 'pull-request', name: 'Team 2', path: '/team/team2' },
    ],
  },
];
