import "./appoint.css";
import React, { useState } from "react";

function Appoint() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const holidays = [new Date(2024, 0, 1), new Date(2024, 11, 25)];

  const generateCalendar = () => {
    const month = selectedDate.getMonth();
    const year = selectedDate.getFullYear();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="day empty"></div>);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(
        <div
          key={i}
          className={`day ${isHoliday(year, month, i) ? "holiday" : ""}`}
          onClick={() => handleDayClick(year, month, i)}
        >
          {i}
        </div>
      );
    }

    return days;
  };

  const isHoliday = (year, month, day) => {
    return holidays.some(
      (holiday) =>
        holiday.getFullYear() === year &&
        holiday.getMonth() === month &&
        holiday.getDate() === day
    );
  };

  const handleDayClick = (year, month, day) => {
    alert(`Siz ${year}-${month + 1}-${day} kuni bosdingiz.`);
  };

  const changeMonth = (increment) => {
    setSelectedDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() + increment);
      return newDate;
    });
  };
  return (
    <div>
      <div className="calendar-container">
        <div className="calendar-header">
          <button
            style={{
              background: "black",
              color: "white",
              border: "0px",
              width: "70px",
            }}
            onClick={() => changeMonth(-1)}
          >
            previous
          </button>
          <h2>
            {selectedDate.toLocaleString("default", { month: "long" })}{" "}
            {selectedDate.getFullYear()}
          </h2>
          <button
            style={{
              background: "black",
              color: "white",
              border: "0px",
              width: "70px",
            }}
            onClick={() => changeMonth(1)}
          >
            next
          </button>
        </div>
        <div className="calendar-grid">{generateCalendar()}</div>
      </div>
    </div>
  );
}

export default Appoint;
