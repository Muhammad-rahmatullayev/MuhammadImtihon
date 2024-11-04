import React, { useState } from 'react';
import './Sign.css'
function Sign() {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    phone: '',
    email: '',
    password: '',
    isConfirmed: false,
  });
  const [notification, setNotification] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const isFormValid = () => {
    const { name, lastname, phone, email, password, isConfirmed } = formData;
    return name && lastname && phone && email && password && isConfirmed;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      setNotification('Success: You have registered successfully!');
    } else {
      setNotification('Error: Please fill in all fields and confirm.');
    }
  };

  return (
    <div className="registration-page">
      <h2>SIGN UP</h2> <br />
      <form onSubmit={handleSubmit}>
        <input className='signinput'
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        /> <br /><br />
        <input className='signinput'
          type="text"
          name="lastname"
          placeholder="Last Name"
          value={formData.lastname}
          onChange={handleChange}
        /> <br /><br />
        <input className='signinput'
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        /> <br /><br />

        <input className='signinput'
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        /> <br /><br />
        <input className='signinput'
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        /> <br /><br />
        <label>
          <input
            type="checkbox"
            name="isConfirmed"
            checked={formData.isConfirmed}
            onChange={handleChange}
          />
          Confirm
        </label> <br /><br />
        <button type="submit">Register</button>
      </form>
      {notification && <div className={`notification ${notification.startsWith('Success') ? 'success' : 'error'}`}>{notification}</div>}
    </div>
  );
}

export default Sign;
