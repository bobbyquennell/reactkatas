// @flow
import React from 'react';
import styles from './TextInput.scss';
import PropTypes from 'prop-types';

const TextInput = function({ id, label, value, name, placeHolder, onChange, message="", valid= true}){
  return (
    <div className={styles.root}>
      <label className={styles.label} htmlFor={name}>{label}</label>
      <input className={styles.input} type="text" value={value} name={name}
        placeholder={placeHolder} onChange={onChange} id={id}/>
      <div className={styles.invalid}>
        <span>{((!valid)&& message !== null) || undefined ? `invalid: ${message}` : null }</span>
      </div>
    </div>

  );
};

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  placeHolder: PropTypes.string,
  message: PropTypes.string,
  valid: PropTypes.bool
};
export default TextInput;
