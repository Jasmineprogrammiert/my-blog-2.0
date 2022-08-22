import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';

const BlogCardTesting = ({ 
  // blog: {
  //   title, 
  //   category, 
  //   categories,
  //   createdAt,
  //   desc,
  //   _id,
  //   photo,
  //   PF,
  // }
  blog: {
    _id,
    cover,
    title,
    date,
    category,
    preview,
    // title, createdAt, readTime, bannerImg, description.p1, description.p2, description.p3, description.p4, description.p5
  },
}) => {

  useEffect(() => {    
    AOS.init({
      offset: 100,
      delay: 0,
      duration: 1300, 
    });
    window.addEventListener('load', function() {
      AOS.refresh();
    });
    window.addEventListener('DOMContentLoaded', function() {
      setTimeout(function() { 
        AOS.refresh(); 
      }, 500);
    });
  }, [])

  return (
    <>
    {/* <div className="blogCard">
      <h4>{title}</h4>
      <p><strong>category: </strong>{category}</p>
      <p>{new Date(createdAt).toDateString()}</p>
    </div> */}

    {/* <BlogTesting />
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
    </div> */}

    <div 
      className="blogCard"
      data-aos="fade-up"
    >
      <Link
        to={`/blog/${_id}`}
        className="blogCard-link" 
      >
        <img src={cover} alt="blog cover" />
        <h3>{title}</h3>
      </Link>
      <p>{date}</p>
      <div className="blogCard-category">
        {category.map((cat, i) => 
          <label key={i}>{cat}</label>
        )}
      </div>
      <p className="blogCard-preview">{preview}</p>
    </div>
    </>
  )
}

export default BlogCardTesting;