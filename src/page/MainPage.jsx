import React, { useState } from 'react';
import Dashboard from '../components/Dashboard/Dashboard';
import './MainPage.css';
import { Wallets } from '../components';
import { Categories } from '../components';
import WalletContext from '../components/utils/wallet-context';

export default function MainPage() {
  const [contextData, setContextData] = useState({
    name: '-',
    amount: 0,
    color: '#fff',
  });
  

  const updateContextData = (name, amount, color) => {
    setContextData({
      amount: amount,
      name: name,
      color: color,
    });
  };
 

  return (
    <div className="main_container">
      <div className="navigation_side">
        <h1 className="logo_text">Budget</h1>
        <Wallets updateContextData={updateContextData} />
        <hr />
        <Categories />
      </div>

      <WalletContext.Provider value={{ ...contextData, updateContextData }}>
        <Dashboard />
      </WalletContext.Provider>
    </div>
  );
}
