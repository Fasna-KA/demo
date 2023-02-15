
import React, { useState } from 'react';
import axios from 'axios';

function Registration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/api/register', { name, email, password })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error.response.data);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={event => setName(event.target.value)} placeholder="Name" />
      <input type="email" value={email} onChange={event => setEmail(event.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={event => setPassword(event.target.value)} placeholder="Password" />
      <button type="submit">Register</button>
    </form>
  );
}

export default Registration;
