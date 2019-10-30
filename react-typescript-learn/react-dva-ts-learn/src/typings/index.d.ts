import { GlobalModelState } from '../models/global';
import { HomeModelState } from '../models/home';
import { LoginModelState } from '../models/login';
import { FileModelState } from '../models/file';

export interface ConnectState {
  [key: string]: GlobalModelState | HomeModelState | LoginModelState | FileModelState;
}

declare const ConnectState: ConnectState;

interface System {
  import<T = any>(module: string): Promise<T>;
}

declare const System: System;
