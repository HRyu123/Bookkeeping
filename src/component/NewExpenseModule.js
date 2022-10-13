import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {add} from "../slice";
import "./NewExpenseModule.css";

const NewExpenseModule = () => {
  const initialNewExpense = {
    date: "",
    desc: "",
    price: "",
  };
  const [newExpense, setNewExpense] = useState(initialNewExpense);
  const navigate = useNavigate();
  const dispatch = useDispatch()


  const onInputChange = (field) => (event) => {
    setNewExpense({ ...newExpense, [field]: event.target.value });
  };

  const createNewExpense = () =>
    fetch("http://localhost:3004/entries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newExpense),
    });

  const addNewExpense = () => {
    createNewExpense().then(() => navigate('/expenses'));
    setNewExpense(initialNewExpense);
    dispatch(add(newExpense))
  };

  return (
    <div className="new-expense">
      <div className="form">
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
      </div>
    </div>
  );
};

export default NewExpenseModule;
