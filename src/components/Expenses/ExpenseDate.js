import React from "react";
import "./ExpenseDate.css"

 const ExpenseDate=(props)=> {
  let [month, year, day] = ["", "", ""];


    month = props.date.toLocaleString("en-US", { month: "long" });
    day = props.date.toLocaleString("en-US", { day: "2-digit" });
    year = props.date.toLocaleString("en-US", { year: "numeric" });


  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div  className="expense-date__year">{year}</div>
    </div>
  );
}

export default ExpenseDate
