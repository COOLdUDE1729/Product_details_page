import Details from './components/details' ;
import Info from './components/info' ;
import Reviews from './components/reviews' ;
import Similar from './components/similar' ;
import Footer from './components/footer' ;
import './index.css' ;

function App() {
  return (
     <div className='font-primary'>
    <Details/>
    <Info/>
    <Reviews/>
    {/* <Similar/>
    <Footer/>   */}
    </div>
    
  );
}

export default App;
