import { gql } from '@apollo/client';

export const GQL_UPDATE_POST = gql`
  mutation updatePost($id: ID!, $data: UpdatePostInput!) {
    updatePost(id: $id, data: $data) {
      ... on Post {
        id
      }
    }
  }
`;
