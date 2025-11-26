import React from 'react'
import { motion } from 'framer-motion';
import './About.css'
export default function About() {
  return (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
    >
        <div className='about-page'>
            <div className='ab-section1'>
                <div className='box1'>
                    <h1>My Journey in Technology</h1>
                    <p>From curious student to passionate developer, my journey is defined by<br/> continuous learning and the drive to create meaningful solutions through code.</p>
                </div>
                <div className='box2'>
                    <div className='image-box'>
                        <i class="fas fa-user"></i>
                    </div>
                </div>
            </div>
            <div className='ab-section2'>
                <h1>My Philosophy</h1>
                <div className='section2-cards-box'>
                    <div className='section2-card'>
                        <div className='picon'>
                            <i className='fas fa-lightbulb'></i>
                        </div>
                        <h3>Problem Solving First</h3>
                        <p>
                            I believe technology should solve real problems. Every line of code 
                            I write is driven by the goal of creating practical, efficient solutions 
                            that make a difference.
                        </p>
                    </div>
                    <div className='section2-card'>
                        <div className='picon'>
                            <i className='fas fa-graduation-cap'></i>
                        </div>
                        <h3>Never Stop Learning</h3>
                        <p>
                            In the fast-evolving tech world, continuous learning isn't optional. 
                            I embrace new technologies and methodologies to stay at the forefront 
                            of software development.
                        </p>
                    </div>
                    <div className='section2-card'>
                        <div className='picon'>
                            <i className='fas fa-code'></i>
                        </div>
                        <h3>Clean Code Matters</h3>
                        <p>
                            Writing code that's not just functional but also clean, maintainable, 
                            and scalable is my standard. Good code is readable code that others 
                            can understand and build upon.
                        </p>
                    </div>
                </div>
            </div>


            <div className='ab-section3'>
                <h1>My Development Journey</h1>
                <div className='map-container'>
                    <div className='map-tile'>
                        <div className='tile-box1'>
                            <div className='journey-box'>
                                <h2>The Beginning</h2>
                                <p>
                                    My fascination with technology started 
                                    with understanding how computers work, 
                                    which led me to pursue Computer Engineering 
                                    and discover my passion for software development.
                                </p>
                            </div>
                        </div>
                        <div className='tile-box2'>
                            <div className='circle-icon'>
                                <div className='inner-circle'></div>
                            </div>
                        </div>
                    </div>
                    <div className='map-tile'>
                        <div className='tile-box1'>
                             <div className='circle-icon'>
                                <div className='inner-circle'></div>
                            </div>
                        </div>
                        <div className='tile-box2'>
                            <div className='journey-box'>
                                <h2>Discovering Java</h2>
                                <p>
                                    I found my calling in Java development, 
                                    drawn to its robustness and versatility. 
                                    The Spring Boot ecosystem became my playground 
                                    for building enterprise-level applications.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='map-tile'>
                        <div className='tile-box1'>
                            <div className='journey-box'>
                                <h2>Full-Stack Exploration</h2>
                                <p>
                                    Venturing beyond backend, I explored 
                                    frontend technologies and mobile development 
                                    with Flutter, understanding how different 
                                    technologies converge to create complete solutions.
                                </p>
                            </div>
                        </div>
                        <div className='tile-box2'>
                             <div className='circle-icon'>
                                <div className='inner-circle'></div>
                            </div>
                        </div>
                    </div>
                    <div className='map-tile'>
                        <div className='tile-box1'>
                             <div className='circle-icon'>
                                <div className='inner-circle'></div>
                            </div>
                        </div>
                        <div className='tile-box2'>
                            <div className='journey-box'>
                                <h2>Looking Ahead</h2>
                                <p>
                                    I'm excited to contribute to innovative 
                                    projects, collaborate with experienced 
                                    developers, and continue growing as a 
                                    software engineer while making meaningful 
                                    contributions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='ab-section4'>
                <h1>Beyond Code</h1>
                <p>When I'm not coding, I enjoy activities that keep me inspired and<br></br> balanced.</p>
                <div className='section4-cards-box'>
                    <div className='section4-card'>
                        <div className='interest-icon'>
                            <i className='fas fa-book'></i>
                        </div>
                        <h4>Technical Reading</h4>
                        <p>Exploring programming books and tech blogs to stay updated</p>
                    </div>
                    <div className='section4-card'>
                        <div className='interest-icon'>
                            <i className='fas fa-robot'></i>
                        </div>
                        <h4>IoT Projects</h4>
                        <p>Tinkering with hardware and building smart devices</p>
                    </div>
                    <div className='section4-card'>
                        <div className='interest-icon'>
                            <i className='fas fa-gamepad'></i>
                        </div>
                        <h4>Gaming</h4>
                        <p>Strategic games that challenge problem-solving skills</p>
                    </div>
                    <div className='section4-card'>
                        <div className='interest-icon'>
                            <i className='fas fa-hiking'></i>
                        </div>
                        <h4>Outdoor Activities</h4>
                        <p>Exploring nature and staying active</p>
                    </div>
                </div>
            </div>
            <div className='ab-section5'>
                <h1>Let's Build Something Amazing Together</h1>
                <p>
                    I'm always excited to discuss new opportunities, innovative projects, or<br></br>
                    just have a conversation about technology and development.
                </p>
                <div className='section5-btn-box'>
                    <a href="#">Get In Touch</a>
                    <a href="#">View My Work</a>
                </div>
            </div>
        </div>
    </motion.div>
    
  )
}

