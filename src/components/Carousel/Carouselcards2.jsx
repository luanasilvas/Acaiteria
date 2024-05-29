import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Cardwbi3 from "../Cards/Cards3";
import Cardwbi4 from "../Cards/Cards4";

export function Carouselcards2() {
  return (
    <>
      <Carousel
        autoPlay={false}
        interval={null}
        controls={true}
        indicators={true}
      >
        <Carousel.Item>

          <Cardwbi3 />

        </Carousel.Item>
        <Carousel.Item>

          <Cardwbi4 />
          
        </Carousel.Item>
      </Carousel>
    </>
  );
}
