import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import AlunosImg from '../img/alunos.png'
import GameImg from '../img/game.png'
import '../css/Sobre.css'

export default function Sobre() {
  return (
    <main>
      <Container fluid id='sobre'>
        <section className=''>
        <h2 className='text-center mt-4'>Sobre o projeto</h2>
          <Row className='align-items-center justify-content-md-center'>
            <Col xs={4}>
              <img src={AlunosImg} className='img-fluid d-none d-md-block' />
            </Col>
            <Col md={4}>
              <p>
              A plataforma tem como principal intuito complementar o aprendizado escolar de maneira tecnológica baseada nas vivencias cotidianas em sala de aula dos alunos de cada faixa etária. Com o objetivo de resgatar e estimular o interesse aos estudos, a plataforma REINTEGRAÇÃO ESCOLAR disponibiliza conteúdo gamificado onde o usuário se diverte e aprende ao mesmo tempo, através de jogos educativos que promovem desafios em busca de metas tornando o aprendizado mais dinâmico. A gamificação na educação é uma maneira de desenvolver a autoconfiança colocando o aluno no centro do processo de aprendizagem.
              </p>
            </Col>
          </Row>
        </section>
        <section className=''>
        <h2 className='text-center mt-4'>Benefícios da gamificação</h2>
          <Row className='align-items-center justify-content-md-center'>
            <Col md={4}>
            <ul>
                <li>
                Torna o ensino mais atrativo e motivador trazendo interatividade para a sala de aula
                </li>
                <li>
                Estimula o trabalho em equipe, estimulando a ação colaborativa
                </li>
                <li>
                Aumenta o foco a concentração já que os jogos precisam de uma resolução para se ganhar
                </li>
                <li>
                Permite uma melhor assimilação de conteúdo, reduzindo a parte teórica e se concentrando na resolução dos problemas
                </li>
              </ul>
            </Col>
            <Col xs={4}>
            <img src={GameImg} className='img-fluid d-none d-md-block' />
            </Col>
          </Row>
        </section>
      </Container>
    </main>
  )
}
