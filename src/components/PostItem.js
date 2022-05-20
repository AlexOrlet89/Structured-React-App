import React from 'react';

export default function PostItem({ contact }) {
  console.log(contact);
  return (
    <>
      <h2>{contact.name}</h2>
    </>
  );
}
