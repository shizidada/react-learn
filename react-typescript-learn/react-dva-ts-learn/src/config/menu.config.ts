export interface MenuConfig {
  type: string;
  activeKey: string;
  name: string;
  path?: string;
  childs?: MenuConfig[];
}

export const menus: MenuConfig[] = [
  { type: 'pie-chart', activeKey: 'home', name: 'Home', path: '/' },
  { type: 'table', activeKey: 'order', name: 'Order', path: '/order' },
  { type: 'crown', activeKey: 'product', name: 'Product', path: '/product' },
  { type: 'file', activeKey: 'file', name: 'File', path: '/file' },
  {
    type: 'user',
    activeKey: 'user',
    name: 'User',
    childs: [
      {
        type: 'setting',
        activeKey: 'setting',
        name: 'Setting',
        path: '/user/setting',
      },
      {
        type: 'compass',
        activeKey: 'compass',
        name: 'Tom',
        path: '/user/tom',
      },
      {
        type: 'picture',
        activeKey: 'picture',
        name: 'Bill',
        path: '/user/bill',
      },
      {
        type: 'tablet',
        activeKey: 'tablet',
        name: 'Alex',
        path: '/user/alex',
      },
    ],
  },
  {
    type: 'team',
    activeKey: 'team',
    name: 'Team',
    childs: [
      {
        type: 'deployment-unit',
        activeKey: 'deployment-unit',
        name: 'Team 1',
        path: '/team/team1',
      },
      {
        type: 'pull-request',
        activeKey: 'pull-request',
        name: 'Team 2',
        path: '/team/team2',
      },
    ],
  },
  { type: 'skin', activeKey: 'skin', name: 'Skin', path: '/skin' },
];
