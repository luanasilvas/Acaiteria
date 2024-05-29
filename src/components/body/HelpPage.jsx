import React from 'react';
import { Contato } from '../Contato/Contato';
import { Card, ListGroup } from 'react-bootstrap';
import './HelpPage.css';

export function HelpPage() {
  return (
    <div className="help-container">
      <h1>Página de Ajuda</h1>
      <p>Se precisar de assistência, consulte as informações abaixo:</p>

      <div className="full-width">
        <Card className="card-container" style={{ width: '5000rem' }}>
          <ListGroup variant="flush">
            <ListGroup.Item>Como usar nosso aplicativo</ListGroup.Item>
            <ListGroup.Item>Dúvidas sobre pagamento</ListGroup.Item>
            <ListGroup.Item>Troca e devolução</ListGroup.Item>
            <ListGroup.Item>Garantias</ListGroup.Item>
            <ListGroup.Item>Contato com fabricantes</ListGroup.Item>
            <ListGroup.Item>FAQs</ListGroup.Item>
          </ListGroup>
        </Card>
      </div>

      <p>Ficou com alguma dúvida?</p>

      <div className="full-width">
        <Card className="card-container" style={{ width: '5000rem' }}>
          <ListGroup variant="flush" className="list-group-container">
            <ListGroup.Item>Atendimento 24 horas</ListGroup.Item>
            <ListGroup.Item>Chat online</ListGroup.Item>
            <ListGroup.Item>Email</ListGroup.Item>
            <ListGroup.Item><Contato/></ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    </div>
  );
}
