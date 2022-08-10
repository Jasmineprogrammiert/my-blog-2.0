import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
// local files
import { blogData } from '../../data/blog';
import BlogHome from './BlogHome';
// style
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';

const Blog = () => {
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

  return (
    <>
    <Link to="/blog">
      <ArrowBackIcon id="goBack-icon" />
    </Link>
    {blog ? (
      <div className="blog">
        <header>
          <h1>{blog.title}</h1>
          <p className="blog-subHeading">
            {blog.createdAt}
            <AccessTimeRoundedIcon id="readTime-icon" />
            {blog.readTime} min read
          </p>
        </header>
        <img src={blog.cover} alt="cover" />
        <p className="blog-desc">
          {blog.description_1}
        </p>
        <p className="blog-desc">
          {blog.description_2}
        </p>
        <p className="blog-desc">
          {blog.description_3}
        </p>
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
    </>
  )
}

export default Blog;