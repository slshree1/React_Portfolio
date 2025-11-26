import React from 'react'
import './Projects.css'
import { motion } from 'framer-motion';

export default function Project() {
  return (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
    >
        <div className='project-container'>
            <div className='project-section1'>
                <h1>My Projects</h1><br/><br/>
                <p>A showcase of my technical projects and<br/> 
                implementations with cutting-edge technologies</p>
            </div>
            <div className='project-section2'>
              <div className='project-section2-heading'>
                <h2>Featured Projects</h2>
                <div></div>
                <p>Here are some of the projects I've worked 
                  on during my academic and<br/> professional journey</p>
              </div>
              <div className='project-cards'>
                <div className='project-card'>
                  <div className='project-banner'>
                     <img src='https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80" alt="ML & IoT Based Smart Vehicle Health Monitoring'></img>
                     <h3>Featured</h3>
                  </div>
                  <div className='project-content'>
                    <h2 className='project-title'>Smart Vehicle Health Monitoring System</h2>
                    <p>December 2024 – 2025</p>
                    <p>
                      Developed a comprehensive system for monitoring 
                      vehicle health and predicting maintenance needs 
                      using machine learning and IoT technologies. 
                      Reduced development time by 30% using Flutter.
                    </p>
                    <div className='project-skills'>
                      <p className='project-skill'>Flutter</p>
                      <p className='project-skill'>Firebase</p>
                      <p className='project-skill'>Python</p>
                      <p className='project-skill'>Scikit-learn</p>
                      <p className='project-skill'>IoT</p>
                      <p className='project-skill'>Machine Learning</p>
                    </div>
                    <div className='project-buttons'>
                      <a href="#" className='project-btn1'><i className='fas fa-external-link-alt'></i>Live Demo</a>
                      <a href="#" className='project-btn2'><i className='fab fa-github'></i>Source Code</a>
                    </div>
                  </div>
                </div>
                <div className='project-card'>
                  <div className='project-banner'>
                     <img src='https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'></img>
                     <h3>Hardware</h3>
                  </div>
                  <div className='project-content'>
                    <h2 className='project-title'>Smart Car Parking System</h2>
                    <p>March 2024 – September 2024</p>
                    <p>
                      Designed and implemented an IoT-based smart parking 
                      system using microcontrollers and sensors for efficient 
                      parking management with real-time status updates.
                    </p>
                    <div className='project-skills'>
                      <p className='project-skill'>C++</p>
                      <p className='project-skill'>microcontrollers</p>
                      <p className='project-skill'>Sensors</p>
                      <p className='project-skill'>IoT</p>
                      <p className='project-skill'>Hardware Design</p>
                      
                    </div>
                    <div className='project-buttons'>
                      <a href="#" className='project-btn1'><i className='fas fa-external-link-alt'></i>Live Demo</a>
                      <a href="#" className='project-btn2'><i className='fab fa-github'></i>Source Code</a>
                    </div>
                  </div>
                </div>
                <div className='project-card'>
                  <div className='project-banner'>
                     <img src='https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80' alt='ML & IoT Based Smart Vehicle Health Monitoring'></img>
                     <h3>Featured</h3>
                  </div>
                  <div className='project-content'>
                    <h2 className='project-title'>Tour Booking System</h2>
                    <p>June 2023 – February 2024</p>
                    <p>
                      Developed a complete tour booking system with user 
                      authentication, booking management, and payment 
                      processing features. Deployed on cost-effective hosting 
                      platform.
                    </p>
                    <div className='project-skills'>
                      <p className='project-skill'>PHP</p>
                      <p className='project-skill'>MySQL</p>
                      <p className='project-skill'>HTML/CSS</p>
                      <p className='project-skill'>JavaScript</p>
                      <p className='project-skill'>Payment Integration</p>
                      
                    </div>
                    <div className='project-buttons'>
                      <a href="#" className='project-btn1'><i className='fas fa-external-link-alt'></i>Live Demo</a>
                      <a href="#" className='project-btn2'><i className='fab fa-github'></i>Source Code</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='project-section3'>
              <div className='project-section2-heading'>
                <h2>Technical Skills Gained from Projects</h2>
                <div></div>
                <p>Technologies and tools I've worked with across my projects</p>
              </div>
              <div className='project-section3-cards'>
                <div className='project-section3-card'>
                  <div className='section3-card-heading'>
                    <i className='fas fa-code'></i>
                    <h2>Programming</h2>
                  </div>
                  <div className='project-section3-skills'>
                    <p>Java</p>
                    <p>Python</p>
                    <p>c++</p>
                    <p>PHP</p>
                    <p>JavaScript</p>
                    <p>SQL</p>
                  </div>
                </div>
                <div className='project-section3-card'>
                  <div className='section3-card-heading'>
                    <i className='fas fa-layer-group'></i>
                    <h2>Frameworks</h2>
                  </div>
                  <div className='project-section3-skills'>
                    <p>Spring Boot</p>
                    <p>Hibernate</p>
                    <p>REACT</p>
                    <p>Flutter</p>
                    <p>Servlets</p>
                    
                  </div>
                </div>
                <div className='project-section3-card'>
                  <div className='section3-card-heading'>
                    <i className='fas fa-tools'></i>
                    <h2>Tools & Platforms</h2>
                  </div>
                  <div className='project-section3-skills'>
                    <p>Firebase</p>
                    <p>MySQL</p>
                    <p>AWS</p>
                    <p>Aaure</p>
                    <p>Git</p>
                    <p>Docker</p>
                  </div>
                </div>
                <div className='project-section3-card'>
                  <div className='section3-card-heading'>
                    <i className='fas fa-microchip'></i>
                    <h2>Specialization</h2>
                  </div>
                  <div className='project-section3-skills'>
                    <p>IoT</p>
                    <p>Machine Learning</p>
                    <p>Microcontrollers</p>
                    <p>Network Security</p>
                    <p>JavaScript</p>
                    <p>Clooud Computing</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </motion.div>
    
  )
}
