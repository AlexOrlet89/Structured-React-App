import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';

export default function Header() {
  const history = useHistory();
  const { user, signOut } = useUserContext();
  console.log(user);

  const handleSignOut = async () => {
    await signOut();
    history.replace('/login');
  };

  const handleLoginRedirect = () => {
    history.replace('/login');
  };
  return (
    <>
      <div>
        <h2>Header for {user ? user.email : `Unregistered Guest`}</h2>
        <Link to="/profile">Your Profile</Link>
        {'   '}
        {user ? (
          <button onClick={handleSignOut}>Log Out</button>
        ) : (
          <button onClick={handleLoginRedirect}>Log In</button>
        )}
      </div>
    </>
  );
}
