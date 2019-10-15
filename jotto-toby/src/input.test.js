import React from 'react';
import { shallow } from 'enzyme';

import Input from './input';
import { findTestByAttr, storeFactory } from '../test/testUtils';

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />).dive().dive();
  return wrapper;
}

describe('Input Component', () => {
  describe('word has not be guessed', () => {
    let wrapper = {};

    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState);
    });
    test('renders without error', () => {
      const component = findTestByAttr(wrapper, 'component-input');
      expect(component.length).toBe(1);
    });

    test('renders the input box', () => {
      const component = findTestByAttr(wrapper, 'input-form');
      expect(component.length).toBe(1);
    });

    test('renders the submit button', () => {
      const component = findTestByAttr(wrapper, 'submit-button');
      expect(component.length).toBe(1);
    });
  });


});

describe('updates to state', () => {
  let wrapper;

  beforeEach(() => {
    const mockState = { success: true };
    wrapper = setup(mockState);
  });
  test('renders without error', () => {
    const component = findTestByAttr(wrapper, 'component-input');
    expect(component.length).toBe(1);
    console.log('wrapper: ', wrapper.state());
  });

  test('does not render input box', () => {
    const component = findTestByAttr(wrapper, 'input-form');
    expect(component.length).toBe(0);
  });

  test('does not render submit button', () => {
    const component = findTestByAttr(wrapper, 'submit-button');
    expect(component.length).toBe(0);
  });
});
