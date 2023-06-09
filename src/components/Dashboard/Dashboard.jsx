import React, { useState, useEffect } from 'react';
import { AddTransaction, Toast, Transactions } from '..';
import { Modal } from '../common/Modal';
import ListOverview from '../ListOverview/ListOverview';
import './Dashboard.css';
import Filter from '../Filter/Filter';
import { displayToast } from '../common/Toast/Toast';

let inflowAmount = 0;
let outflowAmount = 0;

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [transactionList, setTransactionList] = useState([]);
  const [filteredTransactionList, setFilteredTransactionList] = useState([]);
  const [inflow, setInflow] = useState(0);
  const [outflow, setOutflow] = useState(0);

  /*Calculate total of incomes or expenses in the same time adding a new transaction*/
  function handlerSetList(transaction) {
    transaction.amount_type === 'income'
      ? (inflowAmount += Number(transaction.amount))
      : (outflowAmount += Number(transaction.amount));
    setTransactionList([transaction, ...transactionList]);
  }

  /*Filter transactions list by category type.
If there is no transaction with the selected category then a pop up will show up. */
  let filteredTransaction = [];

  function handleChange(slectedCategory) {
    if (slectedCategory !== 'none') {
      filteredTransaction = transactionList.filter(
        transaction => transaction.category_type === slectedCategory
      );
      localStorage.setItem('filterTransactionList', JSON.stringify(filteredTransaction));
      setFilteredTransactionList(filteredTransaction);

      if (filteredTransaction.length < 1) {
        displayToast(document.getElementById('toast'));
      }
    } else {
      localStorage.setItem('filterTransactionList', JSON.stringify(transactionList));
      setFilteredTransactionList(transactionList);
    }
  }

  /* DELETE transaction items FROM transactions list in local storage*/
  function deleteTransaction(slectedTransaction) {
    const deleteTransactionItem = transactionList.filter(
      transaction => transaction.title !== slectedTransaction
    );
    localStorage.setItem('transactionList', JSON.stringify(deleteTransactionItem));
    setTransactionList(deleteTransactionItem);
  }

  // /* EDIT transaction items FROM transactions list in local storage*/
  // function editTransaction(slectedTransaction) {
  //   console.log("🚀 ~ file: Dashboard.jsx:59 ~ editTransaction ~ slectedTransaction:", slectedTransaction)
  //   // const editTransactionItem = transactionList.filter(
  //   //   transaction => transaction.title === slectedTransaction
  //   // );
  //   setIsOpen(true);
  // //  return editTransactionItem
  // }

  /* GET transaction items FROM list in local storage*/
  useEffect(() => {
    const transactions = JSON.parse(localStorage.getItem('transactionList'));

    if (transactions) {
      transactions.forEach(element => {
        element.amount_type === 'income'
          ? setInflow((inflowAmount += Number(element.amount)))
          : setOutflow((outflowAmount += Number(element.amount)));
      });
      setTransactionList(transactions);
    }
  }, []);

  /* SET transaction items IN list in local storage*/
  useEffect(() => {
    if (transactionList) {
      localStorage.setItem('transactionList', JSON.stringify(transactionList));
    }

    transactionList.forEach(element => {
      element.amount_type === 'income' ? setInflow(inflowAmount) : setOutflow(outflowAmount);
    });
  }, [transactionList]);

  return (
    <div className="dashboard_side">
      <div className="dashboard_header">
        <div style={{ justifyContent: 'flex-start' }}>
          <h1>Hi there!</h1>
          <p>How much did you spend today?</p>
        </div>

        <button
          children=" + Log transaction"
          id="log_transaction"
          onClick={() => {
            setIsOpen(true);
          }}
        ></button>
      </div>
      <div className="list_overview">
        <ListOverview inflow={inflow} outflow={outflow} wallet={transactionList} />
      </div>
      <hr />

      <Toast children={'No transactions within this category'} />

      <Filter
        selectedCategory={filteredTransactionList.category_type}
        onChangeCategoryFilter={handleChange}
      ></Filter>

      {filteredTransactionList && (
        <div className="list_expenses">
          <Transactions
            transactionList={transactionList}
            filteredTransactionList={filteredTransactionList}
            deleteTransaction={deleteTransaction}
           // editTransaction={editTransaction}
          />
        </div>
      )}
      {/* A new transaction will be add here */}
      <Modal open={isOpen} onClose={() => setIsOpen(!isOpen)} title="Add new transaction">
        <AddTransaction 
        handlerSetList={handlerSetList} 
        handlerVisibility={setIsOpen}
        // editTransaction={editTransaction}
         />
      </Modal>
    </div>
  );
}
