import React from "react";
import "./DateWidget.css";

const DateWidget = ({ date }) => {
  const [month, year, day] = date.split("-");

  return (
    <div className="date-widget">
      <div className="month">{month}</div>
      <div className="year">{year}</div>
      <div className="day">{day}</div>
    </div>
  );
};

export default DateWidget;
