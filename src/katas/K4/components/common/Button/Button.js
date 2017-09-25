// @flow
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.scss';
import classnames from 'classnames';

const Button = ({ className, name, onClick, disabled })=>{
  return(
    <button className={classnames({
      [styles.root]: true,
      [className]: className
    })} onClick={onClick} disabled={disabled}>{name}</button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
export default Button;
