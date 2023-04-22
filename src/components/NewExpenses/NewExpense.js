import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [displayForm, setDisplayForm] = useState(false)

  const newExpenseData = (enteredExpensedata) => {
    const expenseData = {
      ...enteredExpensedata,
      id: Math.random().toString(),
    };
    setDisplayForm(false);
    props.getExpenseData(expenseData);
  };

  const displayExpenseForm = () => {
      setDisplayForm(true)
  }

  const cancelForm = () => {
    setDisplayForm(false)
  }
 
  return (
    <div className="new-expense">
      {displayForm && <ExpenseForm addExpenseFormdata={newExpenseData} formDisplay={cancelForm}/>}
      {displayForm || <button onClick={displayExpenseForm}>Add New Expense</button>}
    </div>
  );
};

export default NewExpense;
