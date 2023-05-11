import React, { useState } from 'react';
import Dashboard from '../components/Dashboard/Dashboard';
import Navigation from '../components/Navigation/Navigation';
import './MainPage.css';
import WalletContext from '../utils/wallet-context';
import { Wallets } from '../components';
import {Categories} from '../components';
import { DefaultContext } from 'react-icons/lib';
  const selectedwallet = JSON.parse(localStorage.getItem('selectedWallet'));

export default function MainPage() {
  // const [isPressed, setIsPressed] = useState(false);


  return (
    <div className="main_container">
      {/* <Navigation /> */}
     <div className="navigation_side">
      <h1 className="logo_text">Budget</h1>
      <Wallets />
      <hr />
      <Categories />
    </div>
      <WalletContext.Provider
        value={{isPressed: true,
  amount: selectedwallet.amount,
  name: selectedwallet.name,
  color: selectedwallet.color,}}
      >
        <Dashboard />
      </WalletContext.Provider>
    </div>
  );
}
