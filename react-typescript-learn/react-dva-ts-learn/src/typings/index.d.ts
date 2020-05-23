import { GlobalModelState } from '../models/global';
import { HomeModelState } from '../models/home';
import { LoginModelState } from '../models/login';
import { FileModelState } from '../models/file';
import { MenuModelState } from '../models/menu';

export interface ConnectState {
  [key: string]: GlobalModelState | HomeModelState | LoginModelState | FileModelState;
  global: GlobalModelState;
  menu: MenuModelState;
  home: HomeModelState;
  login: LoginModelState;
  file: FileModelState;
}

declare const ConnectState: ConnectState;

interface System {
  import<T = any>(module: string): Promise<T>;
}

declare const System: System;

// interface Window {
//   less: any;
// }

declare global {
  interface Window {
    less: any;
  }
}
