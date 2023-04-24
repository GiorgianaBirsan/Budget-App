import React, { useState, useEffect } from 'react';
import './Wallets.css';
import { Button } from '../../common/Button';
import { Modal } from '../../common/Modal';
import AddWallet from '../AddWallet/AddWallet';
import Wallet from './WalletItem/Wallet';

export default function Wallets() {
  const [isOpen, setIsOpen] = useState(false);
  const [listWallets, setListWallets] = useState([]);

  const addWalletHandler = wallet => {
    setListWallets([wallet, ...listWallets]);
  };

  //GET / SET WALLET ITEMS FROM/IN LIST FROM LOCAL STORAGE
  useEffect(() => {
    const wallets = JSON.parse(localStorage.getItem('listWallets'));
    setListWallets(wallets);
  }, []);

  useEffect(() => {
    if (listWallets) {
      localStorage.setItem('listWallets', JSON.stringify(listWallets));
    }
    // listWallets.forEach((element) => {});
  }, [listWallets]);

  return (
    <>
      <div className="wallet_container_header">
        <h1>Wallets</h1>
        <Button
          children="+"
          onClick={() => {
            setIsOpen(true);
          }}
        ></Button>
      </div>

      {/* NEW WALLET ADD FORM */}
      <Modal open={isOpen} onClose={() => setIsOpen(!isOpen)} title="Add new wallet">
        <AddWallet addHandler={addWalletHandler} handlerVisibility={setIsOpen} />
      </Modal>

      {/* LISTING WALLETS FROM LIST */}
      <div className="wallets_collection">
        {listWallets.length === 0 ? (
          <p>
            <i>Nothing here yet!</i>
          </p>
        ) : (
          listWallets.map((wallet, index) => {
            return (
              <Wallet key={index} name={wallet.name} amount={wallet.amount} color={wallet.color} />
            );
          })
        )}
      </div>
    </>
  );
}
