import React, { useState } from "react";

import "./ExpenseItem.css";
import Card from "../UI/Card/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  // array destructuring
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("updated");
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* function without parentheses, so it is a pointer only */}
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

// to use the component outside of the file we need to export it
export default ExpenseItem;
