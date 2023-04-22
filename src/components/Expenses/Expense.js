import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";
import "./Expense.css";

const Expense = (props) => {
  const [year, setYear] = useState("2023");

  const getYear = (selectedYear) => {
    setYear(selectedYear);
  };

  const filteredExpense = props.items.filter(
    (items) => items.date.getFullYear().toString() === year
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={year} onSelectedUserInputYear={getYear} />
        <ExpensesChart expenses={filteredExpense}/>
        <ExpensesList items={filteredExpense}/>
      </Card>
    </div>
  );
};

export default Expense;
