import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function HomeCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="/images/heroes/slide1.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="/images/heroes/slide2.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="/images/heroes/slide3.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="/images/heroes/slide4.jpg"
          alt="Fourth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="/images/heroes/slide5.jpg"
          alt="Fifth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="/images/heroes/slide6.jpg"
          alt="Sixth slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;