import { useState } from 'react';
import { useLocation } from 'react-router';
// hooks
import useFetch from '../../hooks/useFetch';
// style
import Slider from 'react-slick';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const ImgSlider = () => {
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const { data: blog } = useFetch('/blogs/' + path);

  const [imgIndex, setImgIndex] = useState(0);

  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <ChevronRightIcon />
      </div>
    );
  };
  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <ChevronLeftIcon />
      </div>
    );
  };

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImgIndex(next),
  };
  
  return (
    <>
    <Slider {...settings}>
      {blog.blogImg && blog.blogImg.map((img, index) => 
        <div 
          className = {index === imgIndex 
            ? 'slide activeSlide' 
            : 'slide'
          } 
          key={index}
        >
          <img src={img} alt="blog photos" />
        </div>
      )}
    </Slider>
    </>
  )
}

export default ImgSlider;