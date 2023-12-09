import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Create() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/Create')
      .then(response => {
        setUsername(response.data.username);
      })
      .catch(error => {
        console.error('Error fetching username:', error);
      });
  }, []); 

  return (
    <div>
      <p className='font-bold text-5xl m-72'>Hello bahi<span className='bg-yellow-300'>{username}</span></p>
    </div>
  );
}
