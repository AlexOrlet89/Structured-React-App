import { data } from 'autoprefixer';
import { useEffect, useState } from 'react';
import { useContactContext } from '../context/ContactContext';
import { useUserContext } from '../context/UserContext';
import { fetchContactById } from '../services/contacts';
import { useContacts } from './useContacts';

// // this is a custom hook context file. this will be where we pass contacts and user id through and return only the user's contact info.
export function personalContacts() {
  const { contacts } = useContacts();
  const { user } = useUserContext();

  if (!contacts) return null;
  if (!user) return null;

  const userContacts = contacts.filter(
    (contact) => contact.email == user.email
  );
  return userContacts;
}

//Here's where we will feed an id, generate a useeffect and call the fetchContact, returning just the data we need for our detail page.

export function viewContact(id) {
  const [contact, setContact] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchContactById(id);
        setContact(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);
  return contact;
}
