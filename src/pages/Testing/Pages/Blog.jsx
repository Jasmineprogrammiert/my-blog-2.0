import Header from '../Components/Header';
import SearchBar from '../Components/SearchBar';
import BlogList from '../Components/BlogList';
import { blogList } from '../../../data/blog'

const Blog = () => {
  return (
    <>
    <Header />
    <SearchBar />
    <BlogList blogs={blogList} />
    </>
  )
}

export default Blog;