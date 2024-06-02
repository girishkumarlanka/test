import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import VLogs from './pages/VLogs';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './components/Footer.css';
import Articles from './pages/Articles';





function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route path='/' exact element=<Home/> />
           <Route path='/About' element=<About/> />
          <Route path='/VLogs' element=<VLogs/> />   
          <Route path='/Articles' element=<Articles/> />
          <Route path='/Contact' element=<Contact/> />      
        </Routes>
      </Router>
      <Footer/>
    </>
  );
}

export default App;