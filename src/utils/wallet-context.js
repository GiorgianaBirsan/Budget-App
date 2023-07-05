import React from 'react';

// export const WalletContext = React.createContext({
//    isPressed: isPressed, amount: props.amount, name: props.name, color: props.color }
// });
 let WalletContext ={}
const selectedwallet = JSON.parse(localStorage.getItem('selectedWallet'));
if (selectedwallet) {
   WalletContext = React.createContext({
    isPressed: true,
    amount: selectedwallet.amount,
    name: selectedwallet.name,
    color: selectedwallet.color,
  });
}
export default WalletContext;
