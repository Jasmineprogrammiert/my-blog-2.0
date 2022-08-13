import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';

// local files
// import astronaut from '../../assets/img/ImgSlider/astronaut.png';
// import celebrating from '../../assets/img/ImgSlider/celebrating.png';
// import education from '../../assets/img/ImgSlider/education.png';
// import taken from '../../assets/img/ImgSlider/taken.png';
import { blogData } from '../../data/blog';
// style
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

// const images = [astronaut, celebrating, education, taken];

const ImgSlider = () => {
  // testing
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    let blog = blogData.find(blog => 
      blog.id === parseInt(id)
    );
    if (blog) {
      return setBlog(blog);
    }
  }, []);

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
    {blog ? (
      <Slider {...settings}>
        {blog.img.map((image, idx) => (
          <div className={idx === imageIndex ? 'slide activeSlide' : 'slide'}>
            <img src={image} alt='images' />
          </div>
        ))}
      </Slider>
    ) 
    : <h1>Error</h1>
    }
    {/* <Slider {...settings}>
      {images.map((img, idx) => (
        <div className={idx === imageIndex ? 'slide activeSlide' : 'slide'}>
          <img src={img} alt={img} />
        </div>
      ))}
    </Slider> */}
    </>
  )
}

export default ImgSlider