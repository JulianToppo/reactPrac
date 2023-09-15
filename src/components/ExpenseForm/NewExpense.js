import {React,useState} from "react";
import ExpenseForm from "./ExpenseForm";

export default function NewExpense(props) {
  const [showForm, setShowForm] = useState(true);
  function onSaveExpenseDataHandler(expense) {
    console.log("onSave NewExpense Called");
    let saveExpense = {
      ...expense,
    };

    props.onAddExpense(saveExpense);
  }

  function toggleFromVisibilityHandler(e) {
    console.log("visibilitytoggled");
    e.preventDefault();
    let x = showForm ^ true;
    setShowForm(x);
  }
  return (
    <div className="new-expense">
      {!showForm && (
        <div>
          <button
            className="new-expense__controls input"
            onClick={toggleFromVisibilityHandler}
          >
            Add New Expenses
          </button>
        </div>
      )}
      {showForm === true && (
        <ExpenseForm
          toggleFromVisibility={toggleFromVisibilityHandler}
          onSaveExpenseData={onSaveExpenseDataHandler}
        />
      )}
    </div>
  );
}
