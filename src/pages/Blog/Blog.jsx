import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
// local
import { blogList } from '../../data/blog';
import EmptyList from '../../components/Blog/EmptyList';
// style
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogList.find(blog => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, []);

  return (
    <>
    <Link to="/blog">
      <ArrowBackIcon id="goBack" />
    </Link>
    {blog ? (
      <div className="blog">
        <header>
          <h1>{blog.title}</h1>
          <p className="blog-subHeading">
            {blog.createdAt}
            <AccessTimeRoundedIcon id="readTime" />
            {blog.readTime} min read
          </p>
        </header>
        <img src={blog.cover} alt="cover" />
        <p className="blog-desc">
          {blog.description}
        </p>
      </div>
    ) : (
      <EmptyList />
    )}
    </>
  )
}

export default Blog;