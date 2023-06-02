import React from 'react';
import { SlWallet } from 'react-icons/sl';
import './Wallet.css';

export default function Wallet(props) {

  return (
    <div className="wallet" onClick={() => props.handleClick(props.name, props.amount, props.color)}>
      <div className="box_img" style={{backgroundColor:props.color}}>
        <SlWallet className="react-icons" />
      </div>
      <div className="wallet_details">
        <p className="wallet_title">{props.name}</p>
       {/* <p className="wallet_amount">{props.amount} RON</p> */}
      </div>
    </div>
  );
}
