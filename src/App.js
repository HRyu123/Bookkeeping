import "./App.css";
import React, { useState } from "react";
import NewExpenseModule from "./component/NewExpenseModule";
import Entries from "./component/Entries";

const App = () => {
  const initialEntries = JSON.parse(localStorage.getItem("expense"));
  const [entries, setEntries] = useState(initialEntries);

  return (
    <div>
      <NewExpenseModule entries={entries} setEntries={setEntries} />
      <Entries entries={entries} />
    </div>
  );
};

export default App;
