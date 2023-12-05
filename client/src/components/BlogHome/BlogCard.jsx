import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';

const BlogCard = ({ 
  blog: {
    _id,
    cover_img,
    title,
    date,
    category,
    preview
  },
}) => {

  useEffect(() => {    
    AOS.init({
      delay: 0,
      offset: 100,
      duration: 1300, 
    });
    window.addEventListener('load', AOS.refresh);
  })

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
        <img src={cover_img} alt="blog cover" />
        <h3>{title}</h3>
      </Link>
      <p>{new Date(date).toDateString().split(' ').slice(1).join(' ')}</p>
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

export default BlogCard;