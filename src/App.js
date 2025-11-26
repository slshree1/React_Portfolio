// import logo from './logo.svg';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Contact from './components/Contact';
import Login from './components/Login';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import { AnimatePresence } from 'framer-motion';
import Projects from './components/Projects';
import Education from './components/Education';
import React, { useState, useEffect } from "react";
function AnimatedRoutes(){

   

    return(
        <AnimatePresence>
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/About' element={<About />} />
                <Route path='/Skills' element={<Skills />} />
                <Route path='/Experience' element={<Experience />} />
                <Route path='/Projects' element={<Projects />} />
                <Route path='/Education' element={<Education />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/login' element={<Login/>}/>
            </Routes>
        </AnimatePresence>
    );
}



function App() {
   const [showPopup, setShowPopup] = useState(true);

    const handleClose = () => {
      setShowPopup(false);
    };

  return (
    <div>
      {showPopup && (
        <div style={popupStyle}>
          <div style={popupBox}>
            <h2>Welcome to my website!</h2>
            <p>This Webpage only contains UI Not Backend</p>
            <p>Developer is currently Working on it</p>
            <p>Click OK to view Webpage</p>
            <button style={popupButton} onClick={handleClose}>OK</button>
          </div>
        </div>
      )}

      {!showPopup && (
        <Router basename='React_Portfolio'>
          <Navbar />
          <div className='mainContent'>
            <AnimatedRoutes />
          </div>
          <Footer />
        </Router>
      )}
    </div>

    
    
    
  );
}
const popupStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const popupButton={
  height: "30px",
  width: "100px",
  borderRadius: "10px",
}
const popupBox = {
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "20px",
  textAlign: "center",
};
export default App;
