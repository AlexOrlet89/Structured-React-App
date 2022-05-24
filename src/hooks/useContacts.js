import { useEffect } from 'react';
import { useContactContext } from '../context/ContactContext';
import { fetchContacts } from '../services/contacts';

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

  return { contacts };
}
