export interface MenuConfig {
  icon: string;
  activeKey: string;
  name: string;
  path?: string;
  children?: MenuConfig[];
}

export const menus: MenuConfig[] = [
  { icon: 'pie-chart', activeKey: 'home', name: 'Home', path: '/' },
  { icon: 'table', activeKey: 'order', name: 'Order', path: '/order' },
  { icon: 'crown', activeKey: 'product', name: 'Product', path: '/product' },
  { icon: 'file', activeKey: 'file', name: 'File', path: '/file' },
  {
    icon: 'user',
    activeKey: 'user',
    name: 'User',
    children: [
      {
        icon: 'setting',
        activeKey: 'setting',
        name: 'Setting',
        path: '/user/setting',
      },
      {
        icon: 'compass',
        activeKey: 'compass',
        name: 'Tom',
        path: '/user/tom',
      },
      {
        icon: 'picture',
        activeKey: 'picture',
        name: 'Bill',
        path: '/user/bill',
      },
      {
        icon: 'tablet',
        activeKey: 'tablet',
        name: 'Alex',
        path: '/user/alex',
      },
    ],
  },
  {
    icon: 'team',
    activeKey: 'team',
    name: 'Team',
    children: [
      {
        icon: 'deployment-unit',
        activeKey: 'deployment-unit',
        name: 'Team 1',
        path: '/team/team1',
        children: [
          {
            icon: 'deployment-unit',
            activeKey: 'deployment-unit',
            name: 'Sub Team 1-1',
            path: '/team/team1/subteam',
          },
        ],
      },
      {
        icon: 'pull-request',
        activeKey: 'pull-request',
        name: 'Team 2',
        path: '/team/team2',
      },
    ],
  },
  { icon: 'skin', activeKey: 'skin', name: 'Skin', path: '/skin' },
];
