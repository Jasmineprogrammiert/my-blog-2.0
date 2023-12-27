import { useState } from 'react';
// components
import Header from '../../components/BlogHome/Header';
import SearchBar from '../../components/BlogHome/SearchBar';
import BlogCard from '../../components/BlogHome/BlogCard';
import Empty from '../../components/BlogHome/Empty';
// hooks
import useFetch from '../../hooks/useFetch';

const BlogHome = () => {
  const { data: blogs, isPending } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/blogs`);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const handleSearchInput = e => {
    e.preventDefault();
    handleSearchResults();
  };
  // filter blog(s) by category
  const handleSearchResults = () => {
    const filteredBlogs = blogs.filter(blog => 
      blog.category.some(category => category.toLowerCase().includes(searchInput.toLowerCase().trim()))
    );
    setFilteredResults(filteredBlogs);
  };
  // clear search & show all blogs
  const handleClearSearch = () => {   
    setFilteredResults(blogs);
    setSearchInput('');
  };

  return (
    <>
    <Header />
    <SearchBar
      value={searchInput}
      handleSearchInput={handleSearchInput}
      setSearchInput={e => setSearchInput(e.target.value)}
      handleClearSearch={handleClearSearch}
    />
    {!filteredResults.length && isPending
      ? <Empty /> 
      : (
        <div className="blogList">
          {filteredResults.map(blog => 
            <BlogCard blog={blog} key={blog.url_title} />
          )}
        </div>
      )
    }
    </>
  )
}

export default BlogHome;