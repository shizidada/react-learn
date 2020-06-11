import { INCREMENT, DECREMENT } from './types';
import { CounterState, CounterAction } from './types';

const initSate: CounterState = {
  count: 1,
  name: 'TypeScript'
};

export function counterReducer(state = initSate, action: CounterAction): CounterState {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: Math.max(1, state.count - 1) };
  }
  return state;
}
