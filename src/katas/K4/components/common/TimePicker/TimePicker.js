// @flow
import React from 'react';
import styles from './TimePicker.scss';
import PropTypes from 'prop-types';
const TimePicker = function({ label, name, value, placeHolder, onChange }){
  return (
    <div>
      <label className={styles.title} htmlFor={name}>{label}</label>
      <input className={styles.root} name={name}
        type="text" value={value}
        placeholder={placeHolder}
        onChange={onChange}/>
    </div>

  );
};

TimePicker.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeHolder: PropTypes.string
};

export default TimePicker;
