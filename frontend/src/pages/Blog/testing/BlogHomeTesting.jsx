import { useEffect, useState } from 'react';
import BlogDetails from './BlogDetails';

const BlogHomeTesting = () => {
  const [blogs, setBlogs] = useState(null)

  useEffect(() => {
      const fetchBlogs = async () => {
      const response = await fetch('/api/blog')
      const json = await response.json()

      if (response.ok) {
        setBlogs(json) 
      }
    }

    fetchBlogs()
  }, [])

  return (
    <>
    <div className="blogList">
      {blogs && blogs.map(blog => (
        <BlogDetails key={blog._id} blog={blog} />
      ))}
    </div>
    </>
  )
}

export default BlogHomeTesting;