// @flow
import React from 'react';
import styles from './TextInput.scss';
import PropTypes from 'prop-types';

const TextInput = function({ title, value }){
  return (
    <div>
      <span className={styles.title}>{title}</span>
      <input className={styles.root} type="text" value={value}/>
    </div>

  );
};

TextInput.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string
};
export default TextInput;
