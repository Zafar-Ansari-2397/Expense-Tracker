import React, { useState } from "react";
import NewExpenseForm from "./NewExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const [isModalOpen, setIsmodalOpen] = useState(false);
  // passing data through props
  const newExpenseHandle = (data) => {
    const expenseData = {
      ...data,
      id: Math.random().toString(),
    };
    props.onFinalExpense(expenseData);
  };
  // expense form modal add and close -
  const startEditingHandler = () => {
    setIsmodalOpen(true);
  };
  const stopEditingHandler = () => {
    setIsmodalOpen(false);
  };
  return (
    <div className="new-expense">
      {!isModalOpen && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isModalOpen && (
        <NewExpenseForm
          onSaveExpense={newExpenseHandle}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
