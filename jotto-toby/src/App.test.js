import React from 'react';
import { configure, shallow } from 'enzyme';
import ReactAdapter from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter: new ReactAdapter() });

it('renders without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.length).toBe(1);
});
