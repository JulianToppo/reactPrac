import React, { useState } from "react";
import "./Card.css";
import ExpensesFilter from "../ExpenseForm/ExpenseFilter";
import ExpensesList from "../Expenses/ExpensesList";

const Card = (props) => {
  const classes = "card " + props.className;
  const [filterYear, setFilteredYear] = useState("2023");

  let filteredExpenses = props.expenseValue.filter((expenses) => {
    console.log("filter Expenses called");
    return expenses.expenseDate.getFullYear().toString() === filterYear;
  });

  let addMoreNotification =
    filteredExpenses.length == 1 ? (
      <h1>Only single Expense here. Please add more..</h1>
    ) : (
      ""
    );

  return (
    <div className={classes}>
      <ExpensesFilter selectedYear={filterYear} changeYear={setFilteredYear} />
      <ExpensesList filteredExpensesList={filteredExpenses} />
      {addMoreNotification}
    </div>
  );
};

export default Card;
