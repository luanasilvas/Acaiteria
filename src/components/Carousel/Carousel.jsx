import React from "react";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../../assets/img/actionAshe.jpg";
import image2 from "../../assets/img/actionDead.jpg";
import image3 from "../../assets/img/actionPoke.jpg";
import "./CarouselStyles.css"; // Importar o arquivo CSS para estilização

export function Carouselbon() {
  return (
    <Carousel>
      <Carousel.Item interval={2000}>
        <img src={image1} alt="First slide" className="carousel-image" />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img src={image2} alt="Second slide" className="carousel-image" />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img src={image3} alt="Third slide" className="carousel-image" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carouselbon;
