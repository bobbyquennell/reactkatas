import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { CourseList } from './CourseList';

describe('CourseList', ()=>{
  it('should render correctly', ()=>{
    const wrapper = shallow(
      <CourseList />
    ).toJSON();
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
