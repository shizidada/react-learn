import { createSelector } from "reselect";
import * as constants from "./constants";

const getModelState = namespace => state => state[namespace];
export const getIndexState = createSelector(
  getModelState(constants.NAMESPACE),
  state => state
);
