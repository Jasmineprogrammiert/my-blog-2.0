import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
// styles
import Carousel from 'react-bootstrap/Carousel';

const Carousels = () => {
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const { data: blog } = useFetch('/blogs/' + path);

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {blog.slider_img && blog.slider_img.slice(0, 8).map((img, index) => 
        <Carousel.Item interval={1000}>
          <img
            src={img}
            alt="image carousel"
            className="img-slider"
            key={index}
          />
          {blog.figcaption && blog.figcaption.slice(0, 8).map((fig, index) => 
            <Carousel.Caption>
              <figcaption key={index}>{fig}</figcaption>
            </Carousel.Caption>
          )}
        </Carousel.Item>
      )}
    </Carousel>
    </>
  )
}

export default Carousels;