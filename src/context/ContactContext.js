import { createContext, useContext, useEffect, useState } from 'react';
import { createContact, fetchContacts } from '../services/contacts';

export const ContactContext = createContext();

export const useContactContext = () => {
  const context = useContext(ContactContext);

  if (context === undefined) {
    throw new Error('useUserContext must be used with in a UserProvider');
  }
  return context;
};

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchContacts();
      setContacts(data);
    };
    fetchData();
  }, []);

  const addContact = async ({ name, lastContacted, birthday, note }) => {
    const data = await createContact({ name, lastContacted, birthday, note });
    return data;
  };

  return (
    <ContactContext.Provider value={{ addContact, contacts, setContacts }}>
      {children}
    </ContactContext.Provider>
  );
};
