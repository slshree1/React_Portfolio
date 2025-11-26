import React from 'react'
import { motion } from 'framer-motion';
import './Education.css'

export default function Education() {
  return (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
    >
        <div>
            <div className='education-section1'>
                <h1>Education</h1>
                <p>My academic journey and qualifications</p>
            </div>
            <div className='education-section2'>
                <div className='education-section2-card'>
                    <div className='education-card-heading'>
                        <div className='education-card-logo'>
                            <i className='fas fa-graduation-cap'></i>
                        </div>
                        <div className='education-card-heading-content'>
                            <h3>Bachelor of Technology in Computer Engineering</h3>
                            <p className='clg-name'>Sanjay Bhokare Group Of Institutes, Miraj</p>
                            <span className='education-period'>2022 – 2025</span>
                        </div>
                    </div>
                    <p>
                        Affiliated with Dr. Babasaheb Ambedkar Technological 
                        University (DBATU). Focused on advanced computer science 
                        concepts, software engineering, and emerging technologies 
                        with strong emphasis on practical applications.
                    </p>
                    <h2 className='edu-desc'><i className='fas fa-trophy'></i>Key Achievements</h2>
                    <p className='edu-desc'><i className='fas fa-star'></i>CGPA: 7.27/10</p>
                    <p className='edu-desc'><i className='fas fa-award'></i>Top 10 performer of college batch</p>
                    <p className='edu-desc'><i className='fas fa-project-diagram'></i>Completed multiple technical projects</p>
                </div>
                <div className='education-section2-card'>
                    <div className='education-card-heading'>
                        <div className='education-card-logo'>
                            <i className='fas fa-user-graduate'></i>
                        </div>
                        <div className='education-card-heading-content'>
                            <h3>Diploma in Computer Engineering</h3>
                            <p className='clg-name'>Sanjay Bhokare Group Of Institutes, Miraj</p>
                            <span className='education-period'>2019 – 2022</span>
                        </div>
                    </div>
                    <p>
                        Completed MSBTE curriculum with focus on foundational computer 
                        engineering concepts, programming fundamentals, hardware basics, 
                        and software development. Gained practical experience through labs 
                        and projects.
                    </p>
                    <h2 className='edu-desc'><i className='fas fa-trophy'></i>Key Achievements</h2>
                    <p className='edu-desc'><i className='fas fa-star'></i>Percentage: 83.94%</p>
                    <p className='edu-desc'><i className='fas fa-award'></i>Top 10 performer of college batch</p>
                    <p className='edu-desc'><i className='fas fa-cogs'></i>Developed strong technical foundation</p>
                </div>
            </div>
            <div className='education-section3'>
                <h1>Academic Excellence</h1>
                <p>Key metrics from my educational journey</p>
                <div className='exc-container'>
                    <div className='exc-card'>
                        <i className='fas fa-calendar-alt'></i>
                        <h1>6+</h1>
                        <p>Years Of Education</p>
                    </div>
                    <div className='exc-card'>
                        <i className='fas fa-graduation-cap'></i>
                        <h1>2</h1>
                        <p>Degrees Completed</p>
                    </div>
                    <div className='exc-card'>
                        <i className='fas fa-trophy'></i>
                        <h1>Top 10</h1>
                        <p>Academic Rank</p>
                    </div>
                    <div className='exc-card'>
                        <i className='fas fa-percentage'></i>
                        <h1>7.27/10</h1>
                        <p>Degree Score</p>
                    </div>
                    <div className='exc-card'>
                        <i className='fas fa-percentage'></i>
                        <h1>83.94%</h1>
                        <p>Diploma Score</p>
                    </div>
                </div>
            </div>
            <div className='education-section3 education-section4'>
                 <h1>Academic Focus Areas</h1>
                <p>Key subjects and skills developed during my education</p>
                <div className='focus-cards'>
                    <div className='focus-card'>
                        <div className='focus-card-heading'>
                            <i className='fas fa-laptop-code'></i>
                            <h2>Programming</h2>
                        </div>
                        <div className='focus-buttons'>
                            <p>Java</p>
                            <p>SQL</p>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>JavaScript</p>
                        </div>
                    </div>
                    <div className='focus-card'>
                        <div className='focus-card-heading'>
                            <i className='fas fa-cogs'></i>
                            <h2>Technologies</h2>
                        </div>
                        <div className='focus-buttons'>
                            <p>Spring</p>
                            <p>Spring Boot</p>
                            <p>Hibernate</p>
                            <p>React</p>
                            <p>Flutter</p>
                            <p>Firebase</p>
                            <p>MySQL</p>
                        </div>
                    </div>
                    <div className='focus-card'>
                        <div className='focus-card-heading'>
                            <i className='fas fa-microchip'></i>
                            <h2>Specialization</h2>
                        </div>
                        <div className='focus-buttons'>
                            <p>Java Backend</p>
                            <p>Web Development</p>
                            <p>Mobile Development</p>
                            <p>IoT</p>
                            <p>Clouc Computing</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='education-section5'>
                <h2>Academic Verification</h2>
                <p>For verification of academic records or transcripts</p>
                <div className='verification-cards'>
                    <div className='verification-card'>
                        <i className='fas fa-envelope'></i>
                        <h3>Email</h3>
                        <p>shreyashlimbikai123@gmail.com</p>
                    </div>
                    <div className='verification-card'>
                        <i className='fas fa-phone-alt'></i>
                        <h3>Phone</h3>
                        <p>+91 9370657291</p>
                    </div>
                    <div className='verification-card'>
                        <i className='fas fa-map-marker-alt'></i>
                        <h3>Location</h3>
                        <p>Miraj, Maharashtra</p>
                    </div>
                    <div className='verification-card'>
                        <i className='fas fa-file-certificate'></i>
                        <h3>Documents</h3>
                        <p>Available On Request</p>
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
    
  )
}
