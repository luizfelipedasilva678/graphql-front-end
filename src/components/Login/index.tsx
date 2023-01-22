import { useMutation } from '@apollo/client';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { GQL_LOGIN } from '../../graphql/mutations/auth';
import './index.css';
import schema from './validation/validation';

const Login = () => {
  const [login] = useMutation(GQL_LOGIN);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const userNameInput = form.username as HTMLInputElement;
    const passwordInput = form.password as HTMLInputElement;

    const username = userNameInput.value;
    const password = passwordInput.value;

    const data = {
      username,
      password,
    };

    try {
      const validationResult = schema.validateSync(data, {
        abortEarly: false,
      });
      const { password, username } = validationResult;

      await login({
        variables: {
          data: {
            username,
            password,
          },
        },
      });

      navigate('/');
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
    <section className="login">
      <form onSubmit={handleSubmit} className="login__form">
        <input
          className="login__input"
          type="text"
          name="username"
          placeholder="Username"
        />
        <input
          className="login__input"
          type="password"
          name="password"
          placeholder="Password"
        />
        <input className="login__submit-btn" type="submit" value="Enter" />
      </form>

      <Link className="create-account-btn" to={'/create-account'}>
        Create your account
      </Link>
    </section>
  );
};

export default Login;
