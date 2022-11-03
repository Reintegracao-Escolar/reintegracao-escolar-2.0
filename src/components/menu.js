import React from 'react'
import { Navbar, NavLink, Nav } from 'react-bootstrap'
import Logo from '../img/logo.svg'
import '../css/Menu.css'

export default function Menu() {
  return (
    <Navbar bg='dark' variant='dark' expand='lg' className='px-3'>
        <Navbar.Brand href='/'>
            <img src={Logo} alt='logo' width={70} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls='basic-navbar-nav' />

        <Navbar.Collapse>
            <Nav className="me-auto">
                <NavLink href='/'>Home</NavLink>
                <NavLink href='/sobre'>Sobre</NavLink>
                <NavLink href='/cursos'>Cursos</NavLink>
                <NavLink href='/contato'>Contato</NavLink>
            </Nav>
            <Nav>
                <NavLink href='/login'>Login</NavLink>
                <NavLink href='/cadastro'>Cadastro</NavLink>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}
