import React from 'react';
import { useContacts } from '../hooks/useContacts';

export default function ContactItemButtons({ contact, isUser }) {
  const { removeContact } = useContacts();

  const handleDelete = async (id) => {
    await removeContact(id);
  };

  return (
    <div>
      {' '}
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
