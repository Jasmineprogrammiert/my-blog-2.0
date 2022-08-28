import { useLocation } from 'react-router';
// hooks
import useFetch from '../../hooks/useFetch';
// style
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Slider from 'react-slick';

const ImgSlider = () => {
  const location = useLocation();
  const path = location.pathname.split('/')[2];
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
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    dotsClass: 'img_dots',
    // arrows: false,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
    <Slider {...settings}>
      {blog.blogImg && blog.blogImg.map((img, index) => 
        <div className="img-slider" key={index}>
          <img src={img} alt="blog photos" />
        </div>
      )}
    </Slider>
    </>
  )
}

export default ImgSlider;