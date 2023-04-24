import React, { useState } from "react";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpenses/NewExpense";

const DUMMY_DATA = [
  {
    id:1,
    title: "Car Insurance",
    date: new Date(),
    amount: 3456,
  },
  { id:2,title: "Mobile Recharge", date: new Date(2023, 2, 16), amount: 389 },
  {
    id:3,
    title: "Foods",
    date: new Date(2023, 1, 26),
    amount: 850,
  },
  {
  id:4,
  title: "Home rental"
  date: new Date(2023, 1, 24),
  amount: 10000
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_DATA);

  const addExpenseHandler = (expense) => {
    setExpenses( prevExpense => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <div>
      <NewExpense getExpenseData={addExpenseHandler} />
      <Expense items={expenses}></Expense>
    </div>
  );
};

export default App;
