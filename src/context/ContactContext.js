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
  }
};

export const ContactProvider = ({ children }) => {
  const [contacts, dispatch] = useReducer(contactReducer);
  const { user } = useUserContext();

  const addContact = async (name, note) => {
    const payload = await createContact({
      name,
      note,
      email: user.email,
    }); //to add a row in supabase
    dispatch({ type: 'ADD_CONTACT', payload });
  };

  useEffect(() => {
    if (contacts) return;

    const fetchData = async () => {
      const payload = await fetchContacts();
      dispatch({ type: 'LOAD_CONTACTS', payload });
    };
    fetchData();
  }, []);

  return (
    <ContactContext.Provider value={{ contacts, addContact }}>
      {children}
    </ContactContext.Provider>
  );
};
