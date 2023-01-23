import { useQuery } from '@apollo/client';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { GQL_GET_POSTS } from '../../graphql/queries/get-posts';
import '../../styles/Posts/index.css';
import { TPosts } from '../../types/posts';
import Loading from '../Loading';
import PostCard from './PostCard';

const Posts = () => {
  const [limit, setLimit] = useState(10);
  const { data, loading, error, refetch } = useQuery<TPosts>(GQL_GET_POSTS, {
    onError: () => {},
    variables: {
      input: {
        _sort: 'id',
        _order: 'DESC',
        _start: 0,
        _limit: limit,
      },
    },
  });

  if (error !== undefined) {
    toast.error('Ops there was an error =(');
  }

  if (loading) return <Loading />;

  if (data === undefined) return <p> Erro </p>;

  return (
    <section className="posts">
      {data.posts.map((post) => (
        <PostCard key={nanoid()} post={post} />
      ))}
      <button
        onClick={async () => {
          setLimit(limit + 10);
          await refetch();
        }}
      >
        Mostrar mains
      </button>
    </section>
  );
};

export default Posts;
