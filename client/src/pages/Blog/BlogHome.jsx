import { useState } from 'react';
// components
import Header from '../../components/BlogHome/Header';
import SearchBar from '../../components/BlogHome/SearchBar';
import BlogCard from '../../components/BlogHome/BlogCard';
import EmptyList from '../../components/BlogHome/EmptyList';
// data
import { blogData } from '../../data/blog';

const BlogHome = () => {
  const [blogs, setBlogs] = useState(blogData);
  const [searchInput, setSearchInput] = useState('');

  const handleSearchInput = e => {
    e.preventDefault();
    handleSearchResults();
  };
  // filter blog(s) by category
  const handleSearchResults = () => {
    const filterBlogs = blogData.filter(blog => 
      blog.category.some(category => category.toLowerCase().includes(searchInput.toLowerCase().trim()))
    );
    setBlogs(filterBlogs);
  };
  // clear search & show all blogs
  const handleClearSearch = () => {
    setBlogs(blogData);
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
    {!blogs.length 
      ? <EmptyList /> 
      : (
        <div className="blogList">
          {blogs && blogs.map(blog => 
            <BlogCard blog={blog} key={blog.id} />
          )}
        </div>
      )
    }
    </>
  )
}

export default BlogHome;