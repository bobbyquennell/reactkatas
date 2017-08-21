// @flow
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.scss';

const Button = ({name})=>{
  return(
    <button className={styles.root}>{name}</button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired
};
export default Button;
