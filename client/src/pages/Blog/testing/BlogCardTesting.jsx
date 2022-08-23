import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';

const BlogCardTesting = ({ 
  blog: {
    _id,
    coverImg,
    title,
    date,
    category,
    preview,
    readTime,
    bannerImg,
    description,
    createdAt,
    updatedAt
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
    <div 
      className="blogCard"
      data-aos="fade-up"
    >
      <Link
        to={`/blog/${_id}`}
        className="blogCard-link" 
      >
        <img src={coverImg} alt="blog cover" />
        <h3>{title}</h3>
      </Link>
      <p>{date}</p>
      {/* <p>{new Date(createdAt).toDateString()}</p> */}
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