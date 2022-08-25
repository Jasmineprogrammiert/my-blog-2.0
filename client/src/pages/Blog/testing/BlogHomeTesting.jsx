import { useState } from 'react';
// components
import Header from '../../../components/BlogHome/Header';
import SearchBar from '../../../components/BlogHome/SearchBar';
import BlogCardTesting from './BlogCardTesting';
import EmptyList from '../../../components/BlogHome/EmptyList';
// data
import useFetch from './useFetch';

const BlogHomeTesting = () => {
  const { data: blogs } = useFetch('/blogs');
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
    {!filteredResults.length
      ? <EmptyList /> 
      : (
        <div className="blogList">
          {filteredResults.map(blog => 
            <BlogCardTesting blog={blog} key={blog._id} />
          )}
        </div>
      )
    }
    </>
  )
}

export default BlogHomeTesting;