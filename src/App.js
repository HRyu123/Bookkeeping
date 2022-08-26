import "./App.css";
import React, { useState } from "react";
import Entry from "./component/Entry";
import NewExpenseModule from "./component/NewExpenseModule";

const App = () => {
  const initialEntries = JSON.parse(localStorage.getItem("expense"));
  const [entries, setEntries] = useState(initialEntries);

  return (
    <div>
      <NewExpenseModule entries={entries} setEntries={setEntries} />
      <div className="expense">
        {entries.map((entry, index) => (
          <Entry key={index} props={entry} />
        ))}
      </div>
    </div>
  );
};

export default App;
