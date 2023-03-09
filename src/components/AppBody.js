import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './styles/AppBody.css'
import heroImg from '../imgs/hero-image.jpg'
import aboutImg from '../imgs/about-image.jpg'
const AppBody = () => {
  return (
    <div className='Body'>
        
        <Container>
            <div>
            <Row>
                <Col>
                <Col>
                    <img className='hero-image' alt='doctors' src={heroImg} />
                </Col>
                <div className='hero-text'>
                    <h1>We Are Here To Take care Of You</h1>
                    <button href='#Book'>Book An Appointment Now</button>
                </div>
                </Col>
                
            </Row>
            </div>
            <div id='services'></div>
            <div className='services-section'>
                <h1>Services</h1>
                <Row>
                <Col>
                <div className='service-type'>
                <i class="fa-solid fa-handshake-angle"></i>
                <h3>Health Promotion</h3>
                </div>
                </Col>
                <Col>
                <div className='service-type'>
                <i class="fa-solid fa-user-shield"></i>
                <h3>Disease Prevention</h3>
                </div>
                </Col>
                <Col>
                <div className='service-type'>
                <i class="fa-solid fa-stethoscope"></i>
                <h3>Diagnosis & Treatment</h3>
                </div>
                </Col>
                </Row>
            </div>
            
        </Container>
        
        <div id='about' className='about-wrapper'>
            <Container>
                <div className='about-section'>
                <h1>About</h1>
                <Row>
                <Col>
                <Col>
                <img className='about-image' src={aboutImg} />
                </Col>
                <div className='about-text'>
                    <h2>The purpose of building this website is to reach to people and provide them the necessary and the appropriate help.</h2>
                </div>
                </Col>
                </Row>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default AppBody