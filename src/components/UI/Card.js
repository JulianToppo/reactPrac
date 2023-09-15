import React, { useState } from 'react';
import './Card.css';
import ExpensesFilter from '../ExpenseForm/ExpenseFilter';
import ExpenseItem from '../Expenses/ExpenseItem';

const Card = (props) => {
  const classes = 'card ' + props.className;
  const [filterYear,setFilteredYear]=useState(2021);
  
  return <div className={classes}>
    <ExpensesFilter selected={filterYear} />
    
    {
      
      props.expenseValue.map((expenses,i)=>(
       
         <ExpenseItem key={i+new Date().toTimeString()}
        expenseDate={expenses.expenseDate}
        expenseTitle={expenses.expenseTitle}
        expenseAmount={expenses.expenseAmount}
        LocationOfExpenditure={expenses.LocationOfExpenditure} />
      )
      )
    }
    
    </div>;
};

export default Card;