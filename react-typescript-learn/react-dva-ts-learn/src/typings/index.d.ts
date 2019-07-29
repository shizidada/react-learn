import { GlobalModelState } from '../models/global';
import { HomeModelState } from '../models/home';
import { LoginModelState } from '../models/login';

export interface GlobalState {
  [key: string]: GlobalModelState | HomeModelState | LoginModelState;
}

declare const GlobalState: GlobalState;

interface System {
  import<T = any>(module: string): Promise<T>;
}

declare const System: System;
