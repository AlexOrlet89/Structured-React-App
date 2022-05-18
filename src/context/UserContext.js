import { createContext, useContext, useState } from 'react';
import { getUser, signInUser, signUpUser } from '../services/user';

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
  const [user, setUser] = useState(currentUser);
  const signIn = async (email, password) => {
    const user = await signInUser({ email, password });
    setUser(user);
    console.log(user);
  };
  const signUp = async (email, password) => {
    const user = await signUpUser({ email, password });
    setUser(user);
    console.log(user);
  };

  return (
    <UserContext.Provider value={{ user, signIn, signUp }}>
      {children}
    </UserContext.Provider>
  );
};
