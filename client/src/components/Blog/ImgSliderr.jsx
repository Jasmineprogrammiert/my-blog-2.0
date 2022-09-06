// hooks
import usePath from '../../hooks/usePath';
import useFetch from '../../hooks/useFetch';
// styles
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Slider from 'react-slick';

const ImgSliderr = () => {
  const { path } = usePath();
  const { data: blog } = useFetch('/blogs/' + path);

  const NextArrow = ({ onClick }) => {
    return (
      <div className="img-arrow img-arrow-next" onClick={onClick}>
        <ArrowForwardIosIcon />
      </div>
    );
  };
  const PrevArrow = ({ onClick }) => {
    return (
      <div className="img-arrow img-arrow-prev" onClick={onClick}>
        <ArrowBackIosIcon />
      </div>
    );
  };

  const settings = {
    lazyLoad: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    dotsClass: 'img_dots',
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    pauseOnHover: true,
    fade: true
  };

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