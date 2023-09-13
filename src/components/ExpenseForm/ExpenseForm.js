import React, { useState } from "react";

export default function ExpenseForm() {
  const [title, setTitle] = useState();
  const [amount, setAmount] = useState("");

  function changeTitle(e) {
    console.log(e.target.value)
  }

  function printOutput() {
    console.log(title);
  }

  return (
    <form>
      <label htmlFor="title">Expense Title:</label>
      <input
        id="title"
        value={title}
        onChange={changeTitle}
        type="text"
      ></input>
      <label htmlFor="amount">Amount:</label>
      <input id="amount" type="number"></input>
      <label htmlFor="date">Date:</label>
      <input type="date" id="date"></input>

      <button type="submit">Enter Details</button>
    </form>
  );
}
