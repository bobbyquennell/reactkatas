import React from 'react';
import {Link} from 'react-router-dom';
import TextInput from '../common/TextInput/TextInput';
import Button from '../common/Button/Button';
import Select from '../common/SelectInput/SelectInput';
const Home = function() {
  const options = [
    {
      value: "English",
      name: "English"
    }, {
      value: "math",
      name: "math"
    }, {
      value: "chemistry",
      name: "chemistry"
    }
  ];
  return (
    <div>
      <h2>this is a home page</h2>
      <Link to="/about">About</Link>
      <br/>
      <br/>
      <div style={{width:"50%", margin:"10px auto"}}>
        <TextInput title="Title"/>
        <TextInput title="Teacher Name"/>
        <Select options={options} title="Course Name"/>
        <Button name="Submit"/>

      </div>

    </div>
  );
};

export default Home;
