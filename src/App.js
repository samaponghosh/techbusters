// import logo from './logo.svg';
// import './App.css';
import About from './components/About';
import Checkout from './components/Checkout';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Payment from './components/Payment';
import Phones from './components/Phones';
import Register from './components/Register';

import { BrowserRouter as Router, 
  Route, 
  Routes
} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
          <Route exact path="/" element={<Navbar/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/register" element={<Register/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/contact' element={<Contact/>}/>
          <Route exact path='/checkout' element={<Checkout/>}/>
          <Route exact path='/payment' element={<Payment/>}/>
          <Route exact path='/phones' element={<Phones/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
