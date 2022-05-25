import React from 'react';
import { Link } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';
import { useContacts } from '../hooks/useContacts';
import ContactItemButtons from './ContactItemButtons';

export default function ContactItem({ contact }) {
  const { user } = useUserContext();

  const isUser = contact.email === user.email;

  return (
    <div>
      {' '}
      <Link key={contact.id} to={`/contact/${contact.id}`}>
        <h2>{contact.name}</h2>
      </Link>
      <ContactItemButtons contact={contact} isUser={isUser} />
    </div>
  );
}
