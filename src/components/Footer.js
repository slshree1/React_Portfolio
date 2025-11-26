import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
        <footer className='footer'>
          <div className='section1'>
            <div className='footerBox'>
              <h1>Contact</h1>
              <div className='footerBox-line'></div>
              <a href="#">Phone 1: +91 9370657291</a>
              <a href="#">Phone 2: +91 9545982903</a>
              <a href="#">Email 1: shreyashlimbikai123@gmail.com</a>
              <a href="#">Email 2: slshree321@gmail.com</a>
              <a href="#">Location: Bedage, Miraj, Sangli, Maharashtra</a>
            </div>
            <div className='footerBox'>
              <h1>Quick Links</h1>
              <div className='footerBox-line'></div>
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Skills</a>
              <a href="#">Experience</a>
              <a href="#">Project</a>
              <a href="#">Education</a>
              <a href="#">Contact</a>
            </div>
            <div className='footerBox'>
              <h1>Professional Profiles</h1>
              <div className='footerBox-line'></div>
              <a href="#">LinkedIn</a>
              <a href="#">GitHub</a>
              <a href="#">HackerRank</a>
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
