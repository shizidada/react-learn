import { INCREMENT, DECREMENT } from './types';
import { Increment, Decrement } from './types';

export function increment(): Increment {
  return {
    type: INCREMENT
  };
}

export function decrement(): Decrement {
  return {
    type: DECREMENT
  };
}
