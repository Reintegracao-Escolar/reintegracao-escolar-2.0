import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ImgTopoHome from '../img/top-home.png'
import '../css/Home.css'

export default function Home() {
  return (
    <Container fluid id='home'>
      <Row className='align-items-center topo justify-content-md-center'>
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
    </Container>
  )
}
