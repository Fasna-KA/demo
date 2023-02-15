import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Profile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    axios.get('/api/profile')
      .then(response => {
        setName(response.data.name);
        setEmail(response.data.email);
      })
      .catch(error => {
        console.log(error.response.data);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put('/api/profile', { name, email })
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
      <button type="submit">Update Profile</button>
    </form>
  );
}

export default Profile;
