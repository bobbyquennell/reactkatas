// @flow
import React from 'react';
import styles from './TextInput.scss';
import PropTypes from 'prop-types';

const TextInput = function({ title }){
  return (
    <div>
      <span className={styles.title}>{title}</span>
      <input className={styles.root} type="text"/>
    </div>

  );
};

TextInput.propTypes = {
  title: PropTypes.string.isRequired
};
export default TextInput;
