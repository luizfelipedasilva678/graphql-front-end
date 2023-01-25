import { useMutation, useQuery } from '@apollo/client';
import { nanoid } from 'nanoid';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { GQL_CREATE_COMMENT } from '../../graphql/mutations/create-comment';
import { GQL_GET_POST } from '../../graphql/queries/get-post';
import { useUserInfos } from '../../hooks/useUserInfos';
import '../../styles/Post/index.css';
import { IndividualPost } from '../../types/individual-post';
import Loading from '../Loading';

const Post = () => {
  const { postId } = useParams();
  const { data, loading, refetch } = useQuery<IndividualPost>(GQL_GET_POST, {
    variables: {
      id: postId,
    },
  });
  const [addComment] = useMutation(GQL_CREATE_COMMENT);
  const { getUserInfo } = useUserInfos();
  const { isLoggedIn } = getUserInfo();

  if (loading || data === undefined) {
    return <Loading />;
  }

  const {
    post: {
      body,
      comments,
      title,
      user: { username },
    },
  } = data;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const form = e.target as HTMLFormElement;
      const commentInput = form.comment as HTMLInputElement;

      const comment = commentInput.value;

      if (comment === '') {
        toast.error('The comment cannot be empty');
      }

      await addComment({
        variables: {
          data: {
            comment,
            postId,
          },
        },
        onCompleted: async () => await refetch(),
      });
    } catch (e: any) {
      toast.error('Sorry, an error occurred while we were adding your comment');
    }
  };

  return (
    <section className="post">
      <h1 className="post__title"> {title}</h1>
      <p className="post__text"> {body}</p>
      <p className="post__author"> Author: {username} </p>
      <div className="post__comments">
        {comments.map((comment) => (
          <div key={nanoid()} className="post__comment">
            <p className="post__comment-author">{comment.user.username}</p>
            <p className="post__comment-text">{comment.comment}</p>
          </div>
        ))}
      </div>
      {isLoggedIn ? (
        <form className="post__comment-form" onSubmit={handleSubmit}>
          <input className="post__comment-input" type="text" name="comment" />
          <input
            className="post__comment-submit-btn"
            type="submit"
            value={'Send comment'}
          />
        </form>
      ) : (
        <></>
      )}
    </section>
  );
};

export default Post;
