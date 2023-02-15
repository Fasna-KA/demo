import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/api/login', { email, password })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error.response.data);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={event => setEmail(event.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={event => setPassword(event.target.value)} placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
