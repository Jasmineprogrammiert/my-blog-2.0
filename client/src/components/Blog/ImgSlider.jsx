// hooks
import usePath from '../../hooks/usePath';
import useFetch from '../../hooks/useFetch';
// components
import FigCaption from '../_testing_/FigCaption';
// styles
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Slider from 'react-slick';

const ImgSlider = () => {
  const { path } = usePath();
  const { data: blog } = useFetch('/blogs/' + path);

  const NextArrow = ({ onClick }) => {
    return (
      <div className="img-arrow img-arrow-next" onClick={onClick}>
        <ChevronRightIcon />
      </div>
    );
  };
  const PrevArrow = ({ onClick }) => {
    return (
      <div className="img-arrow img-arrow-prev" onClick={onClick}>
        <ChevronLeftIcon />
      </div>
    );
  };

  const settings = {
    lazyLoad: true,
    infinite: true,
    speed: 500, // default
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // default
    dots: true,
    dotsClass: 'img_dots',
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    pauseOnHover: true, // default
  };

  return (
    <>
    <Slider {...settings}>
      {blog.slider_img && blog.slider_img.slice(0, 8).map((img, index) => 
        <figure className="img-slider" key={index}>
          <img src={img} alt="blog photos" />
          <FigCaption />
        </figure>
      )}
    </Slider>
    </>
  )
}

export default ImgSlider;