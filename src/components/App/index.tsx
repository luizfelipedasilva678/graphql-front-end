import { useEffect } from 'react';
import { useUserInfos } from '../../hooks/useUserInfos';
import { TAuthData } from '../../types/authData';
import { getLocalStorage } from '../../utils/localStorage';
import AppRoutes from '../AppRoutes';
import MainContent from '../MainContent';
import Menu from '../Menu';

const App = () => {
  const { setUserInfo } = useUserInfos();

  const setUserInfos = () => {
    const authData = getLocalStorage<TAuthData>('__auth_data__');

    if (authData !== null) {
      setUserInfo(authData);
    }
  };

  useEffect(() => {
    setUserInfos();
  }, []);

  return (
    <>
      <Menu />
      <MainContent>
        <AppRoutes />
      </MainContent>
    </>
  );
};

export default App;
