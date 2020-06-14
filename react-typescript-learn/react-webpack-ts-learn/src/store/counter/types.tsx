export interface CounterState {
  count?: number;
  name: string;
}

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export interface Increment {
  type: typeof INCREMENT;
}

export interface Decrement {
  type: typeof DECREMENT;
}

export type CounterAction = Increment | Decrement;
