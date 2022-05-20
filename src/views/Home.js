import React from 'react';
import { Link } from 'react-router-dom';
import PostItem from '../components/PostItem';
import { useContactContext } from '../context/ContactContext';

export default function Home() {
  const { contacts } = useContactContext();

  if (!contacts) return null;

  return (
    <>
      <div>Home</div>
      <div>
        {contacts.map((contact, i) => (
          <Link key={contact.id} to={`/contact/${contact.id}`}>
            <h2>{contact.name}</h2>
          </Link>
        ))}
      </div>
    </>
  );
}
