import { makeVar } from '@apollo/client';

const initialValue = {
  isLoggedIn: false,
  userId: '',
};

const userInfosFn = makeVar(initialValue);

export default userInfosFn;
