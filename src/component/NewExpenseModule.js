import React, { useState } from "react";
import "./NewExpenseModule.css";

const NewExpenseModule = ({ entries, setEntries }) => {
  const initialNewExpense = {
    date: "",
    desc: "",
    price: "",
  };
  const [newExpense, setNewExpense] = useState(initialNewExpense);

  const onInputChange = (field) => (event) => {
    setNewExpense({ ...newExpense, [field]: event.target.value });
  };

  const addNewExpense = () => {
    localStorage.setItem("expense", JSON.stringify([newExpense, ...entries]));
    setEntries([newExpense, ...entries]);
    setNewExpense(initialNewExpense);
  };

  return (
    <div className="new-expense">
      <form>
        <div className="new-expense__control">
          <label htmlFor="desc">description</label>
          <input
            type="text"
            id="desc"
            value={newExpense.desc}
            onChange={onInputChange("desc")}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">amount</label>
          <input
            type="number"
            id="amount"
            value={newExpense.price}
            onChange={onInputChange("price")}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">date</label>
          <input
            type="date"
            id="date"
            value={newExpense.date}
            onChange={onInputChange("date")}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit" onClick={addNewExpense}>
            Add Expense
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewExpenseModule;
