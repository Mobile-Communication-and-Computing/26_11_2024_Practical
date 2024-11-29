import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import Login from './Components/Login';
import Dasboard from './Components/Dashboard';
// import Home from './Components/Home';
// import AboutUs from './Components/AboutUs'
// import ContactUs from './Components/ContactUs';


function App() {
  return (
    <div className="App">
      {/* <Router>
        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contact' element={<ContactUs />} />
        </Routes>
      </Router> */}
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/dash' element={<Dasboard/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
