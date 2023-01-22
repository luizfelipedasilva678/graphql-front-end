import { useUserInfos } from '../../hooks/useUserInfos';

const Posts = () => {
  const { getUserInfo } = useUserInfos();

  console.log(getUserInfo());

  return <h1> Teste </h1>;
};

export default Posts;
