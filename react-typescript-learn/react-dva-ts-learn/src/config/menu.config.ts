export interface MenuConfig {
  icon: string;
  name: string;
  path: string;
  children?: MenuConfig[];
}

export const menus: MenuConfig[] = [
  { icon: 'pie-chart', name: '首页', path: '/' },
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
      { icon: 'compass', name: 'Create', path: '/article/create' },
    ],
  },
];
