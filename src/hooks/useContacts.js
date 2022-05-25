import { useEffect } from 'react';
import { useContactContext } from '../context/ContactContext';
import {
  createContact,
  fetchContacts,
  deleteContact,
} from '../services/contacts';

// contacts at home and profile will be provided through here, wihch  means our useEffect will be here probably...

export function useContacts() {
  const { dispatch, contacts } = useContactContext();

  useEffect(() => {
    if (contacts) return;

    const fetchData = async () => {
      const payload = await fetchContacts();
      dispatch({ type: 'LOAD_CONTACTS', payload });
    };
    fetchData();
  }, []);

  const addContact = async (contact) => {
    const payload = await createContact({
      name: contact.name,
      note: contact.note,
      email: user.email,
    });
    console.log(payload); //to add a row in supabase
    dispatch({ type: 'ADD_CONTACT', payload });
  };

  const removeContact = async (id) => {
    const payload = await deleteContact(id);
    console.log(payload);
    // dispatch({ type: 'DELETE_CONTACT', payload });
  };

  return { addContact, contacts, removeContact };
}
