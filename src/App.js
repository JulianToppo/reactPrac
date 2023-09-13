import { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import NewExpense from "./components/ExpenseForm/NewExpense";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import "./components/Expenses/Expenses.css";

import Card from "./components/UI/Card";

function App() {
  const [Expenses, setExpenses] =useState( [
    {
      expenseDate: new Date(2021, 2, 28),
      expenseTitle: "Food Expenditure",
      expenseAmount: 500,
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
      expenseAmount: 500,
      LocationOfExpenditure: "India",
    },
    {
      expenseDate: new Date(2021, 2, 28),
      expenseTitle: "Food Expenditure",
      expenseAmount: 500,
      LocationOfExpenditure: "India",
    },
    {
      expenseDate: new Date(2021, 2, 28),
      expenseTitle: "Food Expenditure",
      expenseAmount: 500,
      LocationOfExpenditure: "India",
    },
  ]
  )

  let expenseArr = (expenses) => {
    let x = [];
    console.log("expenseArrCalled");
    for (let i = 0; i < expenses.length; i++) {
      if (expenses[i] !== undefined) {
        x.push(
          <ExpenseItem
            expenseDate={expenses[i].expenseDate}
            expenseTitle={expenses[i].expenseTitle}
            expenseAmount={expenses[i].expenseAmount}
            LocationOfExpenditure={expenses[i].LocationOfExpenditure}
          />
        );
      } else {
        x.push(
          <ExpenseItem
            expenseDate={""}
            expenseTitle={""}
            expenseAmount={""}
            LocationOfExpenditure={""}
          />
        );
      }
    }

    return x;
  };

  function onAddExpenseHandler(expense) {
    console.log("Upstream Add Expense App");
    console.log("2222",expense);
    setExpenses((Expenses) => {
      console.log("inside setExpense",expense)
      return [
        ...Expenses,
        {
          expenseDate: new Date(),
          expenseTitle: expense.enteredTitle,
          expenseAmount: expense.enteredAmount,
          LocationOfExpenditure: "India",
        },
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
        onAddExpenseArray={expenseArr}
      >
        {}
      </Card>

      {/* <ExpenseItem expenseDate={Expenses[0].expenseDate} expenseTitle={Expenses[0].expenseTitle} expenseAmount={Expenses[0].expenseAmount} LocationOfExpenditure={Expenses[0].LocationOfExpenditure} /> */}
      {/* <ExpenseItem /> */}
    </div>
  );
}

export default App;
