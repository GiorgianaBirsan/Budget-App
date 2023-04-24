import React from 'react';
import './TransactionItem.css';
import { HiOutlineArrowDownTray, HiOutlineArrowUpTray } from 'react-icons/hi2';
import { rgb, rgba } from 'polished';

let style_amount = {};
let amount = '';
let amountTypeIcon = {};
let style_icon = {};

export default function TransactionItem(props) {
  if (props.amount_type === 'income') {
    style_icon = {
      backgroundColor: rgba(68, 176, 35, 0.1),
      color: rgb(68, 176, 35),
      padding: '10px',
      borderRadius: '10px',
    };
    style_amount = {
      color: rgb(68, 176, 35),
      margin: '0px',
    };
    amount = (
      <p style={{ margin: '0px' }}>
        {' '}
        <b>+ {props.amount} </b> RON
      </p>
    );
    amountTypeIcon = <HiOutlineArrowDownTray style={style_icon} />;
  } else {
    style_icon = {
      backgroundColor: rgba(235, 12, 12, 0.1),
      color: rgb(235, 12, 12),
      padding: '10px',
      borderRadius: '10px',
    };
    style_amount = {
      color: rgb(235, 12, 12),
      margin: '0px',
    };
    amount = (
      <p style={{ margin: '0px' }}>
        <b> - {props.amount} </b> RON
      </p>
    );
    amountTypeIcon = <HiOutlineArrowUpTray style={style_icon} />;
  }

  const category_mark = {
    width: '10px',
    height: '70px',
    backgroundColor: props.color,
    borderRadius: '100px 0px 0px 100px',
    marginLeft: '-40px',
    marginRight: '30px',
  };

  const category = props.category_type.charAt(0).toUpperCase() + props.category_type.slice(1);
  return (
    <>
      <div className="transaction_head">
        <div style={category_mark}></div>

        <div>{amountTypeIcon}</div>
        <div className="transaction_title">
          <h2>{props.title}</h2>
          <p id="transaction_date"> {category}</p>
        </div>
      </div>

      <div className="transaction_amount">
        <p style={style_amount}>{amount}</p>
        <p id="transaction_date"> {props.date}</p>
      </div>
    </>
  );
}
