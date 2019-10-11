import React from 'react';
import { shallow } from 'enzyme';

import Congrats from './Congrats';
import { findTestByAttr, checkProps } from '../test/testUtils';

const defaultProps = { success: true }; // WARNING: If this is modified, verify that all tests account for those changes as some passing tests may be passing given a prop assumption that your modification has now made a false assumption.
/**
  Returns a ShallowWrapper node with the injected props and state.
  @param {Object} [props] - props to inject into component.
  @param {Object} [state] - state to inject into component.
  @return {ShallowWrapper} - ShallowWrapper node
*/
const setup = (props = {}, state = null) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps} />)
}

describe('<Congrats /> renders without errors: ', () => {
  test('shows no warnings with expected props', () => {
    const wrapper = setup({ success: false });
    expect(wrapper.length).toBe(1);
  })

  test('renders no text when `success` prop is false' , () => {
    const wrapper = setup({ success: false });
    const successMsg = findTestByAttr(wrapper, 'component-success');
    expect(successMsg.text()).toBe('');
  });

  test('renders non-empty congrats message when `success` prop is truthy', () => {
    const wrapper = setup({ success: true });
    const successMsg = findTestByAttr(wrapper, 'component-message');
    expect(successMsg.text().length).not.toBe(0);
  });

  test('renders propTypes without errors', () => {
    checkProps(Congrats, { success: true });
  })
})
