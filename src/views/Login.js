import React, { useState } from 'react';
import { useUserContext } from '../context/UserContext';
import { signInUser, signUpUser } from '../services/user';

export default function Login() {
  const { user, signIn, signUp } = useUserContext();
  const [authType, setAuthType] = useState('Sign In');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSetAuthType = (type) => {
    setAuthType(type);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (authType === 'Sign In') {
      const user = await signIn(email, password);
      // Might do a windows alert, if not one of those toasts, so leaving this user here open...
      //   const user = await signInUser({ email, password });
      //   console.log(user);
    } else {
      const user = await signUp(email, password);
      //   const user = await signUpUser({ email, password });
      //   console.log(user);
    }
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
