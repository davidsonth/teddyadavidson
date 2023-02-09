import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes,  Route } from 'react-router-dom';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  );
}
export default App;
