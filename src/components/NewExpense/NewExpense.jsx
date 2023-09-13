import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  function onGetExponse(exponse) {
    props.onSetExponse(exponse);
    setIsEditing(false)
  }

  function startEditing(){
    setIsEditing(true)
  }

  function stopEditing(){
    setIsEditing(false)
  }

  return <div className="new-expense">
    {!isEditing && <button onClick={startEditing}>Add New Expense</button>}
    {isEditing && <ExpenseForm onCancel={stopEditing} onSetExponse={onGetExponse} />}
  </div>;
};

export default NewExpense;
