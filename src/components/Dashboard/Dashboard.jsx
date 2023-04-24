import React, { useState, useEffect } from 'react';
import { AddTransaction, Transactions } from '..';
import { Modal } from '../common/Modal';
import ListOverview from '../ListOverview/ListOverview';
import './Dashboard.css';

let inflowAmount = 0;
let outflowAmount = 0;

export default function Dashboard(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [transactionList, setTransactionList] = useState([]);
  const [inflow, setInflow] = useState(0);
  const [outflow, setOutflow] = useState(0);

  function handlerSetList(transaction) {
    transaction.amount_type === 'income'
      ? (inflowAmount += Number(transaction.amount))
      : (outflowAmount += Number(transaction.amount));
    setTransactionList([transaction, ...transactionList]);
  }

  //GET / SET TRANSACTION ITEMS FROM/IN LIST FROM LOCAL STORAGE
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

  useEffect(() => {
    if (transactionList?.length) {
      localStorage.setItem('transactionList', JSON.stringify(transactionList));
    }
    transactionList.forEach(element => {
      element.amount_type === 'income' ? setInflow(inflowAmount) : setOutflow(outflowAmount);
    });
  }, [transactionList]);

  return (
    <div className="dashboard_side">
      <div className="dashboard_header">
        <div>
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
        <ListOverview inflow={inflow} outflow={outflow} />
      </div>

      <div className="list_expenses">
        <Transactions transactionList={transactionList} />
      </div>

      {/* NEW TRANSACTION FORM */}
      <Modal open={isOpen} onClose={() => setIsOpen(!isOpen)} title="Add new transaction">
        <AddTransaction handlerSetList={handlerSetList} handlerVisibility={setIsOpen} />
      </Modal>
    </div>
  );
}
