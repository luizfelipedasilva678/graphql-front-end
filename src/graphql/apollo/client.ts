import { ApolloClient, InMemoryCache } from '@apollo/client';
import { httpLink } from '../links/httpLink';

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
