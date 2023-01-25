import { Route, Routes } from 'react-router-dom';
import CreateAccountForm from '../CreateAccountForm';
import Login from '../Login';
import Post from '../Post';
import Posts from '../Posts';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Posts />} />
      <Route path="/login" element={<Login />} />
      <Route path="/create-account" element={<CreateAccountForm />} />
      <Route path="/post/:postId" element={<Post />} />
    </Routes>
  );
};

export default AppRoutes;
