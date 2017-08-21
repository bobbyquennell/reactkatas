// @flow
import React from 'react';
import styles from './DatePicker.scss';
const DatePicker = function({ title }){
  return (
    <div>
      <span className={styles.title}>{title}</span>
      <input className={styles.root} type="date"/>
    </div>

  );
};

export default DatePicker;
