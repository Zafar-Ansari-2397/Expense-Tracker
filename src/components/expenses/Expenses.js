import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");
  const filterChangeHandler = (filterYear) => {
    setFilteredYear(filterYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <>
      <div className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {/* conditionally renderring */}
        {/* with ternery operator */}

        {/* {filteredExpenses.length === 0 ? (
          <p>No Expenses found !</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              date={expense.date}
              price={expense.amount}
            />
          ))
        )} */}

        {/* with && operator */}
        {filteredExpenses.length === 0 && (
          <p style={{ color: "white", textAlign: "center", fontSize: "2rem" }}>
            No, expenses found
          </p>
        )}
        {/* listing array and transform in a JSX element */}
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            price={expense.amount}
          />
        ))}
        {/* <ExpenseItem
          title={props.expenses[0].title}
          date={props.expenses[0].date}
          price={props.expenses[0].price}
        />
        <ExpenseItem
          title={props.expenses[1].title}
          date={props.expenses[1].date}
          price={props.expenses[1].price}
        />
        <ExpenseItem
          title={props.expenses[2].title}
          date={props.expenses[2].date}
          price={props.expenses[2].price}
        /> */}
      </div>
    </>
  );
}

export default Expenses;
