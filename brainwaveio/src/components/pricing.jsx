import React from 'react';

import {Card, Button} from 'react-bootstrap';

function Pricing(props){
    return (
        <Card className='shadow d-block rounded' style={{ width: '15rem' }}>
            <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">{props.subtitle}</Card.Subtitle>
                <Card.Title>${props.pricing} / Month</Card.Title>
                <p className="mb-2 text-muted">billed monthly</p>
                <Card.Text>
                <ul style={{ textAlign: 'left', marginLeft: '2vw'}}>
                    <li>Commercial</li>
                    <li>100+ HTML UI</li>
                    <li>Unlimited Domain</li>
                    <li>6 Month Premium</li>
                    <li>Lifetime Update</li>
                </ul> 
                </Card.Text>
                <Button className="custom-btn">Start Free Trial</Button>
                <p style={{marginTop: '1vw'}} className="text-muted">no credit card required</p>
            </Card.Body>
        </Card>
    );
}

export default Pricing;