import { types, correctGuess } from './'

describe('correctGuess', () => {
  test('returns an action with the type `CORRECT_GUESS`', () => {
    const action = correctGuess();
    expect(action).toEqual({ type: types.CORRECT_GUESS });
  });
});
