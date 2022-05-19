import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import { createContact, fetchContacts } from '../services/contacts';

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
      console.log(action.payload);
      return action.payload;
    case 'ADD_CONTACT':
      console.log('add_contact', action.payload);
      return [action.payload.data, ...state];
  }
};

export const ContactProvider = ({ children }) => {
  const [contacts, dispatch] = useReducer(contactReducer);
  // const [contacts, setContacts] = useState([]);

  const addContact = (data) => {
    dispatch({ type: 'ADD_CONTACT', payload: { data } });
    // console.log(name);
    // const data = await createContact(name);
    // console.log(data);
    // return data;
  };

  return (
    <ContactContext.Provider value={{ addContact, contacts, dispatch }}>
      {children}
    </ContactContext.Provider>
  );
};
