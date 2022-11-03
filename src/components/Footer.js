import React from 'react'
import { Col, Row, NavLink, Container } from 'react-bootstrap'
import '../css/Footer.css'

export default function Footer() {
    return (
        <Container fluid>
            <Row className='align-items-center text-center footer'>
                <Col>
                    <h4>REINTEGRAÇÃO ESCOLAR</h4>
                    <p>
                        É um projeto voltado para o estímulo da educação através da tecnologia.
                    </p>
                </Col>
                <Col>
                    <h4>Menu</h4>
                    <NavLink href='/'>Home</NavLink>
                    <NavLink href='/sobre'>Sobre</NavLink>
                    <NavLink href='/cursos'>Cursos</NavLink>
                    <NavLink href='/contato'>Contato</NavLink>
                </Col>
                <Col>
                    <h4>Contato</h4>
                    <p>email@examplo.com</p>
                </Col>
            </Row>
            <section className='final'>
                <p>
                    &copy; 2022 Copyright: <a href='/'>Reintegração Escolar</a>
                </p>
                <p>
                ilustrações fonte: <a href=''>Storyset</a>
                </p>
            </section>
        </Container>
    )
}
