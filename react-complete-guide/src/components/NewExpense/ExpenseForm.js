import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [showExpenseForm, setShowExpenseForm] = useState(false);

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    // Prevent the default behavior of the form submit
    event.preventDefault();
    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };

    props.onSaveExpenseData(expenseData);

    // Clear the form two way binding adding the values to the state
    setTitle("");
    setAmount("");
    setDate("");
    setShowExpenseForm(false);
  };

  const addNewExpenseBtn = () => {
    return (
      <button type={"button"} onClick={() => setShowExpenseForm(true)}>
        Add new Expense
      </button>
    );
  };

  return (
    <div>
      {!showExpenseForm && addNewExpenseBtn()}
      {showExpenseForm && (
        <form onSubmit={submitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input type="text" value={title} onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                type="Number"
                min={"0.01"}
                step={"0.01"}
                value={amount}
                onChange={amountChangeHandler}
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                min={"2021-01-01"}
                max={"2022-12-31"}
                value={date}
                onChange={dateChangeHandler}
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button type="button" onClick={() => setShowExpenseForm(false)}>
              Cancel
            </button>
            <button type={"submit"}>Add Expense</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ExpenseForm;
