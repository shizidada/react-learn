import { INCREMENT, DECREMENT } from './types';
import { Increment, Decrement } from './types';

export const increment = (): Increment => {
  return {
    type: INCREMENT
  };
};

export const decrement = (): Decrement => {
  return {
    type: DECREMENT
  };
};
