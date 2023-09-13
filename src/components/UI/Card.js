import React from 'react';

import './Card.css';

const Card = (props) => {
  const classes = 'card ' + props.className;

  console.log(props.children)
  return <div className={classes}>{props.onAddExpenseArray(props.expenseValue)}</div>;
};

export default Card;