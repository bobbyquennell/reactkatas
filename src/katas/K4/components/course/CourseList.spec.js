import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { CourseList } from './CourseList';

describe('CourseList', ()=>{
  it('should render correctly', ()=>{
    const props = {
      courseList: [],
      lecturers:[],
      asyncInProgress: 0
    };
    const wrapper = shallow(
      <CourseList {...props}/>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
