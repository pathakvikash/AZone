'use client';
import React, { useState } from 'react';
import axios from 'axios';
import { v4 } from 'uuid';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/auth/login', {
        username,
        password,
      });

      if (response.data.success) {
        window.location.href = '/dashboard';
      } else {
        setError(response.data.message);
      }
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='username'>Username:</label>
      <input
        type='text'
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <label htmlFor='password'>Password:</label>
      <input
        type='password'
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type='submit'>Login</button>
      {error && <p>{error}</p>}
    </form>
  );
}

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const getAccessToken = () => {
    const token = sessionStorage.getItem('token');
    if (token) {
      return token;
    } else {
      const newToken = createToken();
      return newToken;
    }
  };

  const createToken = () => {
    const token = sessionStorage.setItem('token', v4());
    return token;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const accessToken = getAccessToken(); // Get the access token from local storage or session
      const response = await axios.post(
        'http://localhost:3001/api/signup',
        {
          username,
          email,
          password,
          confirmPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.data.token) {
        window.localStorage.setItem('token', response.data.token);
        window.location.href = '/dashboard';
      } else {
        setError(response.data.message);
      }
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col'>
      <label htmlFor='username'>Username:</label>
      <input
        type='text'
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <label htmlFor='email'>Email:</label>
      <input
        type='text'
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder='email'
      />
      <label htmlFor='password'>Password:</label>
      <input
        type='password'
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <label>Confirm Password:</label>
      <input
        type='password'
        value={confirmPassword}
        onChange={(event) => setConfirmPassword(event.target.value)}
      />
      <button type='submit'>Sign Up</button>
      {error && <p>{error}</p>}
    </form>
  );
}

export default function Auth() {
  return (
    <div>
      <h1>Authentication</h1>
      {/* <Login /> */}
      <Signup />
    </div>
  );
}
