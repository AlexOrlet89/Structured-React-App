import React from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';
import { viewContact } from '../hooks/personalContacts';

export default function PostItem() {
  const { id } = useParams();
  const { user } = useUserContext();
  const contact = viewContact(id);
  const history = useHistory();

  if (!contact) return <p>loading...</p>;

  const isUser = contact.email === user.email;

  console.log(contact);

  let buttons;

  if (user.email === contact.email) {
    buttons = (
      <>
        <button onClick={() => history.push(`/contact/${id}/edit`)}>
          Edit
        </button>
        <button>Delete</button>
      </>
    );
  }

  return (
    <>
      <h2>{contact.name}</h2>
      <div>{buttons}</div>
    </>
  );
}
