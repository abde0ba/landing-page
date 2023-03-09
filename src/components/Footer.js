import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './styles/Footer.css'

const Footer = () => {
  return (
    <div className='footer-section'>
        <Container>
            <Row>
                <Col md={3}>
                <ul className='footer-navs'>
                <li><a href='/'>Home</a></li>
                <li><a href='#services'>Services</a></li>
                <li><a href='#about'>About</a></li>
                </ul>
                </Col>
                <Col md={3}>
                <ul className='footer-navs'>
                <li><a href='#privacy-policies'>Privacy Polocies</a></li>
                <li><a href='#terms&conditions'>Terms & Conditions</a></li>
                </ul>
                </Col>
                <Col>
                <button>Book An Appointment</button>
                </Col>
            </Row>
            </Container>

            <div className='copyright-social'>
                <Container>
                <Row>
                    <Col md={4}>
                        <p>© Copyright Lugo. All rights reserved</p>
                    </Col>
                    <Col md={{ span: 4, offset: 4 }}>
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-twitter"></i>
                    </Col>
                </Row>
                </Container>
            </div>
       
    </div>
  )
}

export default Footer