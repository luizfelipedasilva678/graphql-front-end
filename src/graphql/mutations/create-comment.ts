import { gql } from '@apollo/client';

export const GQL_CREATE_COMMENT = gql`
  mutation createComment($data: CreateCommentInput!) {
    createComment(data: $data) {
      comment
    }
  }
`;
