import React from 'react';
import PropTypes from 'prop-types';
import styles from './SelectInput.scss';
const SelectInput = ({name, options, label, defaultOption, onChange})=>{
  return (
    <div>
      <label htmlFor={name} className={styles.title}>{label}</label>
      <select className={styles.select} onChange={onChange} name={name}>
        <option value={defaultOption.value}>{defaultOption.name}</option>
        { options.map((item, i)=>{ return (<option key={i} value={item.name} className={styles.option}>{item.name}</option>); })}
      </select>
    </div>
  );
};

SelectInput.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  label: PropTypes.string.isRequired,
  defaultOption: PropTypes.object,
  name:PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
export default SelectInput;
