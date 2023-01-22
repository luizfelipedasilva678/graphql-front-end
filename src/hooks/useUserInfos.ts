import { useReactiveVar } from '@apollo/client';
import userInfosFn from '../graphql/reactive-var/user-infos';

export const useUserInfos = () => {
  const userInfos = useReactiveVar(userInfosFn);

  const setUserInfo = () => {};
};
