// this is a custom hook context file.

import { useContext, useEffect } from 'react';
import { ContactContext } from '../context/ContactContext';

export function useContacts() {
  const context = useContext(ContactContext);

  if (context === undefined) {
    throw new Error('useContacts must be used within a ContactContext');
  }

  const { contacts, dispatch } = context;

  useEffect(() => {
    if (contacts) return;

    const fetchData = async () => {
      const payload = await fetchContacts();
      dispatch({ type: 'LOAD_CONTACTS', payload });
    };
    fetchData();
  }, []);

  const addContact = async (contact) => {
    const payload = await createContact(contact); //to add a row in supabase
    dispatch({ type: 'ADD_CONTACT', payload });
    return payload;
  };
}
