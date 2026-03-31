import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';




export default function Navbar() {
    const [isActive, setIsActive]=useState("home");
  return (
    
    <nav className='navbar'>
        <div className='logo'>
            <div id='firstName'><b><p>Shreyash</p></b></div>
            <div id='lastName'><b><p>Limbikai</p></b></div>
        </div>
        <div className='menu'>
            <ul className='menuItems'>
                <li className={isActive==="home" ? 'active-nav':''}><Link to="/" onClick={() => {window.scrollTo(0, 0); setIsActive("home");}}>Home</Link></li>
                <li className={isActive==="about"? 'active-nav': ''}><Link to="/About" onClick={() => {window.scrollTo(0, 0); setIsActive("about");}}>About</Link></li>
                <li className={isActive==="skills" ? 'active-nav': ''}><Link to="/Skills" onClick={() => {window.scrollTo(0, 0); setIsActive("skills")}}>Skills</Link></li>
                <li className={isActive==="experience"? 'active-nav' : ''}><Link to="/Experience" onClick={() => {window.scrollTo(0, 0); setIsActive("experience");}}>Experience</Link></li>
                <li className={isActive==="projects"? 'active-nav':''}><Link to="/Projects" onClick={() => {window.scrollTo(0, 0); setIsActive("projects");}}>Projects</Link></li>
                <li className={isActive==="education"? 'active-nav':''}><Link to="/Education" onClick={() => {window.scrollTo(0, 0); setIsActive("education")}}>Education</Link></li>
                <li className={isActive==="certifications"? 'active-nav': ''}><Link to="/Certifications" onClick={() => {window.scrollTo(0, 0); setIsActive("certifications");}}>Certifications</Link></li>
                <li className={isActive==="contact"? 'active-nav':''}><Link to="/Contact" onClick={() => {window.scrollTo(0, 0); setIsActive("contact");}}>Contact</Link></li>
            </ul> 
            <div className='sllogin'>
                <Link to="/login">SL Login</Link>
            </div>
        </div>
        
    </nav>
    
  )
}
