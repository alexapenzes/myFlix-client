import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './registration-view.scss';

export function RegistrationView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword1] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');

  // Modify state of MainView to be registered and logged in with new user
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username);
    props.onRegister(registered);
  };

  return (
    <div>
      <h2>Sign up for a free MyFlix account:</h2>

      <form className="registration-form">
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
          <span>5+ characters, no spaces</span>
        </div>

        <div>
          <label>Enter password: </label>
          <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <span>It must filled out</span>
        </div>

        <div>
          <label>Email: </label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <span>Required</span>
        </div>

        <div>
          <label>Birthday: </label>
          <input type="text" value={birthday} onChange={(e) => setBirthday(e.target.value)}/>
          <span>Required</span>
        </div>

        <button type="submit" onClick={handleSubmit}>Register</button>
      </form>
    </div>
  );
}

// prop-types
// Give informational warnings in browser if data does not match required shape
RegistrationView.propTypes = {
  register: PropTypes.shape({
    Username: PropTypes.string.isRequired,
    Password: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired,
    Birthday: PropTypes.string.isRequired,
  }),
};