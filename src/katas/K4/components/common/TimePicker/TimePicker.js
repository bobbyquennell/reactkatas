// @flow
import React from 'react';
import styles from './TimePicker.scss';
import PropTypes from 'prop-types';
const TimePicker = function({ title }){
  return (
    <div>
      <span className={styles.title}>{title}</span>
      <input className={styles.root} type="time"/>
    </div>

  );
};

TimePicker.propTypes = {
  title: PropTypes.string.isRequired
};

export default TimePicker;
