import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './components/navigation';
import Content from './components/content';

function App() {
  return (
    <div style={{backgroundColor:'white'}}>
      <Navigation/>
      <Content
        title={'Pricing & Plans'}
      />
       <Content
        title={'Check our features'}
      />
    </div>
  );
}

export default App;
