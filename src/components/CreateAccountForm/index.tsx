import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { GQL_CREATE_USER } from '../../graphql/mutations/create-user';
import './index.css';
import schema from './validation/validation';

const CreateAccountForm = () => {
  const [createUser] = useMutation(GQL_CREATE_USER);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const userNameInput = form.username as HTMLInputElement;
    const passwordInput = form.password as HTMLInputElement;
    const firstNameInput = form.firstname as HTMLInputElement;
    const lastNameInput = form.lastname as HTMLInputElement;

    const username = userNameInput.value;
    const password = passwordInput.value;
    const firstname = firstNameInput.value;
    const lastname = lastNameInput.value;

    const data = {
      username,
      password,
      firstname,
      lastname,
    };

    try {
      const validationResult = schema.validateSync(data, {
        abortEarly: false,
      });

      const { password, username, firstname, lastname } = validationResult;

      await createUser({
        variables: {
          data: {
            username,
            password,
            firstname,
            lastname,
          },
        },
      });

      navigate('/login');
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
    <section className="create-account">
      <form onSubmit={handleSubmit} className="create-account__form">
        <input
          className="create-account__input"
          type="text"
          name="username"
          placeholder="Username"
        />
        <input
          className="create-account__input"
          type="text"
          name="firstname"
          placeholder="Firstname"
        />
        <input
          className="create-account__input"
          type="text"
          name="lastname"
          placeholder="Lastname"
        />
        <input
          className="create-account__input"
          type="password"
          name="password"
          placeholder="Password"
        />
        <input
          className="create-account__submit-btn"
          type="submit"
          value="Enter"
        />
      </form>
    </section>
  );
};

export default CreateAccountForm;
