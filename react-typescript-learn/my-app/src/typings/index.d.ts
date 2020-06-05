export interface SliderMenuConfig {
  type: string;
  activeKey: string;
  name: string;
  path?: string;
  closable?: boolean;
  childs?: SliderMenuConfig[];
}

export interface TodoItemConfig {
  title: string;
  time: number;
}
