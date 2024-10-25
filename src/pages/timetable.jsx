import "./timetable.css";
import React, { useState, useEffect } from "react";

function timetable() {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const hours = Array.from({ length: 12 }, (_, i) => `${i + 8}:00`);

  const [formData, setFormData] = useState({
    doctor1: { name: "", email: "", date: "" },
    doctor2: { name: "", email: "", date: "" },
    doctor3: { name: "", email: "", date: "" },
  });

  const handleChange = (doctor, field, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [doctor]: { ...prevState[doctor], [field]: value },
    }));
  };

  const handleSubmit = (e, doctor) => {
    e.preventDefault();
    console.log(`Registration for Doctor ${doctor}:`, formData[doctor]);
    alert(
      `You have successfully registered for Doctor ${doctor}'s appointment.`
    );
  };

  const doctors = [
    { id: "doctor1", name: "Dr. Eric Snyder", img: "/public/user7.jpg" },
    { id: "doctor2", name: "Dr. Martha Schmidt", img: "/public/user1.jpg" },
    { id: "doctor3", name: "Dr. Scott Riley", img: "/public/user6.jpg" },
  ];

  return (
    <div>
      <div className="abcont">
        <div>
          <h1 className="wordabout">TIMETABLE</h1> <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <a className="wordhome" href="./Home.jsx">
            HOME
          </a>
          <span className="wordab">Timetable</span>
        </div>
      </div>

      <div>
        <div className="schedule-container">
          <div className="schedule-grid">
            <div className="schedule-days">
              <div className="empty-cell"></div>
              {days.map((day, index) => (
                <div key={index} className="day-cell">
                  {day}
                </div>
              ))}
            </div>

            {hours.map((hour, index) => (
              <div key={index} className="hour-row">
                <div className="hour-cell">{hour}</div>
                {days.map((day, dayIndex) => (
                  <div key={dayIndex} className="time-slot"></div>
                ))}
              </div>
            ))}
          </div>
          <div className="respons1">
            <img className="shki" src="/public/user6.jpg" alt="" />
            <h1 style={{ fontSize: "15px", color: "white" }}>
              Dr. Scott Riley{" "}
            </h1>
            <p style={{ fontSize: "10px", color: "white", padding: "10px" }}>
              MRI Technologist
            </p>
          </div>
          <div className="respons2">
            <img className="shki" src="/public/user8.jpg" alt="" />
            <h1 style={{ fontSize: "15px", color: "white" }}>
              Dr. Jane Fowler
            </h1>
            <p style={{ fontSize: "10px", color: "white", padding: "10px" }}>
              Clinical Laboratory Technologist
            </p>
          </div>

          <div className="respons3">
            <img className="shki" src="/public/user7.jpg" alt="" />
            <h1 style={{ fontSize: "15px", color: "white" }}>
              Dr. Eric Snyder
            </h1>
            <p style={{ fontSize: "10px", color: "white", padding: "10px" }}>
              MRI Technologist
            </p>
          </div>
          <div className="respons4">
            <img className="shki" src="/public/user1.jpg" alt="" />
            <h1 style={{ fontSize: "15px", color: "white" }}>
              Dr. Martha Schmidt
            </h1>
            <p style={{ fontSize: "10px", color: "white", padding: "10px" }}>
              ECG Technician
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="doctor-registration-container">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="doctor-card">
              <img src={doctor.img} alt={doctor.name} className="doctor-img" />
              <div className="doctor-info">
                <h3>{doctor.name}</h3>
                <form onSubmit={(e) => handleSubmit(e, doctor.id)}>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData[doctor.id].name}
                    onChange={(e) =>
                      handleChange(doctor.id, "name", e.target.value)
                    }
                    required
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formData[doctor.id].email}
                    onChange={(e) =>
                      handleChange(doctor.id, "email", e.target.value)
                    }
                    required
                  />
                  <input
                    type="date"
                    value={formData[doctor.id].date}
                    onChange={(e) =>
                      handleChange(doctor.id, "date", e.target.value)
                    }
                    required
                  />
                  <button type="submit">Register</button>
                </form>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default timetable;
