import { gql } from '@apollo/client';

export const GQL_LOGIN = gql`
  mutation login($data: LoginInput!) {
    login(data: $data) {
      userId
      username
    }
  }
`;
