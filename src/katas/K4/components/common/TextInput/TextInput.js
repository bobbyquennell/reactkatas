// @flow
import React from 'react';
import styles from './TextInput.scss';
import PropTypes from 'prop-types';

const TextInput = function({ label, value, name, onChange}){
  return (
    <div>
      <label className={styles.title} htmlFor={name}>{label}</label>
      <input className={styles.root} type="text" value={value} name={name} onChange={onChange}/>
    </div>

  );
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};
export default TextInput;
