import React, { useState } from 'react';
import ContactForm from '../components/ContactForm';
import ContactItem from '../components/ContactItem';
import { personalContacts } from '../hooks/personalContacts';
import { useContacts } from '../hooks/useContacts';

export default function Profile() {
  const { addContact, removeContact } = useContacts();
  const contacts = personalContacts();

  //Profile should
  const handleDelete = async (id) => {
    await removeContact(id);
  };

  if (!contacts) return null;

  let content;

  if (!contacts) {
    content = (
      <div>
        <p>You have no contacts yet</p>;
      </div>
    );
  } else {
    content = (
      <div>
        {contacts.map((contact) => (
          <>
            <ContactItem key={contact.id} contact={contact} />
            <>
              <button value={contact.id}>Edit</button>
              <button
                value={contact.id}
                onClick={() => handleDelete(contact.id)}
              >
                Delete
              </button>
            </>
          </>
        ))}
      </div>
    );
  }

  const handleSubmit = async (contact) => {
    await addContact(contact);
  };

  return (
    <>
      <div>Profile</div>
      <ContactForm onSubmit={handleSubmit} />
      {content}
    </>
  );
}
