import React, { useState } from 'react';
import { useContactContext } from '../context/ContactContext';
import { viewContact } from '../hooks/personalContacts';
import { fetchContactById } from '../services/contacts';

export default function ContactForm(id) {
  const { addContact } = useContactContext();
  const [name, setName] = useState('');
  const [note, setNote] = useState('');

  if (id) {
    async () => {
      const contact = await fetchContactById(id);
      setName(contact.name);
    };
  }

  const formSubmitter = async (e) => {
    e.preventDefault();
    addContact(name, note); //to update render of contacts
  };

  return (
    <div>
      {' '}
      <form onSubmit={formSubmitter}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br></br>
        <label>Note:</label>
        <textarea
          name="note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
