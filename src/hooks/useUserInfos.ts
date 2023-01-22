import { useReactiveVar } from '@apollo/client';
import userInfosFn, { initialValue } from '../graphql/reactive-var/user-infos';
import { TSetUserInfo } from '../types/useUserInfos';

export const useUserInfos = () => {
  const userInfos = useReactiveVar(userInfosFn);

  const setUserInfo = (payload: TSetUserInfo) => {
    userInfosFn({
      ...userInfosFn(),
      ...payload,
    });
  };

  const resetUserInfo = () => {
    userInfosFn(initialValue);
  };

  const getUserInfo = () => {
    return userInfos;
  };

  return {
    setUserInfo,
    resetUserInfo,
    getUserInfo,
  };
};
