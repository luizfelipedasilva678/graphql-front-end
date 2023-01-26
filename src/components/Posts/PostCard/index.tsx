import { useMutation } from '@apollo/client';
import { MdDelete, MdEdit } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { GQL_DELETE_POST } from '../../../graphql/mutations/delete-post';
import { useUserInfos } from '../../../hooks/useUserInfos';
import '../../../styles/PostCard/index.css';
import { PostCardProps } from '../../../types/postCardProps';
import handleDelete from './handlers/handleDelete';

const PostCard = ({ post }: PostCardProps) => {
  const {
    title,
    body,
    id,
    user: { username },
  } = post;

  const { getUserInfo } = useUserInfos();
  const { userName } = getUserInfo();
  const [deletePost] = useMutation(GQL_DELETE_POST);

  const reload = () => {
    if (window !== undefined && window !== null) window.location.reload();
  };

  const bodyLength = body.length;
  const maxLength = 300;
  const postBody =
    bodyLength > maxLength ? `${body.slice(0, maxLength)}...` : body;

  return (
    <div className="post-card">
      {userName === username ? (
        <div className="post-card__actions">
          <button
            className="post-card__delete-btn"
            onClick={async () => {
              await handleDelete(id, deletePost);
              reload();
            }}
          >
            <MdDelete size={20} color={'#cf2e3e'} />
          </button>
          <button className="post-card__edit-btn">
            <MdEdit size={20} color={'#2e6dd8'} />
          </button>
        </div>
      ) : (
        <></>
      )}
      <h2 className="post-card__title"> {title} </h2>
      <p className="post-card__body"> {postBody} </p>
      <p className="post-card__author"> {username} </p>
      <Link className="post-card__link" to={`/post/${post.id}`}>
        See details
      </Link>
    </div>
  );
};

export default PostCard;
