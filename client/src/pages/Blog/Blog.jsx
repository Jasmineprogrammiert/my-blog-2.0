import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
// components
import Empty from '../../components/BlogHome/Empty';
import ProgressBar from '../../components/Blog/ProgressBar';
import ImgSlider from '../../components/Blog/ImgSlider';
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
    {blog && !isPending ? (
      <div className="blog" data-aos="fade-down">
        <header>
          <img src={blog.bannerImg} alt="blog cover" />
          <h1>{blog.title}</h1>
          <p>
            {new Date(blog.createdAt).toDateString().split(' ').slice(1).join(' ')}
            <AccessTimeRoundedIcon id="readTime-icon" />
            {blog.readTime} min read
          </p>
          <div className="blog-row">
            <ul className="blog-column-l">
              <li>
                Route: East Dam {'->'} Sai Wan {'->'} Ham Tin Wan {'->'} Tai Long Au {'->'} Pak Tam Au
              </li>
            </ul>
            <ul className="blog-column-m">
              <li>Length: 14.78 km</li>
              <li>Moving time: 5 hrs</li>
            </ul>
            <ul className="blog-column-r">
              <li>Difficulty: 3.5*</li>
              <li>Elevation: 887 m</li>
            </ul>
          </div>
        </header>

        <div className="blog-desc">
          {blog.description && blog.description.slice(0, 4).map((p, i) => 
            <p key={i}>{p}</p>
          )}
        </div>
        <ImgSlider />
        <div className="blog-desc">
          {blog.description && blog.description.slice(4).map((p, i) => 
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