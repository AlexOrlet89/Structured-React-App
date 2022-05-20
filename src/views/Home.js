import React from 'react';
import { useContactContext } from '../context/ContactContext';

export default function Home() {
  const { contacts } = useContactContext();

  if (!contacts) return null;

  return (
    <>
      <div>Home</div>
      <div>
        {contacts.map((contact, i) => (
          <p key={i}>{contact.name}</p>
        ))}
      </div>
    </>
  );
}
