import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Company from './components/Company/Company';
import Residency from './components/Residence/Residency';
import Value from './components/Value/Value';
import Contact from './components/Contact/Contact';
import GetStarted from './components/GetStarted/GetStarted';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div>
        <div className='white-gradient'/>
      <Header />
      <Content />
      </div>
      <Company /> 
      <Residency /> 
      <Value />
      <Contact />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
