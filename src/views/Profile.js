import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import ContactItem from '../components/ContactItem';
import { useContactContext } from '../context/ContactContext';
import { personalContacts } from '../hooks/personalContacts';
import { createContact } from '../services/contacts';

export default function Profile() {
  const { addContact } = useContactContext();
  const contacts = personalContacts();

  //Profile should

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
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </div>
    );
  }

  const handleSubmit = async (contact) => {
    console.log(contact);
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
