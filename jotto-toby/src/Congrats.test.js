import React from 'react';
import { configure, shallow } from 'enzyme';
import ReactAdapter from 'enzyme-adapter-react-16';

import Congrats from './Congrats';
import { findTestByAttr } from '../test/testUtils';

configure({ adapter: new ReactAdapter() });

/**
  Returns a ShallowWrapper node with the injected props and state.
  @param {Object} [props] - props to inject into component.
  @param {Object} [state] - state to inject into component.
  @return {ShallowWrapper} - ShallowWrapper node
*/
const setup = (props = {}, state = null) => {
  return shallow(<Congrats {...props} />)
}

it('renders without errors', () => {
  const wrapper = setup();
  expect(wrapper.length).toBe(1);
})

it('renders no text when `success` prop is false' , () => {

});

it ('renders non-empty congrats message when `success` prop is truthy', () => {

});
