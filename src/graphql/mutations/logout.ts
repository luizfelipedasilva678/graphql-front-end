import { gql } from '@apollo/client';

export const GQL_LOGOUT = gql`
  mutation logout($userName: String!) {
    logout(userName: $userName)
  }
`;
