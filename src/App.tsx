import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes,  Route } from 'react-router-dom';
import About from './pages/About';
import Engineering from './pages/Engineering';
import Networking from './pages/Networking';
import Programming from './pages/Programming';
import Skills from './pages/Skills';
import QuotesGenerator from './QuotesGenerator';
import ContactMe from './pages/ContactMe';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/engineering' element={<Engineering />} />
        <Route path='/networking' element={<Networking />} />
        <Route path='/programming' element={<Programming />} />
        <Route path='/skills' element={<Skills />} />
      </Routes>
      <div>
        <ContactMe />
        <QuotesGenerator />
      </div>
    </Router>
  );
}
export default App;
