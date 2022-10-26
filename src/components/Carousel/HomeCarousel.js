import React from "react";
import { Carousel } from "react-bootstrap";
import "./HomeCarousel.css";

const HomeCarousel = () => {
  return (
    <div id="carousel" className="col-md-8">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/s17VpTp/3.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/PGT5rVs/4.png"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/KFmdcmV/5.png"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/R69Zwzz/1.png"
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/R69Zwzz/2.png"
            alt="Fifth slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
