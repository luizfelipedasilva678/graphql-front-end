import * as yup from 'yup';

const USER_NAME_ERROR = 'Username is required';
const PASSWORD_ERROR = 'Password is required';
const LAST_NAME_ERROR = 'Lastname is required';
const FIRST_NAME_ERROR = 'Firstname is required';

const schema = yup.object().shape({
  username: yup.string().required(USER_NAME_ERROR),
  password: yup.string().required(PASSWORD_ERROR),
  firstname: yup.string().required(FIRST_NAME_ERROR),
  lastname: yup.string().required(LAST_NAME_ERROR),
});

export default schema;
