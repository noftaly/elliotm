import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 40 // this is needed to tell the amount of px that should be visible.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
    partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
  }
}

export default function ImageCarousel({ images }) {
  return (
    <Carousel
      ssr
      responsive={responsive}
      infinite
      autoPlay
      autoPlaySpeed={5000}
    >
      {images.map((image, i) => <img key={i} className="pl-5" src={image.path} />)}
    </Carousel>
  );
}
