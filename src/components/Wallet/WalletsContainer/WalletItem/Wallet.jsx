import React from 'react';
import { SlWallet } from 'react-icons/sl';
import './Wallet.css';
import { WalletContext } from '../../../../hooks/wallet-context';

export default function Wallet(props) {
  const icon_color = {
    backgroundColor: props.color,
  };
  return (
    <WalletContext.Provider value={{}}>
      <div className="wallet">
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
    </WalletContext.Provider>
  );
}
