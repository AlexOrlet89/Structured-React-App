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
  }
};

export const ContactProvider = ({ children }) => {
  const [contacts, dispatch] = useReducer(contactReducer);
  // const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const payload = await fetchContacts();
      dispatch({ type: 'LOAD_CONTACTS', payload });
    };
    fetchData();
  }, []);

  console.log(contacts);

  const addContact = async (name) => {
    console.log(name);
    const data = await createContact(name);
    console.log(data);
    return data;
  };

  return (
    <ContactContext.Provider value={{ addContact, contacts }}>
      {children}
    </ContactContext.Provider>
  );
};
