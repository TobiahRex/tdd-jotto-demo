import { getLetterMatchCount } from './helpers';

describe('getLetterMatchCount', () => {
  const secretWord = 'party';
  test('shows correct count if ZERO matching letters', () => {
    const letterMatchCount = getLetterMatchCount('bones', secretWord);
    expect(letterMatchCount).toBe(0);
  });
  test('shows correct count if 3 matching letters', () => {
    const letterMatchCount = getLetterMatchCount('train', secretWord);
    expect(letterMatchCount).toBe(3);
  });
  test('shows correct count if there are duplicate matching letters', () => {
    const letterMatchCount = getLetterMatchCount('parka', secretWord);
    expect(letterMatchCount).toBe(3);
  });
})
