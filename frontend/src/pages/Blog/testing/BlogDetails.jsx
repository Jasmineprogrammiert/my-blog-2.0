const BlogDetails = ({ 
  blog: {
    title, 
    category, 
    createdAt
  }

}) => {
  return (
    <>
    <div className="blog-details">
      <h4>{title}</h4>
      <p><strong>category: </strong>{category}</p>
      <p>{createdAt}</p>
    </div>
    </>
  )
}

export default BlogDetails;