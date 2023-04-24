import React, { useState, useEffect } from 'react';
import './AddTransaction.css';

const amountType = [
  { label: '-', value: '' },
  { label: 'Income', value: 'income' },
  { label: 'Expense', value: 'expense' },
];

const initial_values = {
  title: '',
  date: '',
  amount: '',
  category_type: '',
  amount_type: '',
  color: '',
  wallet: '',
};

export default function AddTransaction(props) {
  const [transaction, setTransaction] = useState(initial_values);

  const wallets = JSON.parse(localStorage.getItem('listWallets'));
  const categories = JSON.parse(localStorage.getItem('listCategories'));

  const inputHandler = event => {
    const { name, value } = event.target;

    //SELECT THE RIGHT COLOR FROM EACH DEFINED/SELECTED CATEGORY, TO SET THE COLOR OF LEFT DIV-MARK OF TRANSACTION ITEMS
    categories.find(cat =>
      cat.value === transaction.category_type ? (transaction.color = cat.color) : null
    );
    setTransaction({ ...transaction, [name]: value });
  };

  //FORMATING DATE STRING DD.MM.YYYY
  function formatDate(date) {
    const formatedDate = date.split('-').reverse().join('.');
    transaction.date = formatedDate;
  }

  const onSubmitHandler = e => {
    e.preventDefault();
    formatDate(transaction.date);
    props.handlerSetList(transaction);
    props.handlerVisibility(false);
  };

  return (
    <form className="form" onSubmit={onSubmitHandler}>
      <div className="wallet">
        <label>Wallet</label>
        <select
          id="wallet_type"
          name="wallet"
          value={transaction.wallet}
          onChange={inputHandler}
          required
        >
          {wallets.map((wallet, index) => {
            return (
              <option key={index} value={wallet.value}>
                {wallet.name}
              </option>
            );
          })}
        </select>
      </div>

      <div className="categories">
        <label>Category</label>

        <select
          id="category_type"
          name="category_type"
          value={transaction.category_type}
          onChange={inputHandler}
          required
        >
          {categories.map((category, index) => {
            return (
              <option key={index} value={category.value}>
                {category.title}
              </option>
            );
          })}
        </select>
      </div>

      <div className="title">
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={transaction.title}
          onChange={inputHandler}
          required
        />
      </div>
      <div className="date">
        <label>Date</label>
        <input
          type="date"
          name="date"
          id="date"
          value={transaction.date}
          onChange={inputHandler}
          required
        />
      </div>
      <div className="amount">
        <label>Amount</label>
        <input
          type="number"
          name="amount"
          value={transaction.amount}
          id="amount"
          onChange={inputHandler}
          required
        />
      </div>

      <div className="amount-type">
        <label>Amount type</label>
        <select
          name="amount_type"
          id="amount_type"
          value={transaction.amount_type}
          onChange={inputHandler}
          required
        >
          {amountType.map((type, index) => {
            return (
              <option key={index} value={type.value}>
                {type.label}
              </option>
            );
          })}
        </select>
      </div>

      <button id="save_transaction" className="submit_btn" children="Save" type="submit" />
    </form>
  );
}
