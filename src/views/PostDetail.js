import React from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import ContactItemButtons from '../components/ContactItemButtons';
import { useUserContext } from '../context/UserContext';
import { viewContact } from '../hooks/personalContacts';
import { useContacts } from '../hooks/useContacts';

export default function PostItem() {
  const { id } = useParams();
  const contact = viewContact(id);
  const history = useHistory();

  if (!contact) return <p>loading...</p>;

  return (
    <>
      <h2>{contact.name}</h2>
      <ContactItemButtons contact={contact} />
    </>
  );
}
