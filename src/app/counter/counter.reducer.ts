import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.action';

export const initialState: number = 0;

const _counterReducer = createReducer(initialState,
  on(increment, (state: number) => state + 1),
  on(decrement, (state: number) => state - 1),
  on(reset, (state: number) => 0),
);

export function counterReducer(state: number, action) {
  return _counterReducer(state, action);
}
