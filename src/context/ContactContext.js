import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import { createContact, fetchContacts } from '../services/contacts';
import { useUserContext } from './UserContext';

export const ContactContext = createContext();

export const useContactContext = () => {
  const context = useContext(ContactContext);

  if (context === undefined) {
    throw new Error('useUserContext must be used with in a UserProvider');
  }
  return context;
};

const contactReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_CONTACTS':
      return action.payload;
    case 'ADD_CONTACT':
      return [action.payload, ...state];
    // case 'DELETE_CONTACT':

    // return state.filter((s) => s.id !== action.payload.id);
    // return [...state];
    // return action.payload;
  }
};

export const ContactProvider = ({ children }) => {
  const [contacts, dispatch] = useReducer(contactReducer);
  const { user } = useUserContext();

  // useEffect(() => {
  //   if (contacts) return;

  //   const fetchData = async () => {
  //     const payload = await fetchContacts();
  //     dispatch({ type: 'LOAD_CONTACTS', payload });
  //   };
  //   fetchData();
  // }, []);

  return (
    <ContactContext.Provider value={{ contacts, dispatch }}>
      {children}
    </ContactContext.Provider>
  );
};
