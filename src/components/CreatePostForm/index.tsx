import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { GQL_CREATE_POST } from '../../graphql/mutations/create-post';
import '../../styles/CreatePostForm/index.css';
import schema from './validation/validation';

const CreatePostForm = () => {
  const [createPost] = useMutation(GQL_CREATE_POST);
  const navigate = useNavigate();

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

      await createPost({
        variables: {
          data: {
            title: titlepost,
            body,
          },
        },
      });

      toast.success('Your post has been successfully created!');
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

  return (
    <section className="create-post">
      <form onSubmit={handleSubmit} className="create-post__form">
        <input
          className="create-post__input"
          type="text"
          name="titlepost"
          placeholder="Title"
        />
        <textarea
          className="create-post__input create-post__textarea"
          name="body"
          placeholder="Body"
        ></textarea>
        <input
          className="create-post__submit-btn"
          type="submit"
          value="Create Post"
        />
      </form>
    </section>
  );
};

export default CreatePostForm;
