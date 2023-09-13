import React, { useReducer, useState } from "react";
import "./ExpenseForm.css";
import "./NewExpense.css";

export default function ExpenseForm() {
  // const [enteredTitle, setTitle] = useState("");
  // const [enteredAmount, setAmount] = useState("");
  // const [enteredDateOfExpense, setDateOfExpense] = useState("");

  const [userFormState, setUserFormState] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDateOfExpense: "",
  });

  function changeTitle(e) {
    setUserFormState((userFormState) => {
      return { ...userFormState, enteredTitle: e.target.value };
    });
    // console.log(e.target.value);
    // setTitle();
  }

  function changeAmount(e) {
    setUserFormState((userFormState) => {
      return { ...userFormState, enteredAmount: e.target.value };
    });
    // console.log(e.target.value);
    // setAmount(e.target.value);
  }

  function changeDate(e) {
    setUserFormState((userFormState) => {
      return { ...userFormState, enteredDateOfExpense: e.target.value };
    });
    // console.log(e.target.value);
    // setDateOfExpense(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();

    let formObj = {
      ...userFormState,
    };

    console.log(formObj);
  }

  return (
    <div className="new-expense">
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__controls">
            <label className="new-expense__control label" htmlFor="title">
              Expense Title:
            </label>
            <input
              className="new-expense__control input"
              id="title"
              value={userFormState.enteredTitle}
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
              value={userFormState.enteredAmount}
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
              value={userFormState.enteredDateOfExpense}
              onChange={changeDate}
            ></input>
          </div>

          <button type="submit">Enter Details</button>
        </div>
      </form>
    </div>
  );
}
