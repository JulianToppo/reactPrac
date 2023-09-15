import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

export default function ExpensesList(props) {
  let outputMessageForExpenses =
    props.filteredExpensesList.length == 0 ? (
      <h1 className="expenses-list__fallback">
        No Expenses Found
      </h1>
    ) : (
      <ul className="expenses-list">
        {props.filteredExpensesList.map((expenses, i) => {
          return <ExpenseItem
            key={i + new Date().toTimeString()}
            expenseDate={expenses.expenseDate}
            expenseTitle={expenses.expenseTitle}
            expenseAmount={expenses.expenseAmount}
            LocationOfExpenditure={expenses.LocationOfExpenditure}
          />;
        })}
      </ul>
    );

  return <div>{outputMessageForExpenses}</div>;
}
