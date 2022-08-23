import { useState, useEffect } from 'react';
import axios from 'axios';
// components
import Header from '../../../components/BlogHome/Header';
import SearchBar from '../../../components/BlogHome/SearchBar';
import BlogCardTesting from './BlogCardTesting';
import EmptyList from '../../../components/BlogHome/EmptyList';

const BlogHomeTesting = () => {
  const [blogs, setBlogs] = useState('');
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await axios.get('/blogs');
      setBlogs(res.data);
    };
    fetchBlogs();
  }, []);
  
  const handleSearchInput = e => {
    e.preventDefault();
    handleSearchResults();
  };
  // filter blog(s) by category
  const handleSearchResults = () => {
    const filterBlogs = blogs.filter(blog => 
      blog.category.some(category => category.toLowerCase().includes(searchInput.toLowerCase().trim()))
    );
    setBlogs(filterBlogs);
  };

  // clear search & show all blogs
  const handleClearSearch = () => {   
    setBlogs(blogs);
    setSearchInput('');
  };

  return (
    <>
    <Header />
    <SearchBar
      value={searchInput}
      handleSearchInput={handleSearchInput}
      clearSearchInput={e => setSearchInput(e.target.value)}
      handleClearSearch={handleClearSearch}
    />
    {/* <div className="blogList">
      {blogs && blogs.map(blog => (
        <BlogCardTesting key={blog._id} blog={blog} />
      ))}
    </div> */}
    {!blogs.length
      ? <EmptyList /> 
      : (
        <div className="blogList">
          {blogs.map(blog => 
            <BlogCardTesting blog={blog} key={blog.id} />
          )}
        </div>
      )
    }
    </>
  )
}

export default BlogHomeTesting;