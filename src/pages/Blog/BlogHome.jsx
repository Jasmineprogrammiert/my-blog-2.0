import { useState } from 'react';
import Header from '../../components/Blog/Header';
import SearchBar from '../../components/Blog/SearchBar';
import BlogList from '../../components/Blog/BlogList';
import { blogList } from '../../data/blog'
import EmptyList from '../../components/Blog/EmptyList';

const Blog = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchBarInput, setSearchBarInput] = useState('');

  // search submission
  const handleSearchBar = e => {
    e.preventDefault();
    handleSearchResult();
  };
  // search for blog by category
  const handleSearchResult = () => {
    const allBlogs = blogList;
    const filterBlogs = allBlogs.filter(blog => 
      blog.category.toLowerCase().includes(searchBarInput.toLowerCase().trim())
    );
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
      submitForm={handleSearchBar}
      handleSearchInput={e => setSearchBarInput(e.target.value)}
      clearSearch={handleClearSearch}
    />
    {!blogs.length ? <EmptyList /> :  <BlogList blogs={blogs} /> }
    {/* <BlogList blogs={blogList} /> */}
    </>
  )
}

export default Blog;