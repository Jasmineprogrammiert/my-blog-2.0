import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const useImgSlider = () => {
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
    dotsClass: 'img-dots',
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    pauseOnHover: true,
    fade: true
  };

  return { settings }
}

export default useImgSlider;