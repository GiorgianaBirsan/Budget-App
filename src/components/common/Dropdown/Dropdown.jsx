import React, { Fragment, useState } from 'react';
import './Dropdown.css';

export default function Dropdown({ options }) {
  const [selectedOption, setSelectedOption] = useState('');

  function handleChange(e) {
    setSelectedOption(e.target.value);
    //console.log('sa', e.target.value);
  }

  return (
    <Fragment>
      <select
        id="dropdown-container"
        name="dropdown-container"
        value={selectedOption}
        onChange={handleChange}
      >
        <option disabled value="">
          --category--
        </option>
        {options.map(option => (
          <option key={option.value}>{option.label}</option>
        ))}
      </select>
    </Fragment>
  );
}
