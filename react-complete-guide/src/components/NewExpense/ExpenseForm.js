import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleChangeHandler = (event) => {
    setUserInput({
      // spread operator to keep the rest of the state
      ...userInput,
      //override the property that is being changed
      title: event.target.value,
    });
    console.log(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      amount: event.target.value,
    });
    console.log(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      date: event.target.value,
    });
    console.log(event.target.value);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="Number"
            min={"0.01"}
            step={"0.01"}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min={"2021-01-01"}
            max={"2022-12-31"}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type={"submit"}>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
