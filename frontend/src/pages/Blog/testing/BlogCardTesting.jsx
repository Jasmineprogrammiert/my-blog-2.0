import { Link } from 'react-router-dom';
import BlogTesting from './BlogTesting';

const BlogCardTesting = ({ 
  blog: {
    title, 
    category, 
    categories,
    createdAt,
    desc,
    _id,
    photo,
    PF,
  }

}) => {
  return (
    <>
    {/* <div className="blogCard">
      <h4>{title}</h4>
      <p><strong>category: </strong>{category}</p>
      <p>{new Date(createdAt).toDateString()}</p>
    </div> */}

    <BlogTesting />
    <div className="post">
      {photo && <img className="postImg" src={PF + photo} alt="" />}
      <div className="postInfo">
        <div className="postCats">
          {categories.map(category => (
            <span className="postCat">{category.name}</span>
          ))}
        </div>
        <Link to={`/bloghometesting/${_id}`} className="link">
          <span className="postTitle">{title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{desc}</p>
    </div>

   
    </>
  )
}

export default BlogCardTesting;