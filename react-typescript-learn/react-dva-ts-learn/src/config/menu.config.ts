import { SliderMenuConfig } from '../typings';

export const menus: SliderMenuConfig[] = [
  { icon: 'pie-chart', name: '首页', path: '/home', activeKey: 'home' },
  {
    icon: 'user',
    name: '用户管理',
    path: '/user',
    hide: false,
    activeKey: 'user',
    children: [{ icon: 'compass', name: '用户列表', path: '/user/list' }]
  },
  {
    icon: 'to-top',
    name: '订单管理',
    path: '/order',
    hide: false,
    children: [{ icon: 'bars', name: '订单列表', path: '/order/list' }]
  },
  {
    icon: 'gold',
    name: '商品管理',
    path: '/product',
    hide: false,
    children: [{ icon: 'bars', name: '商品列表', path: '/product/list' }]
  },
  {
    icon: 'crown',
    name: '个人中心',
    path: '/profile',
    hide: true,
    children: [{ icon: 'skin', name: '个人信息', closable: true, path: '/profile/personal' }]
  },
  {
    icon: 'setting',
    name: '设置管理',
    path: '/setting',
    hide: true,
    children: [{ icon: 'compass', name: '广告设置', path: '/setting/advertisement' }]
  },
  {
    icon: 'setting',
    name: 'Mock',
    path: '/mock',
    activeKey: 'mock',
    closable: true
  }
];
