import React, { useState } from 'react';
import { useContactContext } from '../context/ContactContext';
import { viewContact } from '../hooks/personalContacts';
import { fetchContactById } from '../services/contacts';
import { useForm } from '../hooks/useForm';

export default function ContactForm({ contact = {}, onSubmit }) {
  // alright a couple things,
  // const { addContact } = useContactContext();
  const { name = '', note = '' } = contact;
  // const [name, setName] = useState('');
  // const [note, setNote] = useState('');

  const { formState, handleChange } = useForm({ name, note });

  const formSubmitter = async (e) => {
    e.preventDefault();
    onSubmit(formState);
    // addContact(name, note); //to update render of contacts
  };

  return (
    <div>
      {' '}
      <form onSubmit={formSubmitter}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={handleChange}
        />
        <br></br>
        <label>Note:</label>
        <textarea name="note" value={formState.note} onChange={handleChange} />
        <button>Submit</button>
      </form>
    </div>
  );
}
