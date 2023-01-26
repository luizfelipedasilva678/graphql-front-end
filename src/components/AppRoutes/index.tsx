import { Route, Routes } from 'react-router-dom';
import CreateAccountForm from '../CreateAccountForm';
import CreatePostForm from '../CreatePostForm';
import Login from '../Login';
import Post from '../Post';
import Posts from '../Posts';
import UpdatePostForm from '../UpdatePostForm';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Posts />} />
      <Route path="/login" element={<Login />} />
      <Route path="/create-post" element={<CreatePostForm />} />
      <Route path="/create-account" element={<CreateAccountForm />} />
      <Route path="/post/:postId" element={<Post />} />
      <Route path="/edit/:postId" element={<UpdatePostForm />} />
    </Routes>
  );
};

export default AppRoutes;
