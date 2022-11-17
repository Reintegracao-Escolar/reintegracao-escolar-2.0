import React from 'react'
import { Button, Col, Container, Row, Carousel, Nav } from 'react-bootstrap'
import CarouselCursos from '../components/Carousel'
import '../css/Cursos.css'
import Cursos01 from '../img/img-cursos-01.png'
import Cursos02 from '../img/img-cursos-02.jpg'
import Cursos03 from '../img/img-cursos-03.jpg'
import Cursos04 from '../img/img-cursos-04.jpeg'
import Roda from '../img/roda.png'

export default function Cursos() {
  return (
    <>
      <Container fluid id='cursos'>
        <section>
          <CarouselCursos />
        </section>

        <section id='corpo01'>
          <Row className='align-items-center'>
            <Col>
              <Row className='mb-3'>
                <Col>
                  <img src={Cursos01} className="img-fluid d-none d-md-block" />
                </Col>
                <Col>
                  <img src={Cursos02} className="img-fluid d-none d-md-block" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <img src={Cursos03} className="img-fluid d-none d-md-block" />
                </Col>
                <Col>
                  <img src={Cursos04} className="img-fluid d-none d-md-block" />
                </Col>
              </Row>
            </Col>
            <Col md>
              <h2 className='display-4 text-center my-4'>Aulas Interativas</h2>
              <h4>Aulas dinâmicas</h4>
              <p>
                Melhorar a educação através de tecnologias que dão mais autonomia aos alunos, melhorando a comunicação entre estudantes e professores, e aproximam os aprendizes da turma.
              </p>
              <h4>Palestras</h4>
              <p>
                Esses eventos podem ser dos mais variados tipos e ter como público-alvo crianças, adolescentes ou adultos, além de poder agregar todos que fazem parte da comunidade escolar.
              </p>
              <h4>Estilo Stand-up</h4>
              <p>
                A mensagem tem que ser muito bem dada, contextualizada. Não precisa necessariamente o uso piadas, mas colocar uma descontração para deixar a aula mais leve. Contar histórias, por exemplo, pra prender a atenção do aluno. Isso cria uma fantasia naquele ambiente, que é técnico
              </p>
            </Col>
          </Row>
        </section>

        <section id='corpo02'>
          <Row className='align-items-center'>
            <Col lg className='lateralCursos'>
              <h3 className='display-5 text-light'>Aprenda Jogando</h3>
              <h4>Gamificação</h4>
              <p>
                É um processo para motivar e engajar os alunos nas atividades curriculares através de elementos e mecânicas de vídeo game.
              </p>
              <h4>O mundo joga</h4>
              <p>
                97% dos jovens e adultos do mundo jogam em computadores, celulares e vídeo games, então porque não aplicar isso à educação?
              </p>
              <h4>Público feminino</h4>
              <p>
                40% do público gamer atual é feminino.
              </p>
              <h4>Interação entre os alunos</h4>
              <p>
                A gamificação na educação pode ser usada como uma espécie de competição entre os alunos. Isso faz com que os estudantes interajam mais entre si e, assim, desenvolvam laços de coleguismo e amizade.
              </p>
              <h4>Motivação para os estudos</h4>
              <p>
                Com a gamificação na educação, os alunos se sentem mais motivados e engajados. Estudar pode se tornar mais lúdico, sem que seja necessário aplicar apenas técnicas tradicionais.
              </p>
              <h4>Desenvolvimento de competências socioemocionais</h4>
              <p>
                Com os games, é possível estimular o desenvolvimento de criatividade, autonomia e senso de colaboração no estudante, por exemplo.
              </p>
              <Nav className='justify-content-end'>
                <p className='fonte'>
                Fonte: <a target='_blank' href='https://escolazion.com/blogz/gamificacao-novo-metodo-educacao/'>Escola Zion</a>
                </p>
              </Nav>
            </Col>
            <Col>
              <img src={Roda} className='img-fluid d-none d-lg-block' />
            </Col>
          </Row>
        </section>
      </Container>
    </>
  )
}
