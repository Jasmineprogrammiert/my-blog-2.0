import { Link } from 'react-router-dom';

const BlogCard = ({
  blog: {
    id,
    cover,
    title,
    createdAt,
    category,
    preview
  },
}) => {
  return (
    <>
    <div className="blogCard">
      <Link
        to={`/blog/${id}`}
        className="blogCard-link" 
      >
        <img src={cover} alt="Blog cover" />
        <h3>{title}</h3>
      </Link>
      <p className="blogCard-date">{createdAt}</p>
      <div className="blogCard-category">
        {category.map((category_txt, i) => (
          <label key={i}>{category_txt}</label>
        ))}
      </div>
      <p className="blogCard-preview">{preview}</p>
    </div>
    </>
  );
};

export default BlogCard;