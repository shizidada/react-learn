export interface MenuConfig {
  icon: string;
  name: string;
  path: string;
  children?: MenuConfig[];
}

export const menus: MenuConfig[] = [
  { icon: 'pie-chart', name: '首页', path: '/' },
  {
    icon: 'setting',
    name: '设置',
    path: '/setting',
    children: [
      { icon: 'compass', name: '分类设置', path: '/setting/category' },
      { icon: 'compass', name: '个人设置', path: '/setting/profile' },
    ],
  },
];
