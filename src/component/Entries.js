import React, { useState } from "react";
import "./Entries.css";
import Entry from "./Entry";
import YearFilter from "./YearFilter";

const Entries = ({ entries }) => {
  const [currentYear, setCurrentYear] = useState("all");

  const selectYear = (year) => {
    setCurrentYear(year);
  };

  const filteredEntries = (filter) =>
    filter === "all"
      ? entries
      : entries.filter((entry) => entry.date.split("-")[0] === currentYear);

  return (
    <div className="expense">
      <YearFilter selectYear={selectYear} />
      {filteredEntries(currentYear).length > 0 ? (
        filteredEntries(currentYear).map((entry) => (
          <Entry key={entry.desc} props={entry} />
        ))
      ) : (
        <h2>No Expense Item Found</h2>
      )}
    </div>
  );
};

export default Entries;
