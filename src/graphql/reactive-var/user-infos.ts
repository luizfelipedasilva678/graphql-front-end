import { makeVar } from '@apollo/client';

export const initialValue = {
  isLoggedIn: false,
  userId: '',
  userName: '',
};

const userInfosFn = makeVar(initialValue);

export default userInfosFn;
