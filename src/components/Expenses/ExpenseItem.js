import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";

const ExpenseItem = (props) => {
  const deleteExpenseHandler = (e) => {
    console.log(e);
    e.target.parentElement.parentElement.remove();
  };

  const [title, setTitle] = useState(props.expenseTitle);
  const [expenseVal, setExpense] = useState(props.expenseAmount);

  const changeTitleHandler = () => {
    setTitle("Updated!!!");
    console.log("Title Updated");
  };

  // const deleteExpenseHandler=(e)=>{
  //   console.log(e)
  //   e.target.parentElement.parentElement.remove();
  // }
  const changeExpenseHandler = () => {
    setExpense(100);
  };

  return (
    <div>
      <div className="expense-item">
        <div>
          <ExpenseDate date={props.expenseDate} />
        </div>
        <ExpenseDetails
          amount={expenseVal}
          location={props.LocationOfExpenditure}
          title={title}
        />
        {/* <button onClick={deleteExpenseHandler}>Delete Expense</button> */}
        <button onClick={changeExpenseHandler}>Change Expense</button>
        <button onClick={changeTitleHandler}>Change Title</button>
      </div>
    </div>
  );
};

export default ExpenseItem;
