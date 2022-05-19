import React, { useState } from 'react';
import { useContactContext } from '../context/ContactContext';

export default function Profile() {
  const { contacts, addContact } = useContactContext();
  const [name, setName] = useState('');

  const formSubmitter = (e) => {
    e.preventDefault();
    console.log('form submit', name);
    addContact(name);
  };

  // console.log(contacts);

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
