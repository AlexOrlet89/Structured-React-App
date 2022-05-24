import React from 'react';
import { Link } from 'react-router-dom';

export default function ContactItem({ contact }) {
  return (
    <div>
      {' '}
      <Link key={contact.id} to={`/contact/${contact.id}`}>
        <h2>{contact.name}</h2>
      </Link>
    </div>
  );
}
