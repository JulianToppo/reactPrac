import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card"
const ExpenseItem=(props)=> {
  return (
    <div>
      <div className="expense-item">
        <div>
          <ExpenseDate date={props.expenseDate} />
        </div>
        <ExpenseDetails
          amount={props.expenseAmount}
          location={props.LocationOfExpenditure}
          title={props.expenseTitle}
        />
      </div>
    </div>
  );
}

export default ExpenseItem;
