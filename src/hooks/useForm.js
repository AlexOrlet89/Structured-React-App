// Here we are going to create a custom hook that will handle the state for the two times we use form in this app, auth form and contact form. this custom hooke will return 2 things, formState and a handleChange, which will be used to set formState. Reminder to make sure no two names are the same.

import { useState } from 'react';

export function useForm(inputs = {}) {
  const [formState, setFormState] = useState({ ...inputs });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  return { formState, handleChange };
}
