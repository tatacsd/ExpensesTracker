import React, { useState } from "react";

import "./Expenses.css";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card/Card";
import ExpensesList from "../ExpensesList/ExpensesList";

const Expenses = (props) => {
  const [selectedOption, setSelectedOption] = useState("2021");

  const handleSelectedOption = (option) => {
    setSelectedOption(option);
  };

  const filteredExpenses = props.items.filter((item) => {
    return item.date.getFullYear().toString() === selectedOption;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={selectedOption}
          onSelectedOption={handleSelectedOption}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
