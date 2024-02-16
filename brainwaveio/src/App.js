import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './components/navigation';
import Content from './components/content';
import SwitchContainer from './components/switch-container';

function App() {
  return (
    <div style={{backgroundColor:'white'}}>
      <Navigation/>
      <Content
        title={'Pricing & Plans'}
      />
      <SwitchContainer/>
       <Content
        title={'Check our features'}
      />
    </div>
  );
}

export default App;
