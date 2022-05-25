import React, { useState } from 'react';
import { useUserContext } from '../context/UserContext';
import { signInUser, signUpUser } from '../services/fetchUser';
import { useHistory } from 'react-router-dom';

export default function Login() {
  const { setUser, user, signIn, signUp } = useUserContext();
  const [authType, setAuthType] = useState('Sign In');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSetAuthType = (type) => {
    setAuthType(type);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (authType === 'Sign In') {
      const user = await signIn(email, password);
      setUser(user);
      history.replace('/profile');

      // Might do a windows alert, if not one of those toasts, so leaving this user here open...
      //   const user = await signInUser({ email, password });
    } else {
      const user = await signUp(email, password);
      // window.alert(`welcome ${user.email}`);
      setUser(user);
      history.replace('/profile');
      //   const user = await signUpUser({ email, password });
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
