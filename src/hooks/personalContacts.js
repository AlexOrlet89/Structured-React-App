import { useContactContext } from '../context/ContactContext';
import { useUserContext } from '../context/UserContext';

// // this is a custom hook context file. this will be where we pass contacts and user id through and return only the user's contact info.
export function personalContacts() {
  const { contacts } = useContactContext();
  const { user } = useUserContext();

  if (!contacts) return null;
  console.log(contacts);

  const userContacts = contacts.filter(
    (contact) => contact.email == user.email
  );
  console.log('userContacts', userContacts);
  return userContacts;
}
