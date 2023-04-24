import React from 'react';
import { Card } from '../../common/Card';
import './Transactions.css';
import TransactionItem from './TransactionItem/TransactionItem';

export default function Transactions(props) {
  const { transactionList } = props;

  return (
    <React.Fragment>
      <hr />
      <div className="expenses_history">
        {transactionList.map((transaction, index) => {
          return (
            <Card className="item_card" key={index}>
              <TransactionItem
                key={index}
                category_type={transaction.category_type}
                title={transaction.title}
                date={transaction.date}
                amount={transaction.amount}
                amount_type={transaction.amount_type}
                color={transaction.color}
              />
            </Card>
          );
        })}
      </div>
    </React.Fragment>
  );
}
