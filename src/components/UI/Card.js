import React, { useState } from "react";
import "./Card.css";
import ExpensesFilter from "../ExpenseForm/ExpenseFilter";
import ExpenseItem from "../Expenses/ExpenseItem";

const Card = (props) => {
  const classes = "card " + props.className;
  const [filterYear, setFilteredYear] = useState(2023);

  return (
    <div className={classes}>
      <ExpensesFilter selectedYear={filterYear} changeYear={setFilteredYear} />

      {props.expenseValue.map((expenses, i) => {
          if (expenses.expenseDate.getFullYear() == Number(filterYear)) {
            console.log("inside filter");
            return <ExpenseItem
              key={i + new Date().toTimeString()}
              expenseDate={expenses.expenseDate}
              expenseTitle={expenses.expenseTitle}
              expenseAmount={expenses.expenseAmount}
              LocationOfExpenditure={expenses.LocationOfExpenditure}
              
            />;
            console.log("inside filter");
        }

      })}
    </div>
  );
};

export default Card;
