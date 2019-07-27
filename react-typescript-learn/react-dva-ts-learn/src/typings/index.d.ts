import { HomeModelState } from "../home";
import { LoginModelState } from "../login";

export interface GlobalState {
  [key: string]: HomeModelState | LoginModelState;
}

declare const GlobalState: GlobalState;

interface System {
  import<T = any>(module: string): Promise<T>;
}

declare const System: System;
