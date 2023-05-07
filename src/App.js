
import { Route,Routes} from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Market from './Components/Market';
import Collection from './Components/Collections';
import NavbarMain from '../src/Components/NavbarMain'
import Footer from '../src/Components/Footer'
import CollectComp from './Components/CollectComp';
import Productpage from './Components/Productpage';
function App() {
  return (
    <>
    <NavbarMain/>
    <Routes>
     <Route path='/' element = {<Home/>}/>
     <Route path='/shop' element = {<Market/>}/>
     <Route path='/collection' element = {<Collection/>}/>
     <Route path='/collection/:name' element = {<CollectComp/>}/>
     <Route path='/products/:uid' element = {<Productpage/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
