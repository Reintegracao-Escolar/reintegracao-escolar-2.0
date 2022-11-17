import { Button, Nav } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { BsFillCameraVideoFill } from 'react-icons/bs';
import { FaGamepad } from 'react-icons/fa';
import '../css/Cursos.css'

function CarouselCursos() {
    return (
        <Carousel className='carouselCursos' indicators=''>
            <Carousel.Item indicator="false">
                <div>
                <h2 className='display-1'>Aulas Interativa</h2>
                <Nav className="justify-content-center">
                    <Nav.Link href='' className='botao'>
                        <BsFillCameraVideoFill className='me-2' size="2rem" />
                        Assista uma palestra
                    </Nav.Link>
                </Nav>
                </div>
            </Carousel.Item>

            <Carousel.Item>
                <h2 className='display-1'>Aprenda Jogando</h2>
                <Nav className="justify-content-center">
                    <Nav.Link href='' className='botao'>
                        <FaGamepad className='me-2' size="2rem" />
                        Faça um pequeno teste
                    </Nav.Link>
                </Nav>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselCursos;