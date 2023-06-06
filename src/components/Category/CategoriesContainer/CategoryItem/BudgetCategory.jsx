import React from 'react';
import './BudgetCategory.css';

export default function BudgetCategory(props) {

  const box_color = {
    background: props.color,
    width: '20px',
    height: '5px',
  };

  // let amount = '';
  // Number(props.amount) > 0 ? (amount = props.amount) : (amount = '0');

  return (
    <>
      <div className="category">
        <div style={box_color} />
        <p className="category_title">{props.title}</p>
      </div>
    </>
  );
}
