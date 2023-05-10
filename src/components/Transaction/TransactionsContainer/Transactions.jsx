import React from 'react';
import { Card } from '../../common/Card';
import './Transactions.css';
import TransactionItem from './TransactionItem/TransactionItem';

export default function Transactions(props) {
  const { transactionList } = props;
  const { filteredTransactionList } = props;
  let transactions = transactionList;

/* Filtering the list of existing transactions */
     if (filteredTransactionList.length > 0){
    transactions = filteredTransactionList;
  } 


  return (
    <React.Fragment>
      <hr />
      <h3>Transactions history</h3>
      <div className="expenses_history">
        {transactions.map((transaction, index) => {
          return (
            <Card key={index}>
              <TransactionItem
                key={index}
                category_type={transaction.category_type}
                title={transaction.title}
                date={transaction.date}
                amount={transaction.amount}
                amount_type={transaction.amount_type}
                color={transaction.color}
                pay_method={transaction.pay_method}
                wallet={transaction.wallet}
              />
            </Card>
          );
        })}
      </div>
    </React.Fragment>
  );
}
