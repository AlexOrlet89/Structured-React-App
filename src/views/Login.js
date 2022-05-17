import React, { useState } from 'react';
import { signInUser } from '../services/user';

export default function Login() {
  const [authType, setAuthType] = useState('Sign In');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSetAuthType = (type) => {
    setAuthType(type);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    const user = await signInUser({ email, password });
  };

  return (
    <>
      <div>
        <h2 onClick={() => handleSetAuthType('Sign In')}>Sign In</h2>
        <h2 onClick={() => handleSetAuthType('Sign Up')}>Sign Up</h2>
      </div>
      <form onSubmit={handleLoginSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button>{authType}</button>
      </form>
    </>
  );
}
