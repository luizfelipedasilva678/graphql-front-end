import '../../../styles/PostCard/index.css';
import { PostCardProps } from '../../../types/postCardProps';

const PostCard = ({ post }: PostCardProps) => {
  const {
    title,
    body,
    user: { username },
  } = post;

  const bodyLength = body.length;
  const maxLength = 300;
  const postBody =
    bodyLength > maxLength ? `${body.slice(0, maxLength)}...` : body;

  return (
    <div className="post-card">
      <h2 className="post-card__title"> {title} </h2>
      <p className="post-card__body"> {postBody} </p>
      <p className="post-card__author"> {username} </p>
    </div>
  );
};

export default PostCard;
