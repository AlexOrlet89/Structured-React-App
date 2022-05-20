import React, { useState } from 'react';
import { useContactContext } from '../context/ContactContext';
import { createContact } from '../services/contacts';

export default function Profile() {
  const { contacts, addContact } = useContactContext();
  const [name, setName] = useState('');

  const formSubmitter = async (e) => {
    e.preventDefault();
    console.log('form submit', name);
    addContact(name); //to update render of contacts
  };

  // console.log(contacts);
  if (!contacts) return null;

  return (
    <>
      <div>Profile</div>
      <form onSubmit={formSubmitter}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button>Submit</button>
      </form>
      <div>
        {contacts.map((contact, i) => (
          <p key={i}>{contact.name}</p>
        ))}
      </div>
    </>
  );
}
