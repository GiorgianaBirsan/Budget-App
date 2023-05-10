import React, { useState } from 'react';
import './AddTransaction.css';

/*Importing default values and oprions for form inputs */
import { amountType, new_transaction_initial_values, payMethod } from '../../../utils/exports';

export default function AddTransaction(props) {
  const [transaction, setTransaction] = useState(new_transaction_initial_values);

  /* Automate populate the dropdown menu with existing loicalSorage lists*/
  const wallets = JSON.parse(localStorage.getItem('listWallets'));
  const categories = JSON.parse(localStorage.getItem('listCategories'));

  const inputHandler = event => {
    const { name, value } = event.target;

    /*Select the color from each defined/selected category to set the color
     of the left mark of each transaction block item*/
    categories.find(cat =>
      cat.value === transaction.category_type ? (transaction.color = cat.color) : null
    );
    setTransaction({ ...transaction, [name]: value });
  };

  /* Formating date function as string like this "DD.MM.YYYY" */
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
      <div className="wallet-type">
        <label>Wallet</label>
        <select
          id="wallet_type"
          name="wallet"
          value={transaction.wallet}
          onChange={inputHandler}
          required
        >
          <option disabled value="">
            -
          </option>
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
          <option disabled value="">
            -
          </option>
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
          maxLength={100}
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
          name="pay_method"
          id="pay_method"
          value={transaction.pay_method}
          onChange={inputHandler}
          required
        >
          <option disabled value="">
            -
          </option>
          {payMethod.map((type, index) => {
            return (
              <option key={index} value={type.value}>
                {type.label}
              </option>
            );
          })}
        </select>
        <select
          name="amount_type"
          id="amount_type"
          value={transaction.amount_type}
          onChange={inputHandler}
          required
        >
          <option disabled value="">
            -
          </option>
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
