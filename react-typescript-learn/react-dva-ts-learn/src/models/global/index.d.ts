import { AnyAction } from "redux";
import { EffectsCommandMap } from "dva";

import { HomeModelState } from "../home";

export interface GlobalState {
  home: HomeModelState;
}

export type Effect = (
  action: AnyAction,
  effects: EffectsCommandMap & { select: <T>(func: (state: GlobalState) => T) => T }
) => void;
