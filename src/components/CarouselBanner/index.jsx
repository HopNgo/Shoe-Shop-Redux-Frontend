import "./Carousel.scss";
import { Carousel } from "react-bootstrap";
import React from "react";
import Banner from "../Banner";
import images from "../../constants/images";
function CarouselBanner() {
  return (
    <Carousel variant="dark" interval={4000}>
      <Carousel.Item>
        <Banner
          color="blue"
          title="Nike Blue Shoes"
          backgroundImage={images.HOME_BG_BLUE}
          homeShoe={images.HOME_SHOE_BLUE}
          homeText={images.HOME_TEXT_BLUE}
        />
      </Carousel.Item>
      <Carousel.Item>
        <Banner
          color="red"
          title="Nike Red Shoes"
          backgroundImage={images.HOME_BG_RED}
          homeShoe={images.HOME_SHOE_RED}
          homeText={images.HOME_TEXT_RED}
        />
      </Carousel.Item>
      <Carousel.Item>
        <Banner
          color="#e1a32b"
          title="Nike Yellow Shoes"
          backgroundImage={images.HOME_BG_YELLOW}
          homeShoe={images.HOME_SHOE_YELLOW}
          homeText={images.HOME_TEXT_YELLOW}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselBanner;
