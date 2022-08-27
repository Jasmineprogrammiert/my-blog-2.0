import { useState } from 'react';
import { useLocation } from 'react-router';
// hooks
import useFetch from '../../hooks/useFetch';
// style
import Slider from 'react-slick';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// img
import astronaut from '../../assets/img/ImgSlider/astronaut.png';
import celebrating from '../../assets/img/ImgSlider/celebrating.png';
import education from '../../assets/img/ImgSlider/education.png';
import taken from '../../assets/img/ImgSlider/taken.png';

const images = [astronaut, celebrating, education, taken];

const ImgSlider = () => {
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const { data: blog, isPending } = useFetch('/blogs/' + path);



  const [imageIndex, setImageIndex] = useState(0);

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
    beforeChange: (current, next) => setImageIndex(next),
  };
  
  return (
    <>
    <Slider {...settings}>
      {images.map((img, index, i) => (
        <div className = {index === imageIndex ? "slide activeSlide" : "slide"} key={i}>
          <img src={img} alt='blog photos' />
        </div>
      ))}
    </Slider>
    </>
  )
}

export default ImgSlider;