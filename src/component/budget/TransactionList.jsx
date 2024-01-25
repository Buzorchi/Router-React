import React from 'react'

const TransactionList = ({transactions}) => {
    return (
        <ul>
          {transactions.map((transaction) => (
            <li key={transaction.id}>
              {transaction.title} - ${transaction.amount}
            </li>
          ))}
        </ul>
      );
    }

export default TransactionList


