import React from 'react';
import PropTypes from 'prop-types';
import styles from './SelectInput.scss';
const SelectInput = ({name, label, selectedValue, defaultOption, options, onChange})=>{
  return (
    <div>
      <label htmlFor={name} className={styles.title}>{label}</label>
      {/* ----- note: remember that, instead of using the 'selected' attribute, React uses a 'value' attribute on the root select tag. This is more convenient in a controlled component because you only need to update it in one place.
      see details at:  https://facebook.github.io/react/docs/forms.html#the-select-tag
      */}
      <select className={styles.select} onChange={onChange} name={name} value={selectedValue}>
        <option value="">{defaultOption.text}</option>
        {
          options.map((item, i)=>
          {
            return (<option key={i} value={item.value}  className={styles.option}>{item.text}</option>);
          })
        }
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
