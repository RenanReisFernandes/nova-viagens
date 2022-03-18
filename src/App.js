import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Footer from './components/Footer'

import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import About from './pages/About';
import	Destinations from './pages/Destinations'
import Promotions from './pages/Promotions'
import Login from './pages/Login'
import Contact from './pages/Contact'
import Cadastration from './pages/Cadastration';


function App() {
  return (
    <div className="App">

   
      <Router>
      <Navbar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/destinations" element={<Destinations/>} />
            <Route path="/promotions" element={<Promotions/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/cadastration" element={<Cadastration/>} />
            
          </Routes>
      </Router>
   <Footer />

    </div>
  );
}

export default App;
