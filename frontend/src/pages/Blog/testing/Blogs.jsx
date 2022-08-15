import BlogCard from "../../../components/BlogHome/BlogCard";

const Blogs = ({ blogs }) => {
  return (
    <>
    {blogs.map(p => (
      <BlogCard />
    ))}
    </>
  )
}

export default Blogs