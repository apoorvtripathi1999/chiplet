
import { Route,Routes} from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Market from './Components/Market';


function App() {
  return (
    <>
    <Routes>
     <Route path='/' element = {<Home/>}/>
     <Route path='/shop' element = {<Market/>}/>
    </Routes>
    </>
  );
}

export default App;
