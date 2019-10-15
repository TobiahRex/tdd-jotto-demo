import { types } from '../actions';
import successReducer from './successReducer';

test('returns default initial state when no action is dispatched', () => {
  const newState = successReducer(undefined, {});
  expect(newState).toBe(false);
});

test('returns a state of true when receiving an action of type `CORRECT_GUESS`', () => {
  const newState = successReducer(undefined, { type: types.CORRECT_GUESS });
  expect(newState).toBe(true);
});
