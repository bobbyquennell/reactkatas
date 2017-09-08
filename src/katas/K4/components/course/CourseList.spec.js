import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { CourseList } from './CourseList';
import renderer from 'react-test-renderer';

describe('CourseList:', ()=>{
  describe('When async operation is running', ()=>{
    it('should render loading dots', ()=>{
      const props = {
        courseList: [],
        lecturers:[],
        asyncInProgress: 0
      };
      const wrapper = mount(
        <CourseList {...props}/>
      );
      const wrapper2 = renderer.create(
        <CourseList {...props}/>
      ).toJSON();

      expect(wrapper2).toMatchSnapshot();
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

});
