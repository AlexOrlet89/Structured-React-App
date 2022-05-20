import { checkError, client } from './client';

export async function fetchContacts() {
  const request = await client.from('contacts').select('*');
  return checkError(request);
}

export async function createContact({ name, note, email }) {
  // console.log('fetch call note', note); works!!
  const request = await client
    .from('contacts')
    .insert({ name, note, email })
    .single();
  return checkError(request);
}

export async function fetchContactById(id) {
  console.log('fetch called', id);
  const request = await client
    .from('contacts')
    .select('*')
    .match({ id })
    .single();
  return checkError(request);
}
