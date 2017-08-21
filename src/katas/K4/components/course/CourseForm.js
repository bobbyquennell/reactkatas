import React from 'react';
import TextInput from '../common/TextInput/TextInput';
import Button from '../common/Button/Button';
import Select from '../common/SelectInput/SelectInput';
import DatePicker from '../common/DatePicker/DatePicker';
import TimePicker from '../common/TimePicker/TimePicker';
const options = [
  {
    value: "Bill",
    name: "Bill"
  }, {
    value: "Tommy",
    name: "Tommy"
  }, {
    value: "Mike",
    name: "Mike"
  }
];

const CourseForm = ()=>{
  return (
    <form action="">
      <TextInput title="Course Name"/>
      <Select options={options} title="Lecturer Name"/>
      <TextInput title="Address"/>
      <DatePicker title="Date"/>
      <TimePicker title="Time"/>
      <Button name="Submit"/>
    </form>
  );
};

export default CourseForm;
