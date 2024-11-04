import React, { useState, useEffect } from 'react';
import './appoint.css'; 

const Appoint = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventText, setEventText] = useState('');

  useEffect(() => {
    const storedEvents = localStorage.getItem('events');
    if (storedEvents) {
      setEvents(JSON.parse(storedEvents));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setEventText(events[date] || '');
  };

  const handleSaveEvent = () => {
    if (selectedDate) {
      setEvents((prev) => ({
        ...prev,
        [selectedDate]: eventText,
      }));
      setEventText('');
      setSelectedDate(null);
    }
  };

  const changeMonth = (direction) => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + direction, 1);
    setCurrentDate(newDate);
  };

  const renderDays = () => {
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const startDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    const days = [];

    for (let i = 0; i < startDay; i++) {
      days.push(<div key={`empty-${i}`} className="day empty"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dateString = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${day}`;
      days.push(
        <div
          key={day}
          className={`day ${events[dateString] ? 'has-event' : ''}`}
          onClick={() => handleDateClick(dateString)}
        >
          {day}
          {events[dateString] && <div className="event">{events[dateString]}</div>}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="calendar">
      <header>
        <button onClick={() => changeMonth(-1)}>&lt; Previous</button>
        <h2>{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
        <button onClick={() => changeMonth(1)}>Next &gt;</button>
      </header>
      <div className="days">
        {renderDays()}
      </div>
      {selectedDate && (
        <div className="event-input">
          <h3>Event for {selectedDate}</h3> <br />
          <input className='calendarinput'
            type="text"
            value={eventText}
            onChange={(e) => setEventText(e.target.value)}
            placeholder="Add event"
          /> <br /><br />
          <button className='but' onClick={handleSaveEvent}>Save Event</button>
        </div>
      )} 
    </div>
  );
};

export default Appoint;
