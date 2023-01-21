import { Route, Routes } from 'react-router-dom';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<p> Teste 1 </p>} />
      <Route path="/login" element={<p> Teste 2 </p>} />
    </Routes>
  );
};

export default AppRoutes;
