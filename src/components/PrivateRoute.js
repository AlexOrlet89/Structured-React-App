import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';

export default function PrivateRoute({ children, ...rest }) {
  const { user } = useUserContext();

  return (
    <Route
      {...rest}
      render={() =>
        user ? children : <Redirect to={{ pathname: '/login' }} />
      }
    />
  );
}
