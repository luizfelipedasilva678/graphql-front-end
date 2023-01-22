import * as yup from 'yup';

const USER_NAME_ERROR = 'Username is required';
const PASSWORD_ERROR = 'Password is required';

const schema = yup.object().shape({
  username: yup.string().required(USER_NAME_ERROR),
  password: yup.string().required(PASSWORD_ERROR),
});

export default schema;
