import { useEffect } from "react";
import { Link } from "react-router-dom";
// components
import Empty from "../../components/BlogHome/Empty";
import ProgressBar from "../../components/Blog/ProgressBar";
import ImgSlider from "../../components/Blog/ImgSlider";
import ImgSliderr from "../../components/Blog/ImgSliderr";
// hooks
import usePath from "../../hooks/usePath";
import useFetch from "../../hooks/useFetch";
// styles
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import AOS from "aos";

const Blog = () => {
  const { path } = usePath();
  const { data: blog, isPending } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/blogs/` + path);

  useEffect(() => {    
    AOS.init({
      delay: 0,
      duration: 1300
    });
    window.addEventListener("load", AOS.refresh);
  })
  
  return (
    <>
    <ProgressBar />
    <Link to="/blog">
      <ArrowBackIcon id="goBack-icon" style={{ fontSize: "28px" }} />
    </Link>
    {blog && !isPending ? (
      <div className="blog" data-aos="fade-down">
        <header>
          <img src={blog.banner_img} alt="blog cover" />
          <div className="blog-header">
            <h1>{blog.title}</h1>
            <p>
              {new Date(blog.createdAt).toDateString().split(" ").slice(1).join(" ")}
              <AccessTimeRoundedIcon id="readTime-icon" />
              {blog.read_time} min read
            </p>
            <div className="blog-row">
              <ul>
                <li>Route: {blog.hiking_info.route}</li>
              </ul>
              <ul>
                <li>Length: {blog.hiking_info.length}km</li>
                <li>Time: {blog.hiking_info.moving_time}hr</li>
              </ul>
              <ul>
                <li>Difficulty: {blog.hiking_info.difficulty}*</li>
                <li>Elevation: {blog.hiking_info.elevation}m</li>
              </ul>
            </div>
          </div>
        </header>

        <div className="blog-desc">
          {blog.description && blog.description.slice(0, 4).map((p, i) => 
            <p key={i}>{p}</p>
          )}
        </div>
        <ImgSlider />
        <div className="blog-desc">
          {blog.description && blog.description.slice(4, 7).map((p, i) => 
            <p key={i}>{p}</p>
          )}
        </div>
        <ImgSliderr />
        <div className="blog-desc">
          {blog.description && blog.description.slice(7).map((p, i) => 
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