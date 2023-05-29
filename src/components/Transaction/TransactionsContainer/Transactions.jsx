import React, { useContext } from 'react';
import { Card } from '../../common/Card';
import './Transactions.css';
import TransactionItem from './TransactionItem/TransactionItem';
import WalletContext from '../../utils/wallet-context';

export default function Transactions(props) {
  const { transactionList } = props;
  const { filteredTransactionList } = props;

  const ctxx = useContext(WalletContext);


  /* Filtering the list of existing transactions */
  let transactions = transactionList;

  if (filteredTransactionList.length > 0) {
    transactions = filteredTransactionList;
  }

  if (ctxx.name !== '-' || ctxx.name !== undefined || ctxx.name !== null) {
    const transactionsByWallet = transactionList.filter(
      transaction => transaction.wallet === ctxx.name.toLowerCase()
    );
    if (transactionsByWallet.length > 0) {
      transactions = transactionsByWallet;
    }
  }

  return (
    <React.Fragment>
      <h3>Transactions history</h3>
     

      <div className="expenses_history">
        {transactions.map((transaction, index) => {
          return (
            <Card key={index} className="transaction_card">
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
