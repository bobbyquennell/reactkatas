// @flow
import React from 'react';
import styles from './Button.scss';

const Button = ({name})=>{
  return(
    <button className={styles.root}>{name}</button>
  );
};

export default Button;
