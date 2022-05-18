import { client } from './client';

export function getUser() {
  return client.auth.user();
}

export function getSession() {
  return client.auth.session();
}

export async function signUpUser({ email, password }) {
  const { user, error } = await client.auth.signUp({ email, password });
  if (error) throw error;

  return user;
}

export async function signInUser({ email, password }) {
  const { user, error } = await client.auth.signIn({ email, password });
  if (error) throw error;

  return user;
}

export async function signOutUser() {
  console.log('user function called');
  return client.auth.signOut();
}
