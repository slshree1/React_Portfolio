import React from 'react'
import { motion } from 'framer-motion';
import './Experience.css'

export default function Experience() {
  return (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
    >
        <div className='experience-container'>
            <div className='exp-section1'>
                <h1>Professional Experience</h1>
                <p>My journey through internships and learning opportunities</p>
                <div className='exp-section1-box'> 
                    <div className='exp-section1-icon'>
                        <i className='fas fa-user-graduate'></i>
                    </div>
                    <h2>Fresher / Entry Level</h2>
                    <p>I'm currently building my professional experience and haven't worked with any companies yet in a full-time capacity.</p>
                    <p>However, I've gained valuable practical exposure through internships and academic projects that have prepared me for professional software development roles.</p>
                </div>
            </div>
            <div className='exp-section2'>
                <h1>Internship Experience</h1>
                <div className='exp-section2-cards'>
                    <div className='exp-section2-card'>
                        <div className='exp-section2-card-heading'>
                            <div className='exp-section2-icon'>
                                <i className='fas fa-laptop-code'></i>
                            </div>
                            <div className='exp-section2-title'>
                                <h2>Cyber Success</h2>
                                <p>Intern - Java Development</p>
                            </div>
                        </div>
                        <div className='exp-dateloc'>
                            <p><i className='fas fa-calendar'></i>February 2025 - Present | Pune, India</p>
                        </div>
                        <div className='exp-section2-points'>
                            <div className='exp-point'>
                                <i className='fas fa-chevron-right'></i>
                                <p>
                                    Developing enterprise-level applications using 
                                    Java ecosystem including Spring Boot, Hibernate, 
                                    and Servlets
                                </p>
                            </div>
                            <div className='exp-point'>
                                <i className='fas fa-chevron-right'></i>
                                <p>
                                   Building responsive front-end interfaces 
                                   using React and modern web technologies
                                </p>
                            </div>
                            <div className='exp-point'>
                                <i className='fas fa-chevron-right'></i>
                                <p>
                                    Implementing database solutions with 
                                    SQL for efficient data management
                                </p>
                            </div>
                            <div className='exp-point'>
                                <i className='fas fa-chevron-right'></i>
                                <p>
                                    Completing mini-projects that simulate 
                                    real-world business scenarios and requirements
                                </p>
                            </div>
                        </div>
                        <div className='exp-skill-buttons'>
                            <h3>Java</h3>
                            <h3>Spring Boot</h3>
                            <h3>Hibernate</h3>
                            <h3>React</h3>
                            <h3>SQL</h3>
                            <h3>REST APIs</h3>
                        </div>
                    </div>
                    <div className='exp-section2-card'>
                        <div className='exp-section2-card-heading'>
                            <div className='exp-section2-icon'>
                                <i className='fas fa-laptop-code'></i>
                            </div>
                            <div className='exp-section2-title'>
                                <h2>Domain Computers</h2>
                                <p>Intern - Networking</p>
                            </div>
                        </div>
                        <div className='exp-dateloc'>
                            <p><i className='fas fa-calendar'></i>August 2021 - September 2021 | Sangli, Maharashtra, India</p>
                        </div>
                        <div className='exp-section2-points'>
                            <div className='exp-point'>
                                <i className='fas fa-chevron-right'></i>
                                <p>
                                    Configured and simulated network environments 
                                    using Cisco Packet Tracer
                                </p>
                            </div>
                            <div className='exp-point'>
                                <i className='fas fa-chevron-right'></i>
                                <p>
                                   Implemented routing protocols and configured 
                                   networking devices including routers and switches
                                </p>
                            </div>
                            <div className='exp-point'>
                                <i className='fas fa-chevron-right'></i>
                                <p>
                                    Troubleshot network connectivity issues 
                                    across various network topologies
                                </p>
                            </div>
                            <div className='exp-point'>
                                <i className='fas fa-chevron-right'></i>
                                <p>
                                    Gained foundational knowledge of AWS 
                                    and Microsoft Azure cloud computing services
                                </p>
                            </div>
                        </div>
                        <div className='exp-skill-buttons'>
                            <h3>Cisco Packet Tracer</h3>
                            <h3>Networking</h3>
                            <h3>Routing Protocols</h3>
                            <h3>AWS</h3>
                            <h3>Azure</h3>
                            <h3>Network Security</h3>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className='exp-section3'>
                <div className='exp-section3-card'>
                    <h1>Ready to Start My Professional Journey</h1>
                    <p>
                        I'm actively seeking entry-level opportunities and 
                        internships to apply my <br/>skills in real-world projects, 
                        contribute to innovative teams, and begin<br></br> building my 
                        professional experience.
                    </p>
                    <div className='exp-section3-buttons'>
                        <a className='btn1' href="#">
                            <i className='fas fa-code'></i>
                            View My Projects
                        </a>
                        <a className='btn2' href="#">
                            <i className='fas fa-paper-plane'></i>
                            Discuss Opportunities
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
  )
}
