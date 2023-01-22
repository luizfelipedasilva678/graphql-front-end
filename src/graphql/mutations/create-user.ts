import { gql } from '@apollo/client';

export const GQL_CREATE_USER = gql`
  mutation createUser($data: UserInput!) {
    createUser(data: $data) {
      id
      firstname
    }
  }
`;
