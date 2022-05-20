import { checkError, client } from './client';

export async function fetchContacts() {
  const request = await client.from('contacts').select('*');
  return checkError(request);
}

export async function createContact({ name, email }) {
  const request = await client
    .from('contacts')
    .insert({ name, email })
    .single();
  return checkError(request);
}
