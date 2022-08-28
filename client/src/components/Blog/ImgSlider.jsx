import { useState } from 'react';
import { useLocation } from 'react-router';
// hooks
import useFetch from '../../hooks/useFetch';
// style
import Slider from 'react-slick';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const ImgSlider = () => {
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const { data: blog } = useFetch('/blogs/' + path);

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
    arrows: false,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    // beforeChange: (prev, next) => setImgIndex(next),
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