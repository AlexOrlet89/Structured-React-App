import { checkError, client } from './client';

export async function fetchContacts() {
  const request = await client.from('contacts').select('*');
  return checkError(request);
}

export async function createContact(name, lastContacted, birthday, note) {
  const request = await client
    .from('contacts')
    .insert([{ name, lastContacted, birthday, note }]);
  return checkError(request);
}
