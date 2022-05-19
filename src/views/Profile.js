import React, { useState } from 'react';
import { useContactContext } from '../context/ContactContext';
import { createContact } from '../services/contacts';

export default function Profile() {
  const { contacts, addContact } = useContactContext();
  const [name, setName] = useState('');

  const formSubmitter = async (e) => {
    e.preventDefault();
    console.log('form submit', name);
    const data = await createContact(name); //to add a row in supabase
    // console.log(data); gives us
    addContact(data); //to update render of contacts
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
        {contacts.map((contact) => (
          <p key={contact.created_at}>{contact.name}</p>
        ))}
      </div>
    </>
  );
}
