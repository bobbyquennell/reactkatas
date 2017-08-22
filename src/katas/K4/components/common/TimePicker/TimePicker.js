// @flow
import React from 'react';
import styles from './TimePicker.scss';
import PropTypes from 'prop-types';
const TimePicker = function({ label, name, value, onKeyPress }){
  return (
    <div>
      <label className={styles.title} htmlFor={name}>{label}</label>
      <input className={styles.root} name={name} type="time" value={value} onKeyPress={onKeyPress}/>
    </div>

  );
};

TimePicker.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onKeyPress: PropTypes.func.isRequired
};

export default TimePicker;
