import React from 'react';
import { useParams } from 'react-router-dom';
import { viewContact } from '../hooks/personalContacts/personalContacts';

export default function PostItem() {
  const { id } = useParams();
  const contact = viewContact(id);
  console.log(contact);

  if (!contact) return <p>loading...</p>;

  return (
    <>
      <h2>{contact.name}</h2>
    </>
  );
}
