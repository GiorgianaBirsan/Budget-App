import React from 'react';
import './TransactionItem.css';
import { HiOutlineArrowDownTray, HiOutlineArrowUpTray } from 'react-icons/hi2';
import { rgb} from 'polished';

let style_amount = {};
let amount = '';
let amountTypeIcon = {};
let style_icon = {};
let category = '';
let title = '';
let wallet = '';
let pay_method = '';

export default function TransactionItem(props) {
  if (props.amount_type === 'income') {
    style_icon = {
      // backgroundColor: rgba(68, 176, 35, 0.1),
      fontSize: 'larger',
      color: rgb(68, 176, 35),
      padding: '10px',
      borderRadius: '10px',
    };
    style_amount = {
      color: rgb(68, 176, 35),
      margin: '0px',
    };
    amount = <b>{`+ ${props.amount} RON`}</b>;
    amountTypeIcon = <HiOutlineArrowDownTray style={style_icon} />;
  } else {
    style_icon = {
     // backgroundColor: rgba(235, 12, 12, 1),
     fontSize: 'larger',
      // color: rgb(255, 0, 0),
      color: "red",
      padding: '10px',
      borderRadius: '10px',
      weight:'500',
    };
    style_amount = {
      color: rgb(255, 0, 55),
      margin: '0px',
    };
    amount = <b>{`- ${props.amount} RON`}</b>;
    amountTypeIcon = <HiOutlineArrowUpTray style={style_icon} />;
  }

  const category_mark = {
    width: '10px',
    height: '70px',
    backgroundColor: props.color,
    borderRadius: '100px 0px 0px 100px',
    marginRight: '30px',
  };

  if (props.category_type !== undefined) {
    title = props.title.charAt(0).toUpperCase() + props.title.slice(1);
    wallet = props.wallet.charAt(0).toUpperCase() + props.wallet.slice(1);
    pay_method = props.pay_method.charAt(0).toUpperCase() + props.pay_method.slice(1);
    category = props.category_type.charAt(0).toUpperCase() + props.category_type.slice(1);
  }

  return (
    <>
      <div className="transaction_head">
        <div style={category_mark}></div>

        <div>{amountTypeIcon}</div>
        <div className="transaction_title">
          <h1>{title}</h1>
      
           <p id="transaction_wallet">{wallet}</p>
        </div>
      </div>

      <div className="transaction_details">
        <div>
          <p id="transaction_pay_method">{pay_method}</p>
            <p id="transaction_category"> {category}</p>
        </div>
        <div className="transaction_amount">
          <p style={style_amount}>{amount}</p>
          <p id="transaction_date"> {props.date}</p>
        </div>
      </div>
    </>
  );
}
