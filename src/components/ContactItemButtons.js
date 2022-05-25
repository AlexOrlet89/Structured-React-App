import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';
import { useContacts } from '../hooks/useContacts';

export default function ContactItemButtons({ contact }) {
  const { removeContact, copyContact } = useContacts();
  const { user } = useUserContext();

  const history = useHistory();

  const handleDelete = async (id) => {
    await removeContact(id);
    if (history.location.pathname.split('/')[1] === 'contact') {
      history.goBack();
    }
  };

  const handleCopy = async (id) => {
    await copyContact(id);
  };

  const isUser = contact.email === user.email;

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
      {!isUser && <button onClick={() => handleCopy(contact.id)}>Copy</button>}
    </div>
  );
}
