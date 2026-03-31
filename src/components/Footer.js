import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
        <footer className='footer'>
          <div className='section1'>
            <div className='footerBox'>
              <h1>Contact</h1>
              <div className='footerBox-line'></div>
              <a href="#" onClick={(e)=>{
                e.preventDefault();
                navigator.clipboard.writeText('+91 9370657291');
                alert("Phone Number is copied");
              }}>Phone 1: +91 9370657291</a>
              <a href="#" onClick={(e)=>{
                e.preventDefault();
                navigator.clipboard.writeText("+91 9545982903");
                alert("Phone Number is copied");
              }}>Phone 2: +91 9545982903</a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=shreyashlimbikai123@gmail.com" target='_blank' rel="noopener noreferrer">Email 1: shreyashlimbikai123@gmail.com</a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=slshree321@gmail.com" target='_blank' rel="noopener noreferrer">Email 2: slshree321@gmail.com</a>
              <a href="https://www.google.com/maps/search/?api=1&query=Bedage,Miraj,Sangli,Maharashtra" target='_blank' rel="noopener noreferrer">Location: Bedage, Miraj, Sangli, Maharashtra</a>
            </div>
            <div className='footerBox'>
              <h1>Quick Links</h1>
              <div className='footerBox-line'></div>
              <Link to="/">Home</Link>
              <Link to="/About" onClick={() => window.scrollTo(0, 0)}>About</Link>
              <Link to="/Skills" onClick={() => window.scrollTo(0, 0)}>Skills</Link>
              <Link to="/Experience" onClick={() => window.scrollTo(0, 0)}>Experience</Link>
              <Link to="/Projects" onClick={() => window.scrollTo(0, 0)}>Projects</Link>
              <Link to="/Education" onClick={() => window.scrollTo(0, 0)}>Education</Link>
              <Link to="/Contact" onClick={() => window.scrollTo(0, 0)}>Contact</Link>
            </div>
            <div className='footerBox'>
              <h1>Professional Profiles</h1>
              <div className='footerBox-line'></div>
              <a href="https://www.linkedin.com/in/shreyash-limbikai/" target='_blank' rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/slshree1" target='_blank' rel="noopener noreferrer">GitHub</a>
              <a href="https://www.hackerrank.com/profile/shreyashlimbika1" target='_blank' rel="noopener noreferrer">HackerRank</a>
              <a href="#"></a>
            </div>
          </div>
          <div className='section2'>
            <div id='section2-line'></div>
            <p>&copy; 2025 Shreyash Limbikai. All Rights Reserved</p>
          </div>
        </footer>
  )
}
