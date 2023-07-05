import React, { useContext } from 'react';
import { Card } from '../../common/Card';
import './Transactions.css';
import TransactionItem from './TransactionItem/TransactionItem';
import WalletContext from '../../utils/wallet-context';
import { Toast } from '../../common/Toast';
import { displayToast } from '../../common/Toast/Toast';

export default function Transactions(props) {
  const { transactionList } = props;
  const { filteredTransactionList } = props;
  let transactionsByWallet = [];
  let transactionsByWalletAndCategory = [];

  const ctxx = useContext(WalletContext);

  /* Filtering the list of existing transactions */
  let transactions = transactionList;

  if (ctxx.name !== '-' || ctxx.name !== undefined || ctxx.name !== null) {
    transactionsByWallet = transactionList.filter(
      transaction => transaction.wallet === ctxx.name.toLowerCase()
    );

    if (transactionsByWallet.length > 0 && filteredTransactionList.length < 1) {
      transactions = transactionsByWallet;
    }
  }

  if (transactionsByWallet.length > 0 && filteredTransactionList.length > 0) {
    transactionsByWalletAndCategory = filteredTransactionList.filter(
      transaction => transaction.wallet === ctxx.name.toLowerCase()
    );

    if (transactionsByWalletAndCategory.length > 0) {
      transactions = transactionsByWalletAndCategory;
    } else {
      displayToast(document.getElementById('toast'));
    }
  }

  if (
    filteredTransactionList.length > 0 &&
    transactionsByWalletAndCategory.length < 1 &&
    ctxx.name === '-'
  ) {
    transactions = filteredTransactionList;
  }

  if (ctxx.name === '-' && filteredTransactionList.length < 1) {
    transactions = transactionList;
  }

  return (
    <React.Fragment>
      <Toast children={'No transactions within this category'} />
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
                deleteTransaction={props.deleteTransaction}
               //  editTransaction={props.editTransaction}
              />
            </Card>
          );
        })}
      </div>
    </React.Fragment>
  );
}
