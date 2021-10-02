import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const handleChange = (event) => {
    const selectedOption = event.target.value;

    // Pass the selected option to the parent component
    props.onSelectedOption(selectedOption);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={handleChange} defaultValue={props.selectedYear}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
