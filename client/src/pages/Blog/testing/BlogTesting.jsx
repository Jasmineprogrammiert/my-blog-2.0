import { useState, useEffect, useRef, useContext } from 'react';
import { useLocation } from 'react-router';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
// local files
import BlogHomeTesting from './BlogHomeTesting';
import ProgressBar from '../../../components/Blog/ProgressBar';
// style
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import AOS from 'aos';

// import { Context } from "../../context/Context";

const BlogTesting = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [blog, setBlog] = useState({});
  // const PF = "http://localhost:5000/images/";
  // const { user } = useContext(Context);
  // const [title, setTitle] = useState("");
  // const [desc, setDesc] = useState("");
  // const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getBlog = async () => {
      const res = await axios.get("/blogs/" + path);
      console.log(res)
      setBlog(res.data);
      // setTitle(res.data.title);
      // setDesc(res.data.desc);
    };
    getBlog();
  }, [path]);

  // const handleDelete = async () => {
  //   try {
  //     await axios.delete(`/posts/${post._id}`, {
  //       data: { username: user.username },
  //     });
  //     window.location.replace("/");
  //   } catch (err) {}
  // };

  // const handleUpdate = async () => {
  //   try {
  //     await axios.put(`/posts/${post._id}`, {
  //       username: user.username,
  //       title,
  //       desc,
  //     });
  //     setUpdateMode(false)
  //   } catch (err) {}
  // };

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
            {new Date(blog.createdAt).toDateString()}
            <AccessTimeRoundedIcon id="readTime-icon" />
            {blog.readTime} min read
          </p>
        </header>
        <img src={blog.bannerImg} alt="blog cover" />

        <p className="blog-desc">
          {blog.description.p1}
        </p>
        <p className="blog-desc">
          {blog.description.p2}
        </p>
        <p className="blog-desc">
          {blog.description.p3}
        </p>
        {/* Inner Img Slider */}
        {/* <div className="carousel" ref={carousel}>
          <div className="inner-carousel">
            {blog.img.map(image => 
              <img src={image} alt="blog img" key={blog.id} />
            )}
          </div>
        </div> */}
        <p className="blog-desc">
          {blog.description.p4}
        </p>
        <p className="blog-desc">
          {blog.description.p5}
        </p>
      </div>
    ) : (
      <BlogHomeTesting />
    )}
    </>
  )
}

export default BlogTesting;