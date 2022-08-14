import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
// local files
import { blogData } from '../../data/blog';
import BlogHome from './BlogHome';
import ProgressBar from '../../components/Blog/ProgressBar';
// testing
import Comment from '../../components/testing/Comment';
// style
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import AOS from 'aos';

const Blog = () => {
  const carousel = useRef(null);
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogData.find(blog => 
      blog.id === parseInt(id)
    );
    if (blog) {
      return setBlog(blog);
    }
  }, []);

  useEffect(() => {    
    AOS.init({
      delay: 0,
      duration: 1300
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
    <Link to="/blog">
      <ArrowBackIcon id="goBack-icon" style={{ fontSize: "28px" }} />
    </Link>
    {blog ? (
      <div className="blog" data-aos="fade-down">
        <ProgressBar />
        <header>
          <h1>{blog.title}</h1>
          <p className="blog-subHeading">
            {blog.createdAt}
            <AccessTimeRoundedIcon id="readTime-icon" />
            {blog.readTime} min read
          </p>
        </header>
        <img src={blog.blogCover} alt="blog cover" />

        <p className="blog-desc">
          {blog.description_1}
        </p>
        <p className="blog-desc">
          {blog.description_2}
        </p>
        <p className="blog-desc">
          {blog.description_3}
        </p>
      {/* Inner Img Slider */}
        <div className="carousel" ref={carousel}>
          <div className="inner-carousel">
            {blog.img.map(image => 
              <img src={image} alt="blog img" key={blog.id} />
            )}
          </div>
        </div>
        <p className="blog-desc">
          {blog.description_4}
        </p>
        <p className="blog-desc">
          {blog.description_5}
        </p>
      </div>
    ) : (
      <BlogHome />
    )}
    <Comment />
    </>
  )
}

export default Blog;