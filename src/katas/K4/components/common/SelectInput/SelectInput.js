import React from 'react';
import PropTypes from 'prop-types';
import styles from './SelectInput.scss';
const SelectInput = ({options, title})=>{
  return (
    <div>
      <span className={styles.title}>{title}</span>
      <select className={styles.select}>
        { options.map((item, i)=>{ return (<option key={i} value={item.value} className={styles.option}>{item.name}</option>); })}
      </select>
    </div>
  );
};

SelectInput.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired
};
export default SelectInput;
