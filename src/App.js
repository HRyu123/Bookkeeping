import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import {set} from "./slice";
import NewExpenseModule from "./component/NewExpenseModule";
import Entries from "./component/Entries";
import "./App.css";
import Header from "./component/Header";

const App = () => {
  const expenses = useSelector((state) => state.expense.value)
  const dispatch = useDispatch()

  useEffect(() => {
    fetch("http://localhost:3004/entries")
      .then((res) => res.json())
      .then((data) => dispatch(set(data.reverse())));
  }, []);

  return (
      <div>
          <BrowserRouter>
            <div>
              <Header />
            </div>
            <Routes>
              <Route index element={<Entries entries={expenses} />} />
              <Route path="expenses" element={<Entries entries={expenses} />} />
              <Route path="new-expense" element={<NewExpenseModule />} />
            </Routes>
          </BrowserRouter>
      </div>
  );
};

export default App;
