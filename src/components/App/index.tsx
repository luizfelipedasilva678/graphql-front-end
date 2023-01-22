import AppRoutes from '../AppRoutes';
import MainContent from '../MainContent';
import Menu from '../Menu';

const App = () => {
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
