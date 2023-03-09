import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';

function NavBar() {
  return (
    <div className='navbar-section'>
    <div className="navbar-wrapper">
        <Navbar collapseOnSelect expand="lg" >
          
      <Container className='navbar-container'>
      
        <Navbar.Brand className='Logo'>
        <h1 className='main-heading'>
        <a id='logo-section' href='/'>Lugo</a>
        </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          </Nav>
          <Nav className='nav-links'>
            <li><a href='#services'>Services</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#Book'>Book An Appointment</a></li>
          </Nav>
        </Navbar.Collapse>
        
      </Container>
      
    </Navbar>
    </div>
    </div>
  )
}

export default NavBar