import pkg from '@apollo/client';
import 'cross-fetch/dist/node-polyfill.js';

const { ApolloClient, InMemoryCache, gql } = pkg;

const client = new ApolloClient({
  uri: 'your_uri',
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      query GetUsers {
        users {
          id
          username
        }
      }
    `,
  })
  .then((response) => {
    const { data } = response;
    const { users } = data;

    users.forEach((user) => {
      console.log(user);
    });
  });
