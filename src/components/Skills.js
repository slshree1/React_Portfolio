import React from 'react'
import './Skills.css'
import { motion } from 'framer-motion';


export default function Skills() {
  return (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
    >
        <div className='skills-container'>
            <div className='skills-section1'>
                <h1>Technical Experties</h1>
                <p>Mastering the tools and technologies that power modern digital solutions</p>
            </div>
            <div className='skills-section2'>
                <div className='section2-box'>
                    <div className='box-heading'>
                        <div className='skill-box-icon'>
                            <i className='fas fa-code'></i>
                        </div>
                        <h2>Programming<br></br> Languages</h2>
                    </div>

                    <div className='skill-card'>
                        <div className='skill-card-heading'>
                            <h2>Java</h2>
                            <h2 className='skill-rate'>Expert</h2>
                        </div>
                        <p>Strong object-oriented programming 
                            foundation with expertise in building 
                            scalable enterprise applications.
                        </p>
                        <div className='skill-btn-container'>
                            <h3>Spring Boot</h3>
                            <h3>Hibernate</h3>
                            <h3>Multithreading</h3>
                        </div>
                    </div>
                    <div className='skill-card'>
                        <div className='skill-card-heading'>
                            <h2>SQL</h2>
                            <h2 className='skill-rate'>Advance</h2>
                        </div>
                        <p>
                            Database design, optimization, and 
                            complex query writing for efficient 
                            data management.
                        </p>
                        <div className='skill-btn-container'>
                            <h3>My SQL</h3>
                            <h3>Database Design</h3>
                            <h3>Query Optimization</h3>
                        </div>
                    </div>
                    <div className='skill-card'>
                        <div className='skill-card-heading'>
                            <h2>HTML</h2>
                            <h2 className='skill-rate'>Advanced</h2>
                        </div>
                        <p>
                            Expert in creating semantic, accessible, and 
                            SEO-friendly web pages using modern HTML5 standards. 
                            Strong focus on clean markup and cross-browser compatibility.
                        </p>
                        <div className='skill-btn-container'>
                            <h3>HTML5</h3>
                            <h3>Semantic Markup</h3>
                            <h3>Web Accessibility</h3>
                            <h3>SEO Optimization</h3>
                            <h3>Forms & Validation</h3>
                            <h3>Responsive Design</h3>
                        </div>
                    </div>
                </div>
                <div className='section2-box'>
                    <div className='box-heading'>
                        <div className='skill-box-icon'>
                            <i className='fas fa-cogs'></i>
                        </div>
                        <h2>Frameworks &<br></br> Technologies</h2>
                    </div>

                    <div className='skill-card'>
                        <div className='skill-card-heading'>
                            <h2>Spring</h2>
                            <h2 className='skill-rate'>Advanced</h2>
                        </div>
                        <p>
                            Enterprise application development with 
                            microservices architecture and REST API design.
                        </p>
                        <div className='skill-btn-container'>
                            <h3>Spring Boot</h3>
                            <h3>Hibernate</h3>
                            <h3>Multithreading</h3>
                            <h3>REST API's</h3>
                            <h3>Security</h3>
                            <h3>Data JPA</h3>
                        </div>
                    </div>
                    <div className='skill-card'>
                        <div className='skill-card-heading'>
                            <h2>React</h2>
                            <h2 className='skill-rate'>Intermediate</h2>
                        </div>
                        <p>
                             Building dynamic user interfaces with modern 
                             React, utilizing hooks, component-based 
                             architecture, and state management.
                        </p>
                        <div className='skill-btn-container'>
                            <h3>React Hooks</h3>
                            <h3>Component Lifecycle</h3>
                            <h3>State Management</h3>
                            <h3>JSX Syntax</h3>
                            <h3>Functional Components</h3>
                            <h3>React Router</h3>
                        </div>
                    </div>
                    <div className='skill-card'>
                        <div className='skill-card-heading'>
                            <h2>Flutter</h2>
                            <h2 className='skill-rate'>Intermediate</h2>
                        </div>
                        <p>
                            Building cross-platform mobile applications 
                            with beautiful UI and smooth animations.
                        </p>
                        <div className='skill-btn-container'>
                            <h3>Cross Platform</h3>
                            <h3>Firebase</h3>
                            <h3>Multithreading</h3>
                            <h3>Stat Management</h3>
                            
                        </div>
                    </div>
                </div>
                <div className='section2-box'>
                    <div className='box-heading'>
                        <div className='skill-box-icon'>
                            <i className='fas fa-tools'></i>
                        </div>
                        <h2>Tools &<br></br> Platforms</h2>
                    </div>

                    <div className='skill-card'>
                        <div className='skill-card-heading'>
                            <h2>VS Code</h2>
                            <h2 className='skill-rate'>Expert</h2>
                        </div>
                        <p>
                            Primary code editor with extensive extensions 
                            for efficient development workflow.
                        </p>
                        <div className='skill-btn-container'>
                            <h3>Extensions</h3>
                            <h3>Debugging</h3>
                            <h3>Productivity</h3>
                        </div>
                    </div>
                    <div className='skill-card'>
                        <div className='skill-card-heading'>
                            <h2>Eclipse IDE</h2>
                            <h2 className='skill-rate'>Expert</h2>
                        </div>
                        <p>
                            Extensive experience with Eclipse for Java 
                            enterprise development, including plugin 
                            ecosystem, debugging, and team collaboration features.
                        </p>
                        <div className='skill-btn-container'>
                            <h3>Java EE</h3>
                            <h3>Spring Tools</h3>
                            <h3>Maven Integration</h3>
                            <h3>Debugging</h3>
                            <h3>Git Integration</h3>
                            <h3>Code Templates</h3>
                        </div>
                    </div>
                    <div className='skill-card'>
                        <div className='skill-card-heading'>
                            <h2>Spring Tool Suite</h2>
                            <h2 className='skill-rate'>Advanced</h2>
                        </div>
                        <p>
                            Expert in using Spring Tool Suite for enterprise 
                            Spring development with integrated Spring Boot 
                            support, live coding, and application monitoring.
                        </p>
                        <div className='skill-btn-container'>
                            <h3>Spring Boot Dashboard</h3>
                            <h3>Live Coding Support</h3>
                            <h3>Application Properties</h3>
                            <h3>Spring Initializr</h3>
                            <h3>Dependency Management</h3>
                            <h3>Project Templates</h3>
                        </div>
                    </div>
                </div>
            </div>



            <div className='skills-section3'>
                <div className='section3-card'>
                    <h1>5+</h1>
                    <h3>Technologies Mastered</h3>
                </div>
                <div className='section3-card'>
                    <h1>3+</h1>
                    <h3>Projects Completed</h3>
                </div>
                <div className='section3-card'>
                    <h1>0</h1>
                    <h3>Years Experience</h3>
                </div>
                <div className='section3-card'>
                    <h1>3</h1>
                    <h3>Certifications</h3>
                </div>
            </div>
            <div className='skills-section4'>
                <div className='section4-box'>
                    <h1>Technology Stack</h1>
                    <div className='skill-section4-cards'>
                        <div className='skill-section4-card'>
                            <div className='skill-section4-icon'>
                                <i className='fab fa-java'></i>
                            </div>
                            <h2>Java</h2>
                            <p>Backend</p>
                        </div>
                        <div className='skill-section4-card'>
                            <div className='skill-section4-icon'>
                                <i className='fas fa-leaf'></i>
                            </div>
                            <h2>Spring Boot</h2>
                            <p>Framework</p>
                        </div>
                        <div className='skill-section4-card'>
                            <div className='skill-section4-icon'>
                                <i className='fas fa-database'></i>
                            </div>
                            <h2>MySQL</h2>
                            <p>Database</p>
                        </div>
                        <div className='skill-section4-card'>
                            <div className='skill-section4-icon'>
                                <i className='fas fa-mobile-alt'></i>
                            </div>
                            <h2>Flutter</h2>
                            <p>Mobile</p>
                        </div>
                        <div className='skill-section4-card'>
                            <div className='skill-section4-icon'>
                                <i className='fab fa-js'></i>
                            </div>
                            <h2>JavaScript</h2>
                            <p>Frontend</p>
                        </div>
                        <div className='skill-section4-card'>
                            <div className='skill-section4-icon'>
                                <i className='fas fa-fire'></i>
                            </div>
                            <h2>Firebase</h2>
                            <p>Backend</p>
                        </div>
                        <div className='skill-section4-card'>
                            <div className='skill-section4-icon'>
                                <i className='fab fa-git-alt'></i>
                            </div>
                            <h2>Git</h2>
                            <p>Version Control</p>
                        </div>
                        <div className='skill-section4-card'>
                            <div className='skill-section4-icon'>
                                <i className='fas fa-microchip'></i>
                            </div>
                            <h2>IoT</h2>
                            <p>Embeded Systems</p>
                        </div>
                        <div className='skill-section4-card'>
                            <div className='skill-section4-icon'>
                                <i className='fab fa-react'></i>
                            </div>
                            <h2>React</h2>
                            <p>Frontend</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='skills-section5'>
                <div className='skills-section5-box'>
                    <h1>Learning Journey</h1>
                    <div className='skills-section5-cards'>
                        <div className='skills-section5-card'>
                            <div className='skills-section5-icon'>
                                <i className='fas fa-laptop-code'></i>
                            </div>
                            <h2>Foundation</h2>
                            <p>Started with programming basics and computer fundamentals</p>
                        </div>
                        <div className='skills-section5-card'>
                            <div className='skills-section5-icon'>
                                <i className='fas fa-mobile'></i>
                            </div>
                            <h2>Specialization</h2>
                            <p>Focused on Java backend and mobile development</p>
                        </div>
                        <div className='skills-section5-card'>
                            <div className='skills-section5-icon'>
                                <i className='fas fa-rocket'></i>
                            </div>
                            <h2>Advanced</h2>
                            <p>Mastering enterprise architecture and advanced concepts</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
   
  )
}
