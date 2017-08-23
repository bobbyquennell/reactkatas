// @flow
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.scss';

const Button = ({name, onClick})=>{
  return(
    <button className={styles.root} onClick={onClick}>{name}</button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
export default Button;
