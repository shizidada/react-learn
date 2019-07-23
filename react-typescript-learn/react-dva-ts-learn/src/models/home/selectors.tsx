import { createSelector } from "reselect";
import * as constants from "./constants";

const getModelState = (namespace: string) => state => state[namespace];
export const getCounterState = createSelector(
  getModelState(constants.NAMESPACE),
  state => state
);
