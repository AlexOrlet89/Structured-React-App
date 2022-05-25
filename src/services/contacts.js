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

export async function deleteContact(id) {
  console.log('DELETED!', typeof id);
  const request = await client.from('contacts').delete().match({ id }).single();
  console.log(request);
  return request;
}
