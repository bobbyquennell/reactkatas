// @flow
import React from 'react';
import TextInput from '../common/TextInput/TextInput';
import Button from '../common/Button/Button';
import Select from '../common/SelectInput/SelectInput';
import DatePicker from '../common/DatePicker/DatePicker';
import TimePicker from '../common/TimePicker/TimePicker';
import PropTypes from 'prop-types';

const CourseForm = ({course, lecturerOptions, onChange, onSubmit, submiting, errors})=>{
  return (
    <form action="">
      <TextInput id="title" label="Course Name" name="title" value={course.title}
        placeHolder="Input Course Name" onChange={onChange} message={errors.title}
        valid={!(errors.title && errors.title.length > 0)}/>
      <Select options={lecturerOptions} label="Lecturer Name" name="lecturerId" selectedValue={course.lecturerId} defaultOption={{text:"Choose Lecturer", value:""}} onChange={onChange} value={course.lecturer}/>
      <TextInput id="address" label="Address" value={course.address} name="address"
        placeHolder="Place of the course" onChange={onChange} message={errors.address} valid={!(errors.address && errors.address.length <= 0)}/>
      <DatePicker label="Date" value={course.date} name="date" placeHolder="2017-08-23" onChange={onChange}/>
      <TimePicker label="Time" value={course.time} name="time" placeHolder="14:20" onChange={onChange}/>
      <Button name={submiting === true ? "Submiting ..." : "Submit"} onClick={onSubmit} disabled={submiting}/>
    </form>
  );
};
CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  lecturerOptions: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  submiting: PropTypes.bool.isRequired,
  errors: PropTypes.PropTypes.object
};

export default CourseForm;
