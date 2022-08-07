import { Link } from 'react-router-dom';

const BlogCard = ({
  blog: {
    id,
    category,
    title,
    createdAt,
    description,
    cover,
  },
}) => {
  return (
    <div className="blogCard-container">
      <img src={cover} alt='Blog Cover' />
      <label>{category}</label>
      <Link className='blogCard-link' to={`/blog/${id}`}>
        <h3>{title}</h3>
      </Link>
      <p>{createdAt}</p>
      <p className='blogCard-desc'>{description}</p>
    </div>
  );
};

export default BlogCard;