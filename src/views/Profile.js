import React, { useState } from 'react';
import ContactForm from '../components/ContactForm';
import { useContactContext } from '../context/ContactContext';
import { personalContacts } from '../hooks/personalContacts';
import { createContact } from '../services/contacts';

export default function Profile() {
  // const { contacts, addContact } = useContactContext();
  const [name, setName] = useState('');
  const contacts = personalContacts();

  // const formSubmitter = async (e) => {
  //   e.preventDefault();
  //   addContact(name); //to update render of contacts
  // };

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
        {contacts.map((contact, i) => (
          <p key={i}>{contact.name}</p>
        ))}
      </div>
    );
  }

  return (
    <>
      <div>Profile</div>
      <ContactForm />
      {/* <form onSubmit={formSubmitter}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button>Submit</button>
      </form> */}
      {content}
    </>
  );
}
