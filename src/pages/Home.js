import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import ImgTopoHome from '../img/top-home.png'
import Conheca from '../img/conheca.png'
import CursosImg from '../img/cursos.png'
import ContatoImg from '../img/contato.png'
import '../css/Home.css'
import Contato from './Contato'

export default function Home() {
  return (
    <Container fluid id='home'>
      <section className='topo'>
        <Row className='align-items-center justify-content-md-center'>
          <Col md={4}>
            <h2>Reintegração Escolar</h2>
            <p>
              A plataforma tem como principal intuito complementar o aprendizado escolar de maneira tecnológica com o objetivo de resgatar e estimular o interesse aos estudos.
            </p>
          </Col>
          <Col xs={4}>
            <img src={ImgTopoHome} className='img-fluid d-none d-md-block' />
          </Col>
        </Row>
      </section>

      <section className='conheca'>
        <Row className='align-items-center justify-content-md-center'>
          <Col xs={4}>
            <img src={Conheca} className='img-fluid d-none d-md-block' />
          </Col>
          <Col md={4}>
            <h2>Conheça o projeto</h2>
            <p>
              Projeto que tem o intuito de fazer o aluno sentir interesse novamente em estudar, de forma diferente e ludica.
            </p>
            <Button href='/sobre'>Veja mais</Button>
          </Col>
        </Row>
      </section>

      <section className='conheca'>
        <Row className='align-items-center justify-content-md-center'>
          <Col md={4}>
            <h2>Cursos</h2>
            <p>
              Conheça como funciona a nossa forma de ensino e como isso pode mudar sua forma e aprender.
            </p>
            <Button href='/cursos'>Veja mais</Button>
          </Col>
          <Col xs={4}>
            <img src={CursosImg} className='img-fluid d-none d-md-block' />
          </Col>
        </Row>
      </section>

      <section className='conheca'>
        <Row className='align-items-center justify-content-md-center'>
          <Col xs={4}>
            <img src={ContatoImg} className='img-fluid d-none d-md-block' />
          </Col>
          <Col md={4}>
            <h2>Entre em contato</h2>
            <p>
              Tire suas dúvidas sobre o projeto,
              nos mandando uma mensagem.
            </p>
            <Button href='/contato'>Envie sua mensagem</Button>
          </Col>
        </Row>
      </section>
    </Container>
  )
}
