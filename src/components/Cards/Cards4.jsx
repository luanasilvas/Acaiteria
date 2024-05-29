// Cardwbi4.js

import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import image5 from "../../assets/img/juan-cortes-R2zfk4lJSOg-unsplash.jpg";
import image6 from "../../assets/img/branden-skeli-NIO1ZDB5kL0-unsplash.jpg";
import image7 from "../../assets/img/guillermo-diaz-H1a4cIeVZwI-unsplash.jpg"
import image8 from "../../assets/img/hannes-kottner-gjolIrU-j1s-unsplash.jpg"
import "./CardStyles.css"; 

function Cardwbi4() {
  return (
    <div className="card-container"> {/* Adicionei a classe "card-container" */}
      <Card className="custom-card"> {/* Adicionei a classe "custom-card" */}
        <Card.Img src={image5} variant="top" className="card-img" /> {/* Adicionei a classe "card-img" */}
        <Card.Body>
          <Card.Title>Funko filme</Card.Title>
          <Card.Text>
            R$99,00 Receba até terça-feira, 4 de jun. Frete GRÁTIS
          </Card.Text>
          <Button variant="primary">Comprar agora</Button>
        </Card.Body>
      </Card>
      <Card className="custom-card"> {/* Adicionei a classe "custom-card" */}
        <Card.Img src={image6} variant="top" className="card-img" /> {/* Adicionei a classe "card-img" */}
        <Card.Body>
          <Card.Title>Coleção de mangas</Card.Title>
          <Card.Text>
            R$129,99 em até 12x de R$12,13 com juros Receba sexta-feira, 31 de
            mai. - quinta-feira, 6 de jun. R$ 28,53 de frete
          </Card.Text>
          <Button variant="primary">Comprar agora</Button>
        </Card.Body>
      </Card>
      <Card className="custom-card"> {/* Adicionei a classe "custom-card" */}
        <Card.Img src={image7} variant="top" className="card-img" /> {/* Adicionei a classe "card-img" */}
        <Card.Body>
          <Card.Title>FUNKO anime</Card.Title>
          <Card.Text>
            R$129,99 em até 12x de R$12,13 com juros Receba sexta-feira, 31 de
            mai. - quinta-feira, 6 de jun. R$ 28,53 de frete
          </Card.Text>
          <Button variant="primary">Comprar agora</Button>
        </Card.Body>
      </Card>
      <Card className="custom-card"> {/* Adicionei a classe "custom-card" */}
        <Card.Img src={image8} variant="top" className="card-img" /> {/* Adicionei a classe "card-img" */}
        <Card.Body>
          <Card.Title>FUNKO Hary Poter</Card.Title>
          <Card.Text>
            R$129,99 em até 12x de R$12,13 com juros Receba sexta-feira, 31 de
            mai. - quinta-feira, 6 de jun. R$ 28,53 de frete
          </Card.Text>
          <Button variant="primary">Comprar agora</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cardwbi4;
