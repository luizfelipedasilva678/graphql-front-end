import { useMutation, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { GQL_UPDATE_POST } from '../../graphql/mutations/update-post';
import { GQL_GET_POST } from '../../graphql/queries/get-post';
import '../../styles/CreatePostForm/index.css';
import { IndividualPost } from '../../types/individual-post';
import schema from '../CreatePostForm/validation/validation';
import Loading from '../Loading';

const UpdatePostForm = () => {
  const [updatedPost] = useMutation(GQL_UPDATE_POST);
  const { postId } = useParams();
  const { data, loading } = useQuery<IndividualPost>(GQL_GET_POST, {
    variables: {
      id: postId,
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const userNameInput = form.titlepost as HTMLInputElement;
    const passwordInput = form.body as HTMLInputElement;

    const titlepost = userNameInput.value;
    const body = passwordInput.value;

    const data = {
      titlepost,
      body,
    };

    try {
      const validationResult = schema.validateSync(data, {
        abortEarly: false,
      });

      const { titlepost, body } = validationResult;

      await updatedPost({
        variables: {
          id: postId,
          data: {
            title: titlepost,
            body,
          },
        },
      });

      toast.success('Your post has been successfully updated!');
    } catch (err: any) {
      const error = err;
      const errorMessage = error?.message;

      if ('errors' in error) {
        const { errors }: { errors: string[] } = error;

        errors.forEach((err) => {
          toast.error(err);
        });
      } else {
        toast.error(errorMessage);
      }
    }
  };

  if (loading || data === undefined) return <Loading />;

  const {
    post: { title, body },
  } = data;

  return (
    <section className="create-post">
      <form onSubmit={handleSubmit} className="create-post__form">
        <input
          className="create-post__input"
          type="text"
          name="titlepost"
          placeholder="Title"
          defaultValue={title}
        />
        <textarea
          className="create-post__input create-post__textarea"
          name="body"
          placeholder="Body"
          defaultValue={body}
        ></textarea>
        <input
          className="create-post__submit-btn"
          type="submit"
          value="Updated Post"
        />
      </form>
    </section>
  );
};

export default UpdatePostForm;
