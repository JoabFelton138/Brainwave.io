import React from 'react';
import {Row, Container, Col} from 'react-bootstrap'

function Content(props){
    return (
        <div>
            <Container style={{marginTop: '4vw', textAlign: 'center'}}>
                    <Row >
                        <Col>
                            <h1>{props.title}</h1>
                        </Col>
                    </Row>
                    <div style={{marginTop: '2vw'}}>
                        <Row>
                            <Col>
                                <p>With lots of unique blocks, you can easily build a page without coding
                                <br></br>Build your next consultancy website within a few minutes.</p>
                            </Col>
                        </Row>                    
                    </div>
            </Container>
        </div>
    );
}

export default Content;