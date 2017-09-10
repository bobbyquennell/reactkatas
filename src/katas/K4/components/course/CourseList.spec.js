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

      /* snappshot test option 1: Jest +  enzyme and enzyme-to-json */
      const wrapper = mount(
        <CourseList {...props}/>
      );
      expect(toJson(wrapper)).toMatchSnapshot();

      /* snappshot test option 2: Jest + react-test-renderer */
      // const wrapper2 = renderer.create(
      //   <CourseList {...props}/>
      // ).toJSON();
      //
      // expect(wrapper2).toMatchSnapshot();

    });
  });

});
