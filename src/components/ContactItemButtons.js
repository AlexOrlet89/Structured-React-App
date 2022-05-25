import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useContacts } from '../hooks/useContacts';

export default function ContactItemButtons({ contact, isUser, handleDelete }) {
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
