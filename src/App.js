import "./App.css";
import React from "react";
import Entry from "./component/Entry";

const entries = [
  { id: 1, date: "December-01-2011", desc: "House Insurance", price: "700" },
  { id: 2, date: "January-01-2012", desc: "New car", price: "3000" },
  { id: 3, date: "November-06-2013", desc: "New TV", price: "350" },
];

const App = () => {
  return (
    <div className="expense">
      {entries.map((entry) => (
        <Entry key={entry.id} props={entry} />
      ))}
    </div>
  );
};

export default App;
