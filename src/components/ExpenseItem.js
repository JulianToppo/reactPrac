import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";

function ExpenseItem(props) {
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
