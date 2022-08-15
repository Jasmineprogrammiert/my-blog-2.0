import { useEffect, useState } from 'react';
import axios from 'axios';
// components
import BlogCardTesting from './BlogCardTesting';

const BlogHomeTesting = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await axios.get('/blogs');
      setBlogs(res.data) ;
    }
    fetchBlogs()
  }, [])

  return (
    <>
    <div className="blogList">
      {blogs && blogs.map(blog => (
        <BlogCardTesting key={blog._id} blog={blog} />
      ))}
    </div>
    </>
  )
}

export default BlogHomeTesting;