import { createSelector } from 'reselect';

import { ConnectState } from '../../typings';
import * as constants from './constants';

const getModelState = (namespace: string) => (state: ConnectState) => state[namespace];
export const getFileState = createSelector(
  getModelState(constants.NAMESPACE),
  state => state,
);
