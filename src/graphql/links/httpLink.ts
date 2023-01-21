import { HttpLink } from '@apollo/client';

export const httpLink = new HttpLink({
  credentials: 'include',
  uri: `${import.meta.env.VITE_API_URL as string}`,
});
