import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';




export default function Navbar() {
  return (
    
    <nav className='navbar'>
        <a className='logo' href="#">
            <div id='firstName'><b><p>Shreyash</p></b></div>
            <div id='lastName'><b><p>Limbikai</p></b></div>
        </a>
        <div className='menu'>
            <ul className='menuItems'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Skills">Skills</Link></li>
                <li><Link to="/Experience">Experience</Link></li>
                <li><Link to="/Projects">Project</Link></li>
                <li><Link to="/Education">Education</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
            </ul>
            <div className='sllogin'>
                <Link to="/login">SL Login</Link>
            </div>
        </div>
        
    </nav>
    
  )
}
