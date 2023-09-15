import React, { useState } from "react";
import "./Card.css";
import ExpensesFilter from "../ExpenseForm/ExpenseFilter";
import ExpenseItem from "../Expenses/ExpenseItem";

const Card = (props) => {
  const classes = "card " + props.className;
  const [filterYear, setFilteredYear] = useState(2023);

  let filteredExpenses = props.expenseValue.filter((expenses) => {
    return expenses.expenseDate.getFullYear().toString() === filterYear;
  });

  let outputMessageForExpenses =
    filteredExpenses.length == 0 ? 
      <p>No Expenses Found</p>
    : 
      filteredExpenses.map((expenses, i) => {
        return (
          <ExpenseItem
            key={i + new Date().toTimeString()}
            expenseDate={expenses.expenseDate}
            expenseTitle={expenses.expenseTitle}
            expenseAmount={expenses.expenseAmount}
            LocationOfExpenditure={expenses.LocationOfExpenditure}
          />
        );
      })
    ;

    let addMoreNotification=filteredExpenses.length==1?<h1>Only single Expense here. Please add more..</h1>:"";

  return (
    <div className={classes}>
      <ExpensesFilter selectedYear={filterYear} changeYear={setFilteredYear} />
      {outputMessageForExpenses}
      {addMoreNotification}
    </div>
  );
};

export default Card;
