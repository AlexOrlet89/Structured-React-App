import React from 'react';
import { useParams } from 'react-router-dom';

export default function PostItem() {
  const { id } = useParams();
  //   if (!contact) return null;

  //   console.log(contact);
  return (
    <>
      <h2>post!!!</h2>
    </>
  );
}
