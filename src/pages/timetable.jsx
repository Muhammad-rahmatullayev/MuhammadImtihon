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
  const [doctorss] = useState([
    { name: 'Dr.Jhon Adam', workHours: ['Mon: 9am - 5pm', 'Tue: 9am - 5pm', 'Wed: 9am - 5pm', 'Thu: 9am - 5pm', 'Fri: 9am - 5pm'], offDays: ['Sat', 'Sun'] },
    { name: 'Dr.Sonya Blaze', workHours: ['Mon: 10am - 6pm', 'Wed: 10am - 6pm', 'Fri: 10am - 6pm'], offDays: ['Tue', 'Thu', 'Sat', 'Sun'] },
    { name: 'Dr.Jhon Toms', workHours: ['Mon: 8am - 4pm', 'Tue: 8am - 4pm', 'Fri: 8am - 4pm'], offDays: ['Wed', 'Thu', 'Sat', 'Sun'] },
    { name: 'Dr.Lola Fae', workHours: ['Tue: 9am - 5pm', 'Thu: 9am - 5pm', 'Fri: 9am - 5pm'], offDays: ['Mon', 'Wed', 'Sat', 'Sun'] },
    { name: 'Dr.Samantha Larusso', workHours: ['Mon: 11am - 7pm', 'Tue: 11am - 7pm', 'Thu: 11am - 7pm'], offDays: ['Wed', 'Fri', 'Sat', 'Sun'] },
  ]);

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
<br /><br /><br /><br /><br />
      <div className="doctor-schedule">
      <h2>Doctors' Working Hours</h2>
      <table>
        <thead>
          <tr>
            <th>Doctors</th>
            <th>Working Hours</th>
            <th>Days Off</th>
          </tr>
        </thead>
        <tbody>
          {doctorss.map((doctor, index) => (
            <tr key={index}>
              <td>{doctor.name}</td>
              <td>
                <ul>
                  {doctor.workHours.map((hour, i) => (
                    <li key={i}>{hour}</li>
                  ))}
                </ul>
              </td>
              <td>
                <ul>
                  {doctor.offDays.map((day, i) => (
                    <li key={i}>{day}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
<br /><br /><br /><br /><br />
      <div>
        <div className="doctor-registration-container">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="doctor-card">
              <img src={doctor.img} alt={doctor.name} className="doctor-img" />
              <div className="doctor-info">
                <h3>{doctor.name}</h3>
                <form onSubmit={(e) => handleSubmit(e, doctor.id)}>
                  <input className="timetableinput"
                    type="text"
                    placeholder="Your Name"
                    value={formData[doctor.id].name}
                    onChange={(e) =>
                      handleChange(doctor.id, "name", e.target.value)
                    }
                    required
                  />
                  <input  className="timetableinput"
                    type="email"
                    placeholder="Your Email"
                    value={formData[doctor.id].email}
                    onChange={(e) =>
                      handleChange(doctor.id, "email", e.target.value)
                    }
                    required
                  />
                  <input className="timetableinput"
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
      </div><br /><br /><br /><br />
    </div>
  );
}

export default timetable;
