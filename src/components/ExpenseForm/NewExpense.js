import React from 'react'
import ExpenseForm from './ExpenseForm'

export default function NewExpense(props) {
function onSaveExpenseDataHandler(expense){
    console.log("onSave NewExpense Called")
    let saveExpense={
        ...expense
    }

    props.onAddExpense(saveExpense);
   

}
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}/>
    </div>
  )
}
