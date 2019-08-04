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
  { type: 'skin', activeKey: 'skin', name: 'Skin', path: '/skin' },
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
        path: '/setting',
      },
      {
        type: 'compass',
        activeKey: 'compass',
        name: 'Tom',
        path: '/tom',
      },
      {
        type: 'picture',
        activeKey: 'picture',
        name: 'Bill',
        path: '/bill',
      },
      {
        type: 'tablet',
        activeKey: 'tablet',
        name: 'Alex',
        path: '/alex',
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
        path: '/team1',
      },
      {
        type: 'pull-request',
        activeKey: 'pull-request',
        name: 'Team 2',
        path: '/team2',
      },
    ],
  },
];
