import React, { Fragment, useState } from 'react';
import './Dropdown.css';

/**
 * Common component for dropdown element inside the application
 *
 * @param {*} options - The dropdown's options are populated dinamicaly from localStorage lists.
 * @property {string} label - The option's title
 * @returns JSX.Element
 */

export default function Dropdown({ options}) {
  const [selectedOption, setSelectedOption] = useState('');

  function handleChange(e) {
    setSelectedOption(e.target.value);
     console.log('d', e.target.value);
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
          -
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </Fragment>
  );
}
