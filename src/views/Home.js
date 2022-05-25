import React from 'react';
import { Link } from 'react-router-dom';
import PostItem from './PostDetail';
import { useContactContext } from '../context/ContactContext';
import ContactItem from '../components/ContactItem';
import { useContacts } from '../hooks/useContacts';

export default function Home() {
  const { contacts } = useContacts();

  if (!contacts) return null;

  return (
    <>
      <div>Home</div>
      <div>
        {contacts.map((contact) => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </div>
    </>
  );
}
