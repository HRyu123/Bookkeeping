import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="title">
        <h2>My Expenses</h2>
      </div>
      <div className="links">
        <Link className="tab" to="expenses">Expenses</Link>
        <Link className="tab" to="new-expense">Add New Expense</Link>
      </div>
    </div>
  );
};

export default Header;