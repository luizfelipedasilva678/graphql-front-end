import { gql } from '@apollo/client';

export const GQL_DELETE_POST = gql`
  mutation delete($id: ID!) {
    deletePost(id: $id)
  }
`;
