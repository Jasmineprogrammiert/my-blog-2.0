import BlogCard from "./BlogCard";

const BlogList = ({ blogs }) => {
  return (
    <>
     <div className="blogList">
      {blogs.map(blog => 
         <BlogCard blog={blog} key={blog.id} />
      )}
    </div>
    </>
  )
}

export default BlogList;