import { types } from '../actions';

export default (state = false, action) => {
  switch (action.type) {
    case types.CORRECT_GUESS:
      return true;
    default: return state;
  }
}
