import React, { useState } from 'react';

export default function Login() {
  const [authType, setAuthType] = useState('Sign In');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSetAuthType = (type) => {
    setAuthType(type);
  };

  return (
    <>
      <div>
        <h2 onClick={() => handleSetAuthType('Sign In')}>Sign In</h2>
        <h2 onClick={() => handleSetAuthType('Sign Up')}>Sign Up</h2>
      </div>
      <form>
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
