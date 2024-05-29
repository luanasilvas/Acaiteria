import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import image1 from "../../assets/img/posterJurasic.jpeg";
import image2 from "../../assets/img/posterChuck.jpeg";
import image3 from "../../assets/img/BONNUS.jpg";
import image4 from "../../assets/img/posterAvengers.jpeg";

function HorizontalCardContainer() {
  return (
    <div style={{
      display: 'flex',
      maxWidth: '100%',
      overflowX: 'auto',
      gap: '10px',
      padding: '20px'
    }}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image1} />
        <Card.Body>
          <Card.Title>POSTER JURASSIC ERA</Card.Title>
          <Card.Text>R$78,90</Card.Text>
          <Button variant="primary">Comprar agora</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image2} />
        <Card.Body>
          <Card.Title>QUADRO DECORATIVO FILME CHUCKY</Card.Title>
          <Card.Text>R$150,30</Card.Text>
          <Button variant="primary">Comprar agora</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image3} />
        <Card.Body>
          <Card.Title>POSTER EXCLUSIVO DA LOJA</Card.Title>
          <Card.Text>R$59,00</Card.Text>
          <Button variant="primary">Comprar agora</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image4} />
        <Card.Body>
          <Card.Title>QUADRO DECORATIVO FILME OS VINGADORES</Card.Title>
          <Card.Text>R$46,95</Card.Text>
          <Button variant="primary">Comprar agora</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default HorizontalCardContainer;
