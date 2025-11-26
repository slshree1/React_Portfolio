import React from 'react'
import './Homepage.css'
import { motion } from 'framer-motion';
export default function Homepage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
    <div>
      <section className='section11'>
        <div className='s11box'>
            <div id='slphoto'>
            </div>
        </div>
        <div className='s11box'>
            <h1>Shreyash Limbikai</h1>
            <p>Computer Engineering student with strong foundation in Java back-end<br/>
                development using Spring Boot and Hibernate. Seeking to contribute technical<br/> 
                skills and problem-solving abilities to a reputable organization.</p>
            <a href="resume.pdf" download="resume.pdf">Download Resume</a>
        </div>
      </section>
      <section className='section12'>
        <h1>Professionl Roles</h1>
        <p>Exploring diverse dimensions of technology through multiple<br/>
        professional perspectives</p>
        <div className='s12container'>
            <div className='s12cobox'>
                <div className='coboxline'></div>
                <div className='profession-logo'>
                    <i className='fas fa-microchip'></i>
                </div>
                <h2>Computer Engineer</h2>
                <p>Bridging hardware and software with a comprehensive 
                    understanding of computer systems, from embedded devices 
                    to complex architectures.</p>
                <div class="tech-tags">
                    <span class="tech-tag">Embedded Systems</span>
                    <span class="tech-tag">IoT</span>
                    <span class="tech-tag">Computer Architecture</span>
                </div>
                
            </div>
            <div className='s12cobox'>
                <div className='coboxline'></div>
                <div className='profession-logo'>
                     <i className='fas fa-code'></i>
                </div>
                <h2>Software Engineer</h2>
                <p>Specializing in end-to-end software development 
                    from concept to deployment. Skilled in designing, coding, and implementing applications using modern development practices.</p>
                <div class="tech-tags">
                    <span class="tech-tag">Code Implementation</span>
                    {/* <span class="tech-tag">Software Architecture</span> */}
                    <span class="tech-tag">System Design</span>
                    <span class="tech-tag">Application Development</span>
                </div>
            </div>
            <div className='s12cobox'>
                <div className='coboxline'></div>
                <div className='profession-logo'>
                     <i className='fab fa-java'></i>
                </div>
                <h2>Java Developer</h2>
                <p>Building enterprise-grade applications with Java 
                    ecosystem, focusing on performance, scalability, 
                    and maintainability.</p>
                 <div class="tech-tags">
                    <span class="tech-tag">Spring Boot</span>
                    <span class="tech-tag">Hibernate</span>
                    <span class="tech-tag">REST APIs</span>
                </div>
                
            </div>
            <div className='s12cobox'>
                <div className='coboxline'></div>
                <div className='profession-logo'>
                     <i className='fas fa-laptop-code'></i>
                </div>
                <h2>Web Developer</h2>
                <p>Creating responsive and interactive web experiences 
                    with modern frameworks and technologies for seamless 
                    user interaction.</p>
                <div class="tech-tags">
                    <span class="tech-tag">Frontend</span>
                    <span class="tech-tag">Backend</span>
                    <span class="tech-tag">Full Stack</span>
                </div>
            </div>
        </div>
      </section>
      <section className='section13'>
        <div className='s13-head'>
            <h2>Education</h2>
            <p>My academic journey in computer engineering</p>
        </div>
        <div className='education-cards'>
            <div className='education-card'>
                <div class="degree-icon">
                        <i class="fas fa-graduation-cap"></i>
                </div>
                <h3>Bachler Of Technology</h3>
                <p>Sanjay Bhokare Group Of Institutes, Miraj</p>
                <p className='marks'>CGPA: 7.68/10</p>
            </div>
            <div className='education-card'>
                <div class="degree-icon">
                        <i class="fas fa-certificate"></i>
                </div>
                <h3>Diploma In Computer Engineering</h3>
                <p>Sanjay Bhokare Group Of Institutes, Miraj</p>
                <p className='marks'>Percentage: 83.94</p>
            </div>
        </div>
        <a id='fulledu' href="/">View Full Education Details</a>
      </section>
     <section class="core-skills">
        <div class="container">
            <div class="section-title">
                <h2>Core Skills</h2>
                <p>Technologies I work with</p>
            </div>
            
            <div class="skills-grid">
                <div class="skill-item">
                    <div class="skill-icon">
                        <i class="fab fa-java"></i>
                    </div>
                    <div class="skill-name">Java</div>
                </div>
                
                <div class="skill-item">
                    <div class="skill-icon">
                        <i class="fas fa-leaf"></i>
                    </div>
                    <div class="skill-name">Spring Boot</div>
                </div>
                
                <div class="skill-item">
                    <div class="skill-icon">
                        <i class="fas fa-database"></i>
                    </div>
                    <div class="skill-name">MySQL</div>
                </div>
                
                <div class="skill-item">
                    <div class="skill-icon">
                        <i class="fab fa-js"></i>
                    </div>
                    <div class="skill-name">JavaScript</div>
                </div>
                
                <div class="skill-item">
                    <div class="skill-icon">
                        <i class="fas fa-mobile-alt"></i>
                    </div>
                    <div class="skill-name">Flutter</div>
                </div>
                
                <div class="skill-item">
                    <div class="skill-icon">
                        <i class="fas fa-code"></i>
                    </div>
                    <div class="skill-name">HTML/CSS</div>
                </div>
            </div>
        </div>
    </section>
    </div>
    </motion.div>
  )
}
