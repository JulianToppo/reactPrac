import React, { useState } from "react";
import './ExpenseForm.css'
import './NewExpense.css'

export default function ExpenseForm() {
  const [enteredTitle, setTitle] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [enteredDateOfExpense, setDateOfExpense] = useState("");

  function changeTitle(e) {
    console.log(e.target.value);
    setTitle(e.target.value);
  }

  function changeAmount(e) {
    console.log(e.target.value);
    setAmount(e.target.value);
  }

  function changeDate(e) {
    console.log(e.target.value);
    setDateOfExpense(e.target.value);
  }

  return (
    <div className="new-expense">
      <form>
        <div className="new-expense__controls">
          <div className="new-expense__controls">
            <label className="new-expense__control label" htmlFor="title">
              Expense Title:
            </label>
            <input
              className="new-expense__control input"
              id="title"
              value={enteredTitle}
              onChange={changeTitle}
              type="text"
            ></input>
          </div>

          <div className="new-expense__controls">
            <label className="new-expense__control label" htmlFor="amount">
              Amount:
            </label>
            <input
              className="new-expense__control input"
              id="amount"
              value={enteredAmount}
              type="number"
              onChange={changeAmount}
            ></input>
          </div>

          <div className="new-expense__controls">
            <label className="new-expense__control label" htmlFor="date">
              Date:
            </label>
            <input
              className="new-expense__control input"
              type="date"
              id="date"
              value={enteredDateOfExpense}
              onChange={changeDate}
            ></input>
          </div>

          <button type="submit">Enter Details</button>
        </div>
      </form>
    </div>
  );
}
