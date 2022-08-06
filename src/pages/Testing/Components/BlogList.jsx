import BlogCard from './BlogCard';

const BlogList = ({ blogs }) => {
  return (
    <>
    <div className="blogList-container">
      {blogs.map(blog => (
         <BlogCard blog={blog} key={blog.id} />
      ))}
    </div>
    </>
  )
}

export default BlogList;