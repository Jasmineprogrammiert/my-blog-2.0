import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
// components
import Empty from '../../components/BlogHome/Empty';
import ProgressBar from '../../components/Blog/ProgressBar';
import ImgSlider from '../../components/Blog/ImgSlider';
// hooks
import useFetch from '../../hooks/useFetch';
// style
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import AOS from 'aos';

const Blog = () => {
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const { data: blog, isPending } = useFetch('/blogs/' + path);

  useEffect(() => {    
    AOS.init({
      delay: 0,
      duration: 1300
    });
    window.addEventListener('load', function() {
      AOS.refresh();
    });
    window.addEventListener('DOMContentLoaded', function() {
      setTimeout(function() { 
        AOS.refresh(); 
      }, 500);
    });
  })
  
  return (
    <>
    <ProgressBar />
    <Link to="/blog">
      <ArrowBackIcon id="goBack-icon" style={{ fontSize: "28px" }} />
    </Link>
    {blog && !isPending ? (
      <div className="blog" data-aos="fade-down">
        <header className="container-testing">
          <img src={blog.banner_img} alt="blog cover" />

          <div className="content-testing">
            <h1>{blog.title}</h1>
            <p>
              {new Date(blog.createdAt).toDateString().split(' ').slice(1).join(' ')}
              <AccessTimeRoundedIcon id="readTime-icon" />
              {blog.read_time} min read
            </p>
            <div className="blog-row">
              <ul className="blog-column-l">
                <li>Route: {blog.hiking_info.route}</li>
              </ul>
              <ul className="blog-column-m">
                <li>Length: {blog.hiking_info.length} km</li>
                <li>Moving time: {blog.hiking_info.moving_time} hrs</li>
              </ul>
              <ul className="blog-column-r">
                <li>Difficulty: {blog.hiking_info.difficulty}*</li>
                <li>Elevation: {blog.hiking_info.elevation} m</li>
              </ul>
            </div>
          </div>
        </header>


        <div className="container">
          <img src="https://lieblingsjasmin.s3.ap-southeast-1.amazonaws.com/img/2022-08/my-go-to-places-on-weekend/00-cover-img.jpg" alt="Notebook" style={{width:"100"}} />
          <div className="content">
            <h1>Heading</h1>
            <p>Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum maiestatis persequeris pro, pri ponderum tractatos ei.</p>
          </div>
        </div>







        <div className="blog-desc">
          {blog.description && blog.description.slice(0, 4).map((p, i) => 
            <p key={i}>{p}</p>
          )}
        </div>
        <ImgSlider />
        <div className="blog-desc">
          {blog.description && blog.description.slice(4).map((p, i) => 
            <p key={i}>{p}</p>
          )}
        </div>
      </div>
    ) : (
        <Empty />
    )}
    </>
  )
}

export default Blog;