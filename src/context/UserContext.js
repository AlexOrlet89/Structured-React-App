import { createContext, useContext, useEffect, useState } from 'react';
import {
  getUser,
  signInUser,
  signOutUser,
  signUpUser,
} from '../services/fetchUser';

export const UserContext = createContext();

export const useUserContext = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUserContext must be used with in a UserProvider');
  }

  return context;
};

export const UserProvider = ({ children }) => {
  const currentUser = getUser();
  const [user, setUser] = useState(
    currentUser ? { id: currentUser.id, email: currentUser.email } : null
  );
  // currentUser ? { id: currentUser.id, email: currentUser.email } : {}

  const signIn = async (email, password) => {
    const user = await signInUser({ email, password });
    return user;
  };

  const signUp = async (email, password) => {
    const user = await signUpUser({ email, password });
    return user;
  };
  const signOut = async () => {
    await signOutUser();
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, signIn, signUp, signOut, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
