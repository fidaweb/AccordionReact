import logo from './logo.svg';
import './App.css';
import backgroundImg from './assets/images/background-pattern-desktop.svg'
import AccordionDemo from './AccordionDemo'
import star from './assets/images/icon-star.svg'
function App() {
  return (
    <div className="App">
      <div className='img_container'>
        {/* <img className='background_img' src={backgroundImg} alt=''/> */}
      
      </div>
      <div className='card'>
      <div className='faq-title'>
        <img src={star} alt=''/>
        <h2>FAQ</h2>
      </div>
      <AccordionDemo/>
      </div>
      
    </div>
  );
}

export default App;
