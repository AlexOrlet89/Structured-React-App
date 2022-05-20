import React, { useState } from 'react';
import { useContactContext } from '../context/ContactContext';

export default function ContactForm() {
  const { addContact } = useContactContext();
  const [name, setName] = useState('');

  const formSubmitter = async (e) => {
    e.preventDefault();
    addContact(name); //to update render of contacts
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
        <button>Submit</button>
      </form>
    </div>
  );
}
