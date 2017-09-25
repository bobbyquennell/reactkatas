// @flow
import React from 'react';
import PropTypes from 'prop-types';
import styles from './DatePicker.scss';
const DatePicker = function({ label, name, value, placeHolder, onChange }){
  return (
    <div>
      <label className={styles.title} htmlFor={name}>{label}</label>
      <input className={styles.root} name={name} value={value} type="text"
        placeholder={placeHolder} onChange={onChange}/>
    </div>

  );
};

DatePicker.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value:PropTypes.string.isRequired,
  placeHolder: PropTypes.string,
  onChange:PropTypes.func.isRequired
};

export default DatePicker;
