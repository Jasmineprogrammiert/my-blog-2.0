import { useState } from 'react';
// components
import Header from '../../components/Blog/Header';
import SearchBar from '../../components/Blog/SearchBar';
import BlogList from '../../components/Blog/BlogList';
import EmptyList from '../../components/Blog/EmptyList';
// data
import { blogList } from '../../data/blog'

const BlogHome = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchBarInput, setSearchBarInput] = useState('');

  // search submission
  const handleSearchBar = e => {
    e.preventDefault();
    handleSearchResults();
  };
  // search for blog by category
  const handleSearchResults = () => {
    const filterBlogs = blogList.filter(blog => {
      return (
        blog.category.some(category => category.toLowerCase().includes(searchBarInput.toLowerCase().trim()))
      )
    });
    setBlogs(filterBlogs);
  };
  // clear search & show all blogs
  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchBarInput('');
  };

  return (
    <>
    <Header />
    <SearchBar
      value={searchBarInput}
      submitInput={handleSearchBar}
      handleSearchInput={e => setSearchBarInput(e.target.value)}
      clearSearch={handleClearSearch}
    />
    {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} /> }
    </>
  )
}

export default BlogHome;