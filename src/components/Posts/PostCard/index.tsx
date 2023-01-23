import '../../../styles/PostCard/index.css';
import { PostCardProps } from '../../../types/postCardProps';

const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className="post-card">
      <h2 className="post-card__title"> {post.title} </h2>
      <p className="post-card__body"> {post.body} </p>
    </div>
  );
};

export default PostCard;
