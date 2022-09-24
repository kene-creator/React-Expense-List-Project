import React, { useState } from "react";

import "../Expenses/Expenses.css";
import Card from "../UI/Card.js";
import ExpensesFilter from "../Expenses/ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  console.log(props);
  const [selectedYear, setSelectedYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          setYear={selectedYear}
          onAddFilter={filterChangeHandler}
        ></ExpensesFilter>
        <ExpensesChart expenses={filteredExpenses} />

        <ExpensesList items={filteredExpenses}></ExpensesList>
      </Card>
    </li>
  );
}

export default Expenses;
