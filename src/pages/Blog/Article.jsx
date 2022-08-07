import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogList } from '../../data/blog';
import EmptyList from '../../components/Blog/EmptyList';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Article = () => {
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
    <Link className="article-goBack" to="/blog">
      <span><ArrowBackIcon /></span>
    </Link>
    {blog ? (
      <div className="article-container">
        <header>
          <h1>
            {blog.title}
          </h1>
          <p className="article-date">
            Published {blog.createdAt}
          </p>
        </header>
        <img src={blog.cover} alt="cover" />
        <p className="article-desc">
          {blog.description}
        </p>
      </div>
    ) : (
      <EmptyList />
    )}
    </>
  )
}

export default Article;