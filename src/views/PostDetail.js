import React from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import ContactItemButtons from '../components/ContactItemButtons';
import { useUserContext } from '../context/UserContext';
import { viewContact } from '../hooks/personalContacts';
import { useContacts } from '../hooks/useContacts';

export default function PostItem() {
  const { id } = useParams();
  const { user } = useUserContext();
  const contact = viewContact(id);
  const { removeContact } = useContacts();
  const history = useHistory();

  if (!contact) return <p>loading...</p>;

  const isUser = contact.email === user.email;

  const handleDelete = async (id) => {
    await removeContact(id);
    history.goBack();
  };

  return (
    <>
      <h2>{contact.name}</h2>
      <ContactItemButtons
        contact={contact}
        isUser={isUser}
        handleDelete={handleDelete}
      />
    </>
  );
}
