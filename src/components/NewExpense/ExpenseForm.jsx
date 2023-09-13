import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [amount, setAmount] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleAmountChange(e) {
    setAmount(e.target.value);
  }

  function handleDateChange(e) {
    setDate(e.target.value);
  }

  function formSubmit(e) {
    e.preventDefault();

    const newExpense = {
      id: Date.now(),
      title: title,
      amount: +amount,
      date: new Date(date),
    };

    props.onSetExponse(newExpense);
    setAmount("");
    setDate("");
    setTitle("");
  }

  return (
    <form onSubmit={formSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input value={title} onChange={handleTitleChange} type="text" />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={amount}
            onChange={handleAmountChange}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={date}
            onChange={handleDateChange}
            type="date"
            min="2019-01-01"
            max="2023-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add expense</button>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
