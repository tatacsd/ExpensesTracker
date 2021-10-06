import React from "react";
import { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEdting, setIsEdting] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    // Pass the expense data to the parent component
    props.onAddExpense(expenseData);
    setIsEdting(false);
  };

  const startEditingHandler = () => {
    setIsEdting(true);
  };

  const cancelEditingHandler = () => {
    setIsEdting(false);
  };

  return (
    <div className={"new-expense"}>
      {!isEdting && (
        <button onClick={startEditingHandler}> Add New Expense</button>
      )}
      {isEdting && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
