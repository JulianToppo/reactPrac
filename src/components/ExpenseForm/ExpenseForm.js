import React, { useState } from "react";
import "./ExpenseForm.css";
import "./NewExpense.css";

export default function ExpenseForm(props) {
  const [showForm, setShowForm] = useState(true);

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

    props.onSaveExpenseData(formObj);
    toggleFromVisibility(e);
  }

  function toggleFromVisibility(e) {
    console.log("visibilitytoggled");
    e.preventDefault();
    let x = showForm ^ true;
    setShowForm(x);
  }
  return (
    <div>
      {showForm == true && (
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
                value={showForm ? userFormState.enteredAmount : ""}
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
            <button type="button" onClick={toggleFromVisibility}>
              Cancel
            </button>
            <button type="submit">Enter Details</button>
          </div>
        </form>
      )}
      {!showForm && (
        <div>
          <button
            className="new-expense__controls input"
            onClick={toggleFromVisibility}
          >
            Add New Expenses
          </button>
        </div>
      )}
    </div>
  );
}
