import React, { useState } from "react";

import "./Expenses.css";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card/Card";
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
  const [selectedOption, setSelectedOption] = useState("2021");

  const handleSelectedOption = (option) => {
    console.log(option);
    setSelectedOption(option);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={selectedOption}
          onSelectedOption={handleSelectedOption}
        />
        {props.items.map((item) => (
          <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
