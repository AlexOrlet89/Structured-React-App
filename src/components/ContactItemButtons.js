import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useContacts } from '../hooks/useContacts';

export default function ContactItemButtons({ contact, isUser }) {
  const { removeContact } = useContacts();

  const history = useHistory();
  console.log(history.location.pathname.split('/')[1]);

  const handleDelete = async (id) => {
    await removeContact(id);
    if (history.location.pathname.split('/')[1] === 'contact') {
      history.goBack();
    }
    // profileId && history.goBack();
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
