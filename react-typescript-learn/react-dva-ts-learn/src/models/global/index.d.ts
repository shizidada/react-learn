import { AnyAction } from "redux";
import { EffectsCommandMap } from "dva";

import { HomeModelState } from "../home";
import { LoginModelState } from "../login";

export interface GlobalState {
  home: HomeModelState;
  login: LoginModelState;
}

export type Effect = (
  action: AnyAction,
  effects: EffectsCommandMap & { select: <T>(func: (state: GlobalState) => T) => T }
) => void;
