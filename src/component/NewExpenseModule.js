import React from "react";
import "./NewExpenseModule.css";

const NewExpenseModule = () => {
  return (
    <div className="new-expense">
      <form>
        <div className="new-expense__control">
          <label htmlFor="desc">description</label>
          <input type="text" id="desc" />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">amount</label>
          <input type="number" id="amount" />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">date</label>
          <input type="date" id="date" />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default NewExpenseModule;
