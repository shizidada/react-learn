export interface DemoItem {
  item: string;
  count: number;
  percent: number;
}

export const demoData: DemoItem[] = [
  {
    item: '电脑整机',
    count: 40,
    percent: 0.4
  },
  {
    item: '电脑配件',
    count: 21,
    percent: 0.21
  },
  {
    item: '外设产品',
    count: 17,
    percent: 0.17
  },
  {
    item: '游戏设备',
    count: 13,
    percent: 0.13
  },
  {
    item: '摄影摄像',
    count: 9,
    percent: 0.09
  }
];
