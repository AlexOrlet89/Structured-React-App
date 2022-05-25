import React from 'react';
import ContactForm from '../components/ContactForm';
import { useParams } from 'react-router-dom';

export default function EditPage() {
  const { id } = useParams();

  return (
    <div>
      <ContactForm id={id} />
    </div>
  );
}
