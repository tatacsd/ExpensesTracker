import React from "react";
import ExpenseItem from "../../components/Expenses/ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((filteredItem) => (
        <ExpenseItem
          key={filteredItem.id}
          title={filteredItem.title}
          amount={filteredItem.amount}
          date={filteredItem.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
