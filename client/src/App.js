import './App.css';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import About from './Components/About';
import { Route } from 'react-router';
function App() {
  return (
    <> 
    <Navbar/>
    <Route exact path='/'>
    <Home/>
    </Route>

    <Route path='/about'>
    <About/>
    </Route>

    <Route path='/contact'>
    <Contact/>
    </Route>

    <Route path='/login'>
    <Login/>
    </Route>

    <Route path='/signup'>
    <Signup/>
    </Route>
    
    </>
  )
    
}

export default App;
