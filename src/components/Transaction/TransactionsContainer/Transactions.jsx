import React, { useState } from 'react';
import { Card } from '../../common/Card';
import './Transactions.css';
import TransactionItem from './TransactionItem/TransactionItem';
import { Dropdown } from '../../common/Dropdown';

//  const categories = JSON.parse(localStorage.getItem('listCategories'));

export default function Transactions(props) {
  const { transactionList } = props;

 const categories = JSON.parse(localStorage.getItem('listCategories'));

  const categoryFilterOptions = categories.map(({ title, value }) => ({
    label: title,
    value: value,
  }));

  return (
    <React.Fragment>
      <hr />
      <div>
        <p>Filter by </p>
        <Dropdown options={categoryFilterOptions} />
      </div>

      <h3>Transactions history</h3>

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
