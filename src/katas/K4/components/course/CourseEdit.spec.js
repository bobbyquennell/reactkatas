import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { CourseEdit } from './CourseEdit';

describe('CourseEdit', function() {
  const props = {
    course: {
      id: "",
      title: "",
      address: '',
      date: '',
      time: '',
      lecturerId: ''
    },
    lecturers:[],
    actions: {
      createCourse: ()=>{ return Promise.resolve(); }
    }
  };
  const DUT = mount(
    <CourseEdit {...props}/>
  );
  describe('when submit a course with a empty title', ()=>{
    it('Should set error messages', ()=>{
      const submitBtn = DUT.find('button').last();
      // expect(submitBtn.prop('type')).toBe('submit');
      submitBtn.simulate('click');
      expect(DUT.state().errors.title).toBe('title must be longer than 5 charactors');
    });
  });
});
