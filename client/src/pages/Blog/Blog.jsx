import { useState, useEffect, useRef, useContext } from 'react';
import { useLocation } from 'react-router';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
// local files
import BlogHome from './BlogHome';
import ProgressBar from '../../components/Blog/ProgressBar';
// style
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import AOS from 'aos';
// data
import useFetch from '../../components/BlogHome/useFetch';
// import { Context } from "../../context/Context";

const Blog = () => {
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  // const [blog, setBlog] = useState({});

  // testing
  const { data: blog } = useFetch('/blogs/' + path);

  // useEffect(() => {
  //   const getBlog = async () => {
  //     const res = await axios.get('/blogs/' + path);
  //     setBlog(res.data);
  //   };
  //   getBlog();
  // }, [path])


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
    <h1>{blog.title}</h1>
    {blog ? (
      <div className="blog" data-aos="fade-down">
        <ProgressBar />
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
      <BlogHome />
    )}
    </>
  )
}

export default Blog;