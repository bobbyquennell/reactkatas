// @flow
import React from 'react';
import PropTypes from 'prop-types';
import styles from './DatePicker.scss';
const DatePicker = function({ label, name, value, onChange }){
  return (
    <div>
      <label className={styles.title} htmlFor={name}>{label}</label>
      <input className={styles.root} name={name} value={value} type="date" onChange={onChange}/>
    </div>

  );
};

DatePicker.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value:PropTypes.string.isRequired,
  onChange:PropTypes.func.isRequired
};

export default DatePicker;
