import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <div style={{ height: 'auto', backgroundColor: '#001933', marginTop:'2vw', textAlign: 'center' }}>   
                <Container>
                    <Row>
                        <Col className='m-4'>
                            <p className='footer-header'>Company</p>
                        </Col>
                        <Col className='m-4'>
                            <p className='footer-header'>Product</p>
                        </Col>
                        <Col className='m-4'>
                            <p className='footer-header'>Services</p>
                        </Col>
                        <Col className='m-4'>
                            <p className='footer-header'>Legal</p>
                        </Col>
                        <Col className='m-4'>
                            <p className='footer-header'>Contact us</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <p className='footer-options'>About us</p>
                        </Col>
                        <Col>
                            <p className='footer-options'>Features</p>
                        </Col>
                        <Col>
                            <p className='footer-options'>Digital Marketing</p>
                        </Col>
                        <Col>
                            <p className='footer-options'>Privacy Policy</p>
                        </Col>
                        <Col>
                            <p className='footer-options'>support@brainwave.io</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <p className='footer-options'>Contact Us</p>
                        </Col>
                        <Col>
                            <p className='footer-options'>Prices</p>
                        </Col>
                        <Col>
                            <p className='footer-options'>Content Writing</p>
                        </Col>
                        <Col>
                            <p className='footer-options'>Terms & Conditions</p>
                        </Col>
                        <Col>
                            <p className='footer-options'>+133-394-3439-1435</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <p className='footer-options'>Careers</p>
                        </Col>
                        <Col>
                            <p className='footer-options'>News</p>
                        </Col>
                        <Col>
                            <p className='footer-options'>SEO for Business</p>
                        </Col>
                        <Col>
                            <p className='footer-options'>Return Policy</p>
                        </Col>
                        <Col>
                            <p className='footer-options'></p>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <p className='footer-options'>Press</p>
                        </Col>
                        <Col>
                            <p className='footer-options'>Helpdesk</p>
                        </Col>
                        <Col>
                            <p className='footer-options'>UI Design</p>
                        </Col>
                        <Col>
                            <p></p>
                        </Col>
                        <Col>
                            <p></p>
                        </Col>
                    </Row>

                    <Row>
                        <Col className='last-col'>
                            <p></p>
                        </Col>
                        <Col className='last-col'>
                            <p className='footer-options'>Support</p>
                        </Col>
                        <Col className='last-col'>
                            <p></p>
                        </Col>
                        <Col className='last-col'>
                            <p></p>
                        </Col>
                        <Col className='last-col'>
                            <p></p>
                        </Col>
                    </Row>
            </Container>
        </div>
    );
}

export default Footer;