import React from 'react';
import { Wallets } from '../Wallet/WalletsContainer';
import { Categories } from '../Category/CategoriesContainer';
import './Navigation.css';

export default function Navigation() {
  return (
    <div className="navigation_side">
      <h1 className="logo_text">Budget</h1>
      <Wallets />
      <hr />
      <Categories />
    </div>
  );
}
