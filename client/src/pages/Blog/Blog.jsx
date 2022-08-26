import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
// components
import Empty from '../../components/BlogHome/Empty';
import ProgressBar from '../../components/Blog/ProgressBar';
// hooks
import useFetch from '../../hooks/useFetch';
// style
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import AOS from 'aos';

const Blog = () => {
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const { data: blog, isPending } = useFetch('/blogs/' + path);

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
  })
  
  return (
    <>
    <ProgressBar />
    <Link to="/blog">
      <ArrowBackIcon id="goBack-icon" style={{ fontSize: "28px" }} />
    </Link>
    <h1 data-aos="fade-down">{blog.title}</h1>
    {blog && !isPending ? (
      <div className="blog" data-aos="fade-down">
        <header>
          <p className="blog-subHeading">
            {new Date(blog.createdAt).toDateString()}
            <AccessTimeRoundedIcon id="readTime-icon" />
            {blog.readTime} min read
          </p>
        </header>
        <img src={blog.bannerImg} alt="blog cover" />
        <div className="blog-desc">
          {blog.description && blog.description.map((p, i) => 
            <p key={i}>{p}</p>
          )}
        </div>
      </div>
    ) : (
        <Empty />
    )}
    </>
  )
}

export default Blog;