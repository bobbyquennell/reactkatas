// @flow
import React from 'react';
import styles from './TimePicker.scss';
const TimePicker = function({ title }){
  return (
    <div>
      <span className={styles.title}>{title}</span>
      <input className={styles.root} type="time"/>
    </div>

  );
};

export default TimePicker;
