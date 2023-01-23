import { gql } from '@apollo/client';

export const GQL_GET_POSTS = gql`
  query getPosts($input: ApiFiltersInput) {
    posts(input: $input) {
      id
      title
      body
      body
    }
  }
`;
