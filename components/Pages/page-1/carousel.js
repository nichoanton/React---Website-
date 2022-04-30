import { Carousel } from "react-bootstrap";
import img1 from "../../../img/home-1.jpg";
import img2 from "../../../img/home-2.jpg";

const Carouselimages = () => {
  return (
      <Carousel>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src={img2}
            alt="Second slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
  );
};

export default Carouselimages;
