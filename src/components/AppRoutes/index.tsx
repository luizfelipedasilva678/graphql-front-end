import { Route, Routes } from 'react-router-dom';
import Login from '../Login';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<p> Teste 1 </p>} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
