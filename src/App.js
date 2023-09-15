import { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import NewExpense from "./components/ExpenseForm/NewExpense";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import "./components/Expenses/Expenses.css";

import Card from "./components/UI/Card";

const DUMMY_VALUE=[
  {
    expenseDate: new Date(2021, 2, 28),
    expenseTitle: "Food Expenditure",
    expenseAmount: 5000,
    LocationOfExpenditure: "India",
  },
  {
    expenseDate: new Date(2021, 2, 28),
    expenseTitle: "Food Expenditure",
    expenseAmount: 400,
    LocationOfExpenditure: "India",
  },
  {
    expenseDate: new Date(2021, 2, 28),
    expenseTitle: "Food Expenditure",
    expenseAmount: 300,
    LocationOfExpenditure: "India",
  },
  {
    expenseDate: new Date(2021, 2, 28),
    expenseTitle: "Food Expenditure",
    expenseAmount: 200,
    LocationOfExpenditure: "India",
  },
  {
    expenseDate: new Date(2021, 2, 28),
    expenseTitle: "Food Expenditure",
    expenseAmount: 100,
    LocationOfExpenditure: "India",
  },
]

function App() {
  const [Expenses, setExpenses] = useState(DUMMY_VALUE);

  function onAddExpenseHandler(expense) {
    const obj={
         expenseDate: new Date(),
          expenseTitle: expense.enteredTitle,
          expenseAmount: expense.enteredAmount,
          LocationOfExpenditure: "India"
      }
    setExpenses((Expenses) => {
      
      return [   obj,...Expenses     
      
      ];
    });
  }

  return (
    <div>
      <h2>Let's get started</h2>
      <NewExpense onAddExpense={onAddExpenseHandler} />
      <h2>Expense Items</h2>
      <Card
        className="expenses"
        expenseValue={Expenses}
        //onAddExpenseArray={expenseArr}
      >
        {}
      </Card>
    </div>
  );
}

export default App;
