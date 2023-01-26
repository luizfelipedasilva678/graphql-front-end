import {
  ApolloCache,
  DefaultContext,
  MutationFunctionOptions,
  OperationVariables,
} from '@apollo/client';
import { toast } from 'react-toastify';

const handleDelete = async (
  id: string,
  deletePostFn: (
    options?:
      | MutationFunctionOptions<
          any,
          OperationVariables,
          DefaultContext,
          ApolloCache<any>
        >
      | undefined
  ) => Promise<any>
) => {
  try {
    await deletePostFn({
      variables: {
        id,
      },
    });
  } catch (err: any) {
    toast.error('Error deleting post');
  }
};

export default handleDelete;
