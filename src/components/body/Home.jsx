// Home.jsx

import React from "react";
import { Carouselbon } from "../Carousel/Carousel.jsx";
import { Carouselcards1 } from "../Carousel/Carouselcards1.jsx";
import { Carouselcards2 } from "../Carousel/Carouselcards2.jsx";
import "./Home.css"; // Importando o arquivo de estilos

export function Home() {
  return (
    <div className="home-container"> {/* Adicione uma div envolvendo todo o conteúdo da Home */}
      <Carouselbon />
      <h1 id="prodestaq">MAIS VENDIDOS</h1>
      <Carouselcards1 />
      <h1 id="mangdestaq">DESTAQUES</h1>
      <Carouselcards2 />
    </div>
  );
}
