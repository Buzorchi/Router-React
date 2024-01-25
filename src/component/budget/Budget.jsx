import React, { useState } from 'react';
import AddForm from './AddForm';
import TransactionList from './TransactionList';



const Budget = () => {
    const [transactions, setTransactions] = useState([]);

    const addTransaction = (newTransaction) => {
      setTransactions([...transactions, {...newTransaction, id: Date.now()}]);
    };
  
    return (
      <div className="App">
        <h2>Personal Budget Dashboard</h2>
        <AddForm onAddTransaction={addTransaction} />
        <TransactionList transactions={transactions} />
      </div>
    );
}

export default Budget
