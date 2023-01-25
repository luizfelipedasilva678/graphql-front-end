import { gql } from '@apollo/client';

export const GQL_GET_POST = gql`
  query getPost($id: ID!) {
    post(id: $id) {
      ... on Post {
        title
        body
        user {
          username
        }
        comments {
          comment
          user {
            username
          }
        }
      }
    }
  }
`;
