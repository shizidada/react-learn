import { createSelector } from "reselect";

import { GlobalState } from "../../typings";
import * as constants from "./constants";

const getModelState = (namespace: string) => (state: GlobalState) => state[namespace];
export const getCounterState = createSelector(
  getModelState(constants.NAMESPACE),
  state => state
);
