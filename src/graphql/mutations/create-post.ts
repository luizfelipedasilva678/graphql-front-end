import { gql } from '@apollo/client';

export const GQL_CREATE_POST = gql`
  mutation createUser($data: createPostInput!) {
    createPost(data: $data) {
      ... on Post {
        title
      }
    }
  }
`;
