import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Row, Container} from 'react-bootstrap';

import Navigation from './components/navigation';
import Content from './components/content';
import SwitchContainer from './components/switch-container';
import Pricing from './components/pricing';

function App() {
  return (
    <div style={{backgroundColor:'white'}}>
      <Navigation/>

      <Content
        title={'Pricing & Plans'}
      />

      <SwitchContainer/>

      <div className='pricing-container'>
        <Container className='mt-1'>
            <Row className="justify-content-center">
                <Col sm={3}>
                    <Pricing subtitle={'STARTER'} pricing={19}/>
                </Col>
                <Col sm={3}>
                    <Pricing subtitle={'STANDARD'} pricing={49}/>
                </Col>
                <Col sm={3}>
                    <Pricing subtitle={'PREMIUM'} pricing={99}/>
                </Col>
            </Row>
        </Container>
      </div>

       <Content
        title={'Check our features'}
      />
    </div>
  );
}

export default App;
