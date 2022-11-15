import React from 'react'
import { Button, Col, Container, Row, Form, Nav, FloatingLabel } from 'react-bootstrap'
import ContatoImg from '../img/contatoImg.png'
import '../css/Contato.css'

export default function Contato() {
  return (
    <Container fluid id='contato'>
      <section className=''>
        <Row className='align-items-center justify-content-md-center'>
          <Col md={4}>
            <Form className='formContato'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nome completo</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" placeholder="exemplo@empresa.com" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Mensagem</Form.Label>
              <FloatingLabel label="Escreva aqui sua mensagem">
                <Form.Control
                  as="textarea"
                  placeholder="Escreva aqui sua mensagem"
                  style={{ height: '100px' }}
                />
              </FloatingLabel>
            </Form.Group>

            <div className="d-grid gap-2">
              <Button variant="primary" type='submit'>
                Entrar
              </Button>
            </div>
          </Form>
        </Col>

        <Col xs={4}>
          <img src={ContatoImg} className='img-fluid d-none d-md-block' />
        </Col>
      </Row>
    </section>
    </Container >
  )
}
