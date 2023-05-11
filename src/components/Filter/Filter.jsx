import React, { useState } from 'react';
import './Filter.css';

/*Extract the name and the value of each category from listCategories for filter's options, and
adding a first default "No filter" option */
let categoryFilterOptions = [];

const categories = JSON.parse(localStorage.getItem('listCategories'));
if (categories!= null) {
  categoryFilterOptions = categories.map(({ title, value }) => ({
    label: title,
    value: value,
  }));
  categoryFilterOptions.unshift({ label: '--', value: 'none' });
}

export default function Filter(props) {
  function handleChange(e) {
    props.onChangeFilter(e.target.value);
  }
  return (
    <React.Fragment>
      <div className="filter-menu">
        <label>Filter by</label>
        <select
          id="dropdown-container"
          name="dropdown-container"
          value={props.selected}
          onChange={handleChange}
        >
          {categoryFilterOptions.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </React.Fragment>
  );
}
