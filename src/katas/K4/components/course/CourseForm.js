// @flow
import React from 'react';
import TextInput from '../common/TextInput/TextInput';
import Button from '../common/Button/Button';
import Select from '../common/SelectInput/SelectInput';
import DatePicker from '../common/DatePicker/DatePicker';
import TimePicker from '../common/TimePicker/TimePicker';
import PropTypes from 'prop-types';

const CourseForm = ({course, lecturerOptions, onChange, onSubmit})=>{
  return (
    <form action="">
      <TextInput label="Course Name" name="title" value={course.title}
        placeHolder="Input Course Name" onChange={onChange}/>
      <Select options={lecturerOptions} label="Lecturer Name" name="lecturer" defaultOption={{name:"Choose Lecturer", value:"haha"}} onChange={onChange} value={course.lecturer}/>
      <TextInput label="Address" value={course.address} name="address"
        placeHolder="Place of the course" onChange={onChange}/>
      <DatePicker label="Date" value={course.date} name="date" placeHolder="2017-08-23" onChange={onChange}/>
      <TimePicker label="Time" value={course.time} name="time" placeHolder="14:20" onChange={onChange}/>
      <Button name="Submit" onClick={onSubmit}/>
    </form>
  );
};
CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  lecturerOptions: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default CourseForm;
