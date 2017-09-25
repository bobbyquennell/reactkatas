import React from 'react';
import styles from './LoadingDots.scss';

const LoadingDots = ()=>{
  return (
    <div className={styles.root}>
      <div className={styles.dot1} />
      <div className={styles.dot2} />
      <div className={styles.dot3} />
    </div>
  );
};

export default LoadingDots;
