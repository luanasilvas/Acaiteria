// Cardwbi3.js

import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import image1 from "../../assets/img/matt-popovich-0FZrPECK5cg-unsplash.jpg";
import image2 from "../../assets/img/halfcut-pokemon-WC_Qjaryv4Y-unsplash.jpg";
import image3 from "../../assets/img/ashlee-brown-mzjZ4TPhjFs-unsplash.jpg"
import image4 from "../../assets/img/nik-6HzhFuiVO60-unsplash.jpg"
import "./CardStyles.css"; 

function Cardwbi3() {
  return (
    <div className="card-container"> {/* Adicionei a classe "card-container" */}
      <Card className="custom-card"> {/* Adicionei a classe "custom-card" */}
        <Card.Img src={image1} variant="top" className="card-img" /> {/* Adicionei a classe "card-img" */}
        <Card.Body>
          <Card.Title>Posters de filme e series</Card.Title>
          <Card.Text>
            R$70,95 Receba até quarta-feira, 5 de jun. R$ 35,40 de frete
          </Card.Text>
          <Button variant="primary">Comprar agora</Button>
        </Card.Body>
      </Card>
      <Card className="custom-card"> {/* Adicionei a classe "custom-card" */}
        <Card.Img src={image2} variant="top" className="card-img" /> {/* Adicionei a classe "card-img" */}
        <Card.Body>
          <Card.Title>Funko de pokemon</Card.Title>
          <Card.Text>
            R$49,00 Receba até quarta-feira, 5 de jun. R$ 35,40 de frete.
          </Card.Text>
          <Button variant="primary">Comprar agora</Button>
        </Card.Body>
      </Card>
      <Card className="custom-card"> {/* Adicionei a classe "custom-card" */}
        <Card.Img src={image3} variant="top" className="card-img" /> {/* Adicionei a classe "card-img" */}
        <Card.Body>
          <Card.Title>Conjunto de funkos</Card.Title>
          <Card.Text>
            R$49,00 Receba até quarta-feira, 5 de jun. R$ 35,40 de frete.
          </Card.Text>
          <Button variant="primary">Comprar agora</Button>
        </Card.Body>
      </Card>
      <Card className="custom-card"> {/* Adicionei a classe "custom-card" */}
        <Card.Img src={image4} variant="top" className="card-img" /> {/* Adicionei a classe "card-img" */}
        <Card.Body>
          <Card.Title>Boneco de lego de filme</Card.Title>
          <Card.Text>
            R$49,00 Receba até quarta-feira, 5 de jun. R$ 35,40 de frete.
          </Card.Text>
          <Button variant="primary">Comprar agora</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cardwbi3;
