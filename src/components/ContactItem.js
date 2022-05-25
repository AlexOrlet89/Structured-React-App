import React from 'react';
import { Link } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';
import { useContacts } from '../hooks/useContacts';

export default function ContactItem({ contact }) {
  const { removeContact } = useContacts();
  const { user } = useUserContext();

  const isUser = contact.email === user.email;
  const handleDelete = async (id) => {
    await removeContact(id);
  };

  return (
    <div>
      {' '}
      <Link key={contact.id} to={`/contact/${contact.id}`}>
        <h2>{contact.name}</h2>
      </Link>
      {isUser && (
        <>
          <button value={contact.id} onClick={() => handleDelete(contact.id)}>
            Delete
          </button>
          <button value={contact.id}>Edit</button>
        </>
      )}
      {!isUser && <button>Copy</button>}
    </div>
  );
}
