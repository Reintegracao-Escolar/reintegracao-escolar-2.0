import React, { useState } from 'react';
import { Button, Col, Container, Row, Form, Nav } from 'react-bootstrap'
import LoginImg from '../img/login.png'
import LoginGoogle from '../img/loginGoogle.png'
import LoginFace from '../img/loginFace.png'
import '../css/Login.css'

export default function Login() {
  return (
    <Container fluid>
      <section className='login'>
        <Row className='align-items-center justify-content-md-center'>
          <Col md={5}>
            <Form className='formLogin'>
              <h5 className='text-center text-light'>Faça aqui o seu login</h5>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="E-mail" />
              </Form.Group>

              <Form.Group className="mb-3 justify-content-end" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Senha" />
                <Nav className='justify-content-end'>
                  <Nav.Link href="/">Esqueci a senha</Nav.Link>
                </Nav>
              </Form.Group>
              <div className="d-grid gap-2">
                <Button variant="primary" type='submit'>
                  Entrar
                </Button>
              </div>

              <h5 className='text-center text-light mt-3'>Ou entre com</h5>
              <Row>
                <Col>
                  <Nav.Link href='#'>
                    <img src={LoginGoogle} className='img-fluid' />
                  </Nav.Link>
                </Col>
                <Col>
                  <Nav.Link href='#'>
                    <img src={LoginFace} className='img-fluid' />
                  </Nav.Link>
                </Col>
              </Row>
            </Form>
          </Col>
          <Col xs={5}>
            <img src={LoginImg} alt='Imagem login' className='img-fluid d-none d-md-block' />
          </Col>
        </Row>
      </section>
    </Container>
  )
}
