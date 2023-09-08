import React from "react";
import './ExpenseItem.css'
function ExpenseItem(props) {
   
  return (
    <div>
      {/* <h2>Expense Item</h2> */}
      <div className="expense-item">
      <div>{ props.expenseDate}</div>
      <div className="expense-item__description">
        <h2>{ props.expenseTitle}</h2>
        <div className="expense-item__price">${ props.expenseAmount}</div>
        <div className="expense-item__price">{ props.LocationOfExpenditure}</div>
      </div>
    </div>
    </div>
  );
}

export default ExpenseItem;
