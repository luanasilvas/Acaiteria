import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Cardwbi1 from "../Cards/Cards1";
import Cardwbi2 from "../Cards/Cards2";

export function Carouselcards1() {
  return (
    <>
      <Carousel
        autoPlay={false}
        interval={null}
        controls={true}
        indicators={true}
      >
        <Carousel.Item>

          <Cardwbi1 />

        </Carousel.Item>
        <Carousel.Item>

          <Cardwbi2 />
          
        </Carousel.Item>
      </Carousel>
    </>
  );
}
