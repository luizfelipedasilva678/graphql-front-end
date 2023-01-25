import { gql } from '@apollo/client';

export const GQL_CREATE_COMMENT = gql`
  mutation createUser($data: CreateCommentInput!) {
    createComment(data: $data) {
      comment
    }
  }
`;
