import React from 'react';
import { shallow } from 'enzyme';
// import ReactAdapter from 'enzyme-adapter-react-16';

import GuessedWords from './GuessedWords';
import { findTestByAttr, checkProps } from '../test/testUtils';

// WARNING: If this is modified, verify that all tests account for those changes as some passing tests may be passing given a prop assumption that your modification has now made a false assumption.
const defaultProps = {
  guessedWords: [{
    guessedWord: 'test', letterMatchCount: 3,
  }]
};
/**
  Returns a ShallowWrapper node with the injected props and state.
  @param {Object} [props] - props to inject into component.
  @param {Object} [state] - state to inject into component.
  @return {ShallowWrapper} - ShallowWrapper node
*/
const setup = (props = {}, state = null) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />)
}

test('renders with no warnings with expected props', () => {
  const wrapper = setup();
  expect(wrapper.length).toBe(1);

  checkProps(GuessedWords, defaultProps);
})


describe('if there are NO words guessed: ', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });
  test('renders without errors', () => {
    const component = findTestByAttr(wrapper, 'component-start');
    expect(component.length).toBe(1);
  });
  test('renders instructions to start the game', () => {
    const component = findTestByAttr(wrapper, 'component-start');
    expect(component.text().length).not.toBe(0);
  });
})

describe('if there are words guessed: ', () => {
  let wrapper;
  const guessedWords = [
    { guessedWord: 'train', letterMatchCount: 3 },
    { guessedWord: 'agile', letterMatchCount: 1 },
    { guessedWord: 'party', letterMatchCount: 5 },
  ];
  beforeEach(() => {
    wrapper = setup({ guessedWords });
  });
  test('renders without errors', () => {
    const component = findTestByAttr(wrapper, 'component-table');
    expect(component.length).toBe(1);
  });
  test('renders correct number of guessed words', () => {
    const nodes = findTestByAttr(wrapper, 'component-table--guessedWord');
    expect(nodes.length).toBe(guessedWords.length);
  });
})
