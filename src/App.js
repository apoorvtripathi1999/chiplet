
import { Route,Routes} from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Collection from './Components/Collections';
import NavbarMain from '../src/Components/NavbarMain'
import Footer from '../src/Components/Footer'
import CollectComp from './Components/CollectComp';
import Productpage from './Components/Productpage';
import Shop from './Components/Shop';
import Login from './Components/Login';
import User from './Components/User';
import Signup from './Components/Signup';
import Kart from './Components/Kart';
function App() {
  return (
    <>
    <NavbarMain/>
    <Routes>
     <Route path='/' element = {<Home/>}/>
     <Route path='/collection' element = {<Collection/>}/>
     <Route path='/collection/:name' element = {<CollectComp/>}/>
     <Route path='/products/:uid' element = {<Productpage/>}/>
     <Route path='/shop' element = {<Shop/>}/>
     <Route path='/login' element = {<Login/>}/>
     <Route path='/user/:UID' element = {<User/>}/>
     <Route path='/signup' element={<Signup/>}/>
     <Route path='/cart' element={<Kart/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
