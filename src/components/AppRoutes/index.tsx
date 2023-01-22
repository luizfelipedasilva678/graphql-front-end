import { Route, Routes } from 'react-router-dom';
import CreateAccountForm from '../CreateAccountForm';
import Login from '../Login';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<p> Teste 1 </p>} />
      <Route path="/login" element={<Login />} />
      <Route path="/create-account" element={<CreateAccountForm />} />
    </Routes>
  );
};

export default AppRoutes;
