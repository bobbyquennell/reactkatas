// @flow
import React from 'react';
import TextInput from '../common/TextInput/TextInput';
import Button from '../common/Button/Button';
import Select from '../common/SelectInput/SelectInput';
import DatePicker from '../common/DatePicker/DatePicker';
import TimePicker from '../common/TimePicker/TimePicker';
import PropTypes from 'prop-types';

const CourseForm = ({course, lecturerOptions})=>{
  return (
    <form action="">
      <TextInput title="Course Name" value={course.title}/>
      <Select options={lecturerOptions} title="Lecturer Name" defaultOption={{name:"Choose Lecturer", value:"haha"}}/>
      <TextInput title="Address" value={course.address}/>
      <DatePicker title="Date" value={course.date}/>
      <TimePicker title="Time" value={course.time}/>
      <Button name="Submit"/>
    </form>
  );
};
CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  lecturerOptions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CourseForm;
