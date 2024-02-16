import React from 'react';

import Button from 'react-bootstrap/Switch';
import {Row, Col, Container} from 'react-bootstrap';

function SwitchContainer(){
    return(
        <div className='switch-container'>
            <Container>
                <Row className="justify-content-md-center">
                    <Col>
                        <p>Monthly</p>
                    </Col>
                    <Col>
                        <Button/>
                    </Col>
                    <Col>
                    <p>Yearly</p>
                    </Col>
                    <Col>
                        <div style={{backgroundColor: '#E6E6FA',
                                    color: '#5D3FD3',
                                    width: '7vw',
                                    textAlign: 'center',
                                    borderRadius: '25px'}}>
                            SAVE 25%
                        </div>
                    </Col>
                    <Col>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default SwitchContainer;
