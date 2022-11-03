import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import ImgTopoHome from '../img/top-home.png'
import Conheca from '../img/conheca.png'
import '../css/Home.css'

export default function Home() {
  return (
    <Container fluid>
      <section className='topo'>
        <Row className='align-items-center justify-content-md-center'>
          <Col xs={4}>
            <h1>Reintegração Escolar</h1>
            <p>
              A plataforma tem como principal intuito complementar o aprendizado escolar de maneira tecnológica com o objetivo de resgatar e estimular o interesse aos estudos.
            </p>
          </Col>
          <Col xs={4}>
            <img src={ImgTopoHome} className='img-fluid' />
          </Col>
        </Row>
      </section>
      <section className='conheca'>
        <Row className='align-items-center justify-content-md-center'>
          <Col xs={4}>
          <img src={Conheca} className='img-fluid' />
          </Col>
          <Col xs={4}>
          <h2>Conheça o projeto</h2>
          <p>
          Projeto que tem o intuito de fazer o aluno sentir interesse novamente em estudar, de forma diferente e ludica.
          </p>
          <Button>Veja mais</Button>
          </Col>
        </Row>
      </section>
    </Container>
  )
}
