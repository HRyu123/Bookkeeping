import "./App.css";
import React from "react";
import Entry from "./component/Entry";

const entries = [
  { date: "December-01-2011", desc: "House Insurance", price: "700" },
  { date: "January-01-2012", desc: "New car", price: "3000" },
  { date: "November-06-2013", desc: "New TV", price: "350" },
];

const App = () => {
  return (
    <div className="expense">
      {entries.map((entry) => (
        <Entry props={entry} />
      ))}
    </div>
  );
};

export default App;
