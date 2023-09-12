import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";

const ExpenseItem=(props)=> {

  const deleteExpenseHandler=(e)=>{
    console.log(e)
    e.target.parentElement.parentElement.remove();
  } 

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
        <button onClick={deleteExpenseHandler}>Delete Expense</button>
      </div>
    </div>
  );
}

export default ExpenseItem;
