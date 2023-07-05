import React, { useState,useEffect } from 'react';
import { SlWallet } from 'react-icons/sl';
import './Wallet.css';


export default function Wallet(props) {
  // const [isPressed, setIsPressed] = useState(false);

  const handleClick = (name, amount,color) => {
   
    console.log( name, amount,color);
    const selectedWallet={
      name:name,
      amount:amount,
      color:color,
      value:name
    }
    localStorage.setItem('selectedWallet', JSON.stringify(selectedWallet))
  
  };


  const icon_color = {
    backgroundColor: props.color,
  };
  return (
    
   
      <div className="wallet"  onClick={() => handleClick(props.name,props.amount,props.color)} >
        <div className="box_img" style={icon_color}>
          <SlWallet className="react-icons" />
        </div>
        <div className="wallet_details">
          <p className="wallet_title">{props.name}</p>

          {Number(props.amount) > 0 ? (
            <p className="wallet_amount">{props.amount} RON</p>
          ) : (
            <p className="wallet_amount">0 RON</p>
          )}
        </div>
      </div>
 
  );
}
