// hooks
import usePath from '../../hooks/usePath';
import useFetch from '../../hooks/useFetch';
import useImgSlider from '../../hooks/useImgSlider';
// styles
import Slider from 'react-slick';

const ImgSliderr = () => {
  const { path } = usePath();
  const { data: blog } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/blogs/` + path);
  const { settings } = useImgSlider();

  return (
    <>
    <Slider {...settings}>
      {blog.slider_img && blog.slider_img.slice(8).map((img, index) => 
        <figure className="img-slider" key={index}>
          <img src={img} alt="blog photos" />
          <figcaption key={index}>{blog.figcaption[index+8]}</figcaption>
        </figure>
      )}
    </Slider>
    </>
  )
}

export default ImgSliderr;