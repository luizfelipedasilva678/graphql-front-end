import pkg from '@apollo/client';
import 'cross-fetch/dist/node-polyfill.js';
import dotenv from 'dotenv';

dotenv.config();
const { ApolloClient, InMemoryCache, gql } = pkg;

const client = new ApolloClient({
  uri: `${process.env.API_URL}`,
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
