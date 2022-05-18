import React from 'react';
import { Link } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';

export default function Header() {
  const { user, signOut } = useUserContext();
  console.log(user);
  return (
    <>
      <div>
        <h2>Header for {user.email ? user.email : `Unregistered Guest`}</h2>
        <Link to="/profile">Your Profile</Link>
        {'   '}
        {user.email ? (
          <Link to={signOut}>Log Out</Link>
        ) : (
          <Link to="/login">Log In</Link>
        )}
      </div>
    </>
  );
}
