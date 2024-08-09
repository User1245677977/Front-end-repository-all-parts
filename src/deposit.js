//deposit.js

import React, { useContext, useState } from "react";
import { UserContext, Card } from "./context";

export function Deposit() {
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState('');
  const [transactionType, setTransactionType] = useState('deposit');
  const ctx = useContext(UserContext);

  function validate(field, label) {
    if (!field) {
      setStatus(`Error: ${label}`);
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    return true;
  }

  function handleTransaction() {
    if (!validate(amount, 'amount')) return;

    const numAmount = parseFloat(amount);
    if (isNaN(numAmount)) {
      setStatus('Error: Enter a valid number');
      setTimeout(() => setStatus(''), 3000);
      return;
    }

    if (numAmount <= 0) {
      setStatus('Error: Enter a positive number');
      setTimeout(() => setStatus(''), 3000);
      return;
    }

    if (transactionType === 'deposit') {
      ctx.users[0].balance += numAmount;
      setStatus(`Deposit successful! New balance is ${ctx.users[0].balance.toFixed(2)}`);
    } else if (transactionType === 'withdraw') {
      if (numAmount > ctx.users[0].balance) {
        setStatus('Error: Insufficient funds');
        setTimeout(() => setStatus(''), 3000);
        return;
      }
      ctx.users[0].balance -= numAmount;
      setStatus(`Withdrawal successful! New balance is ${ctx.users[0].balance.toFixed(2)}`);
    }

    setAmount('');
  }

  return (
    <Card
      bgcolor="primary"
      header="Deposit/Withdraw"
      status={status}
      body={
        <>
          <div>
            <label>
              <input
                type="radio"
                value="deposit"
                checked={transactionType === 'deposit'}
                onChange={() => setTransactionType('deposit')}
              />
              Deposit
            </label>
            <label>
              <input
                type="radio"
                value="withdraw"
                checked={transactionType === 'withdraw'}
                onChange={() => setTransactionType('withdraw')}
              />
              Withdraw
            </label>
          </div>
          <br />
          Amount<br />
          <input
            type="number"
            className="form-control"
            id="amount"
            placeholder="Enter amount"
            value={amount}
            onChange={e => setAmount(e.currentTarget.value)}
          /><br />
          <button type="submit" className="btn btn-light" onClick={handleTransaction}>
            {transactionType.charAt(0).toUpperCase() + transactionType.slice(1)}
          </button>
        </>
      }
    />
  );
}

export default Deposit;
