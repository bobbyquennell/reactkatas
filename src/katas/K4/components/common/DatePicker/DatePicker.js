// @flow
import React from 'react';
import PropTypes from 'prop-types';
import styles from './DatePicker.scss';
const DatePicker = function({ title }){
  return (
    <div>
      <span className={styles.title}>{title}</span>
      <input className={styles.root} type="date"/>
    </div>

  );
};

DatePicker.propTypes = {
  title: PropTypes.string.isRequired
};

export default DatePicker;
