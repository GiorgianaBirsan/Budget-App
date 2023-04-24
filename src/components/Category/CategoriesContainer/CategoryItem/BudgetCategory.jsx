import React from 'react';
import './BudgetCategory.css';
import { SlWallet } from 'react-icons/sl';
import { rgba } from 'polished';

export default function BudgetCategory(props) {
  //  ICONS AND BOX DEFINE STYLE AND COLORS
  const box_color = {
    background: `${rgba(props.color, 0.2)}`,
    borderColor: props.borderColor,
    display: 'flex',
    width: '40px',
    height: '40px',
    borderRadius: '20%',
    borderWidth: '2px',
    borderStyle: 'solid',
  };
  const icon = {
    verticalAlign: 'middle',
    margin: 'auto',
    fontSize: '20px',
    opacity: '1',
    color: props.borderColor,
  };

  return (
    <>
      <div className="category">
        <div style={box_color}>
          <SlWallet style={icon} />
        </div>
        <div className="category_details">
          <p className="category_title">{props.title}</p>
          {Number(props.amount) > 0 ? (
            <p className="category_amount">{props.amount} RON</p>
          ) : (
            <p className="category_amount">0 RON</p>
          )}
        </div>
      </div>
    </>
  );
}
