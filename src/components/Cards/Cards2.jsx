import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// Importar imagens
import image1 from "../../assets/img/posterDeco.jpeg";
import image2 from "../../assets/img/posterTotoro.jpeg";
import image3 from "../../assets/img/conjcaneca.jpg";
import image4 from "../../assets/img/mulyadi-Gwx7TvhIN1M-unsplash.jpg";

function Cardwbi2() {
  return (
    <div style={{
      display: 'flex',
      maxWidth: '100%',
      overflowX: 'auto',
      gap: '10px',
      padding: '20px'
    }}>
      <Card style={{ width: "18rem" }} className="card">
        <Card.Img src={image1} variant="top" />
        <Card.Body>
          <Card.Title>QUADRO DECORATIVO</Card.Title>
          <Card.Text>
            R$70,95 Receba até quarta-feira, 5 de jun. R$ 35,40 de frete
          </Card.Text>
          <Button variant="primary">Comprar agora</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }} className="card">
        <Card.Img src={image2} variant="top" />
        <Card.Body>
          <Card.Title>QUADRO DECORATIVO MEU AMIGO TOTORO</Card.Title>
          <Card.Text>
            R$49,00 Receba até quarta-feira, 5 de jun. R$ 35,40 de frete.
          </Card.Text>
          <Button variant="primary">Comprar agora</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }} className="card">
        <Card.Img src={image3} variant="top" />
        <Card.Body>
          <Card.Title>CANECAS EXCLUSIVAS DA LOJA</Card.Title>
          <Card.Text>
            R$99,00 Receba até terça-feira, 4 de jun. Frete GRÁTIS
          </Card.Text>
          <Button variant="primary">Comprar agora</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }} className="card">
        <Card.Img src={image4} variant="top" />
        <Card.Body>
          <Card.Title>Conjunto de Funko</Card.Title>
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

export default Cardwbi2;
