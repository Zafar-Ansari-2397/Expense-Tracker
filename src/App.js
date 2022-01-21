import React, { useState } from "react";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newExpense/NewExpense";

const dummyExpenses = [
  {
    id: 1,
    title: "Buy Book",
    date: new Date(2021, 2, 22),
    amount: 294.67,
  },
  {
    id: 2,
    title: "Buy Phone",
    date: new Date(2021, 4, 14),
    amount: 294.67,
  },
  {
    id: 3,
    title: "Buy laptop",
    date: new Date(2021, 2, 28),
    amount: 294.67,
  },
];
function App() {
  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpenseHandler = (expense) => {
    console.log(expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <>
      <NewExpense onFinalExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </>
  );
}

export default App;
