import { useQuery } from '@apollo/client';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useMedia } from 'react-use';
import { GQL_GET_POSTS } from '../../graphql/queries/get-posts';
import '../../styles/Posts/index.css';
import { TPosts } from '../../types/posts';
import Loading from '../Loading';
import { handleOnComplete } from './handlers/handleOnComplete';
import PostCard from './PostCard';

const Posts = () => {
  const [paginationSettings, setPaginationSettings] = useState({
    page: 1,
    hideNextBtn: false,
    hidePrevBtn: false,
  });
  const isMobile = useMedia('(max-width: 1026px)');
  const { hideNextBtn, page, hidePrevBtn } = paginationSettings;

  const { data, loading, error, refetch } = useQuery<TPosts>(GQL_GET_POSTS, {
    onError: () => {},
    onCompleted: (data: TPosts) => {
      handleOnComplete(data, setPaginationSettings, paginationSettings);
    },
    variables: {
      input: {
        _sort: 'id',
        _order: 'DESC',
        _limit: isMobile ? 2 : 5,
        _page: page,
      },
    },
  });

  useEffect(() => {
    refetch().catch(() => {
      toast.error('Ops there was an error =(');
    });
  }, [page]);

  const nextPage = () => {
    setPaginationSettings({
      ...paginationSettings,
      page: page + 1,
      hideNextBtn: false,
    });
  };

  const prevPage = () => {
    if (page > 1) {
      setPaginationSettings({
        ...paginationSettings,
        page: page - 1,
      });
    }
  };

  if (error !== undefined) {
    toast.error('Ops there was an error =(');
  }

  if (loading || data === undefined) return <Loading />;

  return (
    <section className="posts">
      <header className="posts__header">
        <h2 className="posts__title">Posts </h2>
        <p className="posts__page"> Page {page}</p>
      </header>
      {data.posts.map((post) => (
        <PostCard key={nanoid()} post={post} />
      ))}
      <div className="posts__btns-wrapper">
        {!hideNextBtn ? (
          <button className="posts__pagination-btn" onClick={nextPage}>
            Next
          </button>
        ) : (
          <></>
        )}
        {!hidePrevBtn ? (
          <button className="posts__pagination-btn" onClick={prevPage}>
            Prev
          </button>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

export default Posts;
