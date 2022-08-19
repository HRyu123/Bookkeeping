import React from "react";
import DateWidget from "./DateWidget";
import "./Entry.css";

const Entry = ({ props }) => {
  const { date, desc, price } = props;

  return (
    <div className="entry">
      <DateWidget date={date} />
      <div className="description">
        <h2>{desc}</h2>
      </div>
      <div className="price">{`$${price}`}</div>
    </div>
  );
};

export default Entry;
