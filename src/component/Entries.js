import React from "react";
import "./Entries.css";
import Entry from "./Entry";

const Entries = ({ entries }) => {
  return (
    <div className="expense">
      {entries.map((entry, index) => (
        <Entry key={index} props={entry} />
      ))}
    </div>
  );
};

export default Entries;
