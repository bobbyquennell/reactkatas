import About from './About';
import React from 'react';
import { shallow } from 'enzyme';

describe('About', ()=>{
  it('renders without crashing', ()=>{
    const wrapper = shallow(<About/>);
    expect(wrapper.contains(<h2>This is About page</h2>)).toBe(true);
  });
});
