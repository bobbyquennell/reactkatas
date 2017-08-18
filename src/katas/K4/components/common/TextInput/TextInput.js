// @flow
import React from 'react';
import styles from './TextInput.scss';
const TextInput = function({ title }){
  return (
    <div>
      <span className={styles.title}>{title}</span>
      <input className={styles.root} type="text"/>
    </div>

  );
};

export default TextInput;
