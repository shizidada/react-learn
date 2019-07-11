import { createSelector } from "reselect";
import * as constants from "./constants";

const getModelState = namespace => state => state[namespace];
export const getCounterState = createSelector(
  getModelState(constants.NAMESPACE),
  state => state
);
