import React, {useState} from 'react'
import './Contact.css'
import { motion } from 'framer-motion';
export default function Contact() {
 
   const [activeTab, setActiveTab]= useState('general');
   const handleTabClick=(tabId)=>{
    setActiveTab(tabId);
   }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
    <div className='contact-container'>
      <h2>Get In Touch</h2>
      <p>I'm always open to discussing new opportunities, projects, and collaborations</p>
      <div className='section21'>
        <div className='contact-details'>
          <h1>Contact Details</h1>
          <div className='line'></div><br></br>
          <div className='contact-detail-card'>
            <div className="contact-icon">
              <i className="fas fa-phone"></i>
            </div>
            <div className="contact-text">
              <h3>Phone</h3>
              <p>+91 9370657291</p>
            </div>
          </div><br/>
          <div className='contact-detail-card'>
            <div className='contact-icon'>
              <i className="fas fa-envelope"></i>
            </div>
            <div className='contact-text'>
              <h3>Email</h3>
              <p>shreyashlimbikai123@gmail.com</p>
            </div>
          </div><br></br>
          <div className='contact-detail-card'>
            <div className='contact-icon'>
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className='contact-text'>
              <h3>Location</h3>
              <p>Bedage, Miraj, Sangli</p>
            </div>
          </div><br/><br/>
          <h1>Professional Profiles</h1>
          <div className='line'></div><br/> 
          <div className='profiles-grid'>
            <a href='#' className='profile-card'>
              <div className='profile-icon'>
                <i className="fab fa-linkedin-in"></i>
              </div>
              <div className='profile-name'>LinkedIn</div>
            </a>
            <a href='#' className='profile-card'>
              <div className='profile-icon'>
                <i className="fab fa-github"></i>
              </div>
              <div className='profile-name'>GitHub</div>
            </a>
            <a href='#' className='profile-card'>
              <div className='profile-icon'>
                <i className="fab fa-twitter"></i>
              </div>
              <div className='profile-name'>Twiter</div>
            </a>
            <a href='#' className='profile-card'>
              <div className='profile-icon'>
                <i className="fab fa-facebook-f"></i>
              </div>
              <div className='profile-name'>Facebook</div>
            </a>
          </div>
        </div>
        <div className='contact-forms'>
          <div className='btn-container'>
            <button className={`tab-btn ${activeTab==='general' ? 'active': ''}`} onClick={()=>handleTabClick('general')}>General Enquiry</button>
            <button className={`tab-btn ${activeTab==='job' ? 'active' : ''}`} onClick={()=>handleTabClick('job')}>Job Offer</button>
            <button className={`tab-btn ${activeTab==='project' ? 'active':''}`} onClick={()=>handleTabClick('project')}>Project Development</button>
            <button className={`tab-btn ${activeTab==='collab' ? 'active':''}`} onClick={()=>handleTabClick('collab')}>Collaboration</button>
          </div>
          <div className='form-line'></div><br/>


          <div id='general' className={`tab-content ${activeTab==='general'? 'active': ''}`}>
            <h3 className='form-title'>General Enquiry</h3><br/>
            <div className='form-line'></div>
            <form>
              <div className='two-input-container'>
                <div className='sm-input'>
                  <label htmlFor='fullname'>Full Name</label>
                  <input type='text' name='fullname'></input>
                </div>
                <div className='sm-input'>
                  <label htmlFor='email'>Email Address</label>
                  <input type="text" name='email'></input>
                </div>
              </div>
              <div className='big-input'>
                <label htmlFor='subject'>Subject</label>
                <input type="text" name='subject'></input>
              </div>
              <div className='big-input'>
                <label>Message</label>
                <textarea required rows={10}></textarea>
              </div>
              <div className='sm-input'>
                <input type='submit' value="Send Message" id='submit-btn'></input>
              </div>
            </form>
          </div>


          <div id='job' className={`tab-content ${activeTab==='job'? 'active': ''}`}>
            <h3 className='form-title'>Job Opportunities</h3><br/>
            <div className='form-line'></div>
            <form>
              <div className='two-input-container'>
                <div className='sm-input'>
                  <label>Your Name</label>
                  <input type="text" name="name"></input>
                </div>
                <div className='sm-input'>
                  <label>Company</label>
                  <input type="text" name="company"></input>
                </div>
              </div>
              <div className='two-input-container'>
                <div className='sm-input'>
                  <label>Role/Position</label>
                  <input type="text"></input>
                </div>
                <div className='sm-input'>
                  <label>Employment Type</label>
                  <select id='job-type'>
                    <option value="">Select Type</option>
                    <option value="">Internship</option>
                    <option value="">Full-Time</option>
                    <option value="">Part-Time</option>
                    <option value="">Contract</option>
                  </select>
                </div>
              </div>
              <div className='big-input'>
                <label>Job Details & Requirements</label>
                <textarea required rows={10}></textarea>
              </div>
              <div className='big-input'>
                <label>How to Contact You</label>
                <input type="text"></input>
              </div>
              <div className='sm-input'>
                <input type="submit" value="Submit Job Details" id='submit-btn'></input>
              </div>
            </form>
          </div>



          <div id='project' className={`tab-content ${activeTab==='project'? 'active': ''}`}>
            <h3 className='form-title'>Project Development Request</h3><br></br>
            <div className='form-line'></div>
            <form>
              <div className='two-input-container'>
                <div className='sm-input'>
                  <label>Your Name</label>
                  <input type="text"></input>
                </div>
                <div className='sm-input'>
                  <label>Email</label>
                  <input type="email"></input>
                </div>
              </div>
              <div className='big-input'>
                <label>Project Title</label>
                <input type="text"></input>
              </div>
              <div className='big-input'>
                <label>Project Type</label>
                <select>
                  <option value="">Select Type</option>
                  <option value="">Web Application</option>
                  <option value="">Mobile App</option>
                  <option value="">Desktop Software</option>
                  <option value="">IoT System</option>
                  <option value="">Other</option>
                </select>
              </div>
              <div className='two-input-container'>
                <div className='sm-input'>
                  <label>Estimated Budget(₹)</label>
                  <input type="text"></input>
                </div>
                <div className='sm-input'>
                  <label>Expected Timeline</label>
                  <input type="text" placeholder='e.g., 2 months'></input>
                </div>
                
              </div>
              <div className='sm-input'>
                  <input type="submit" value="Send Project Request" id='submit-btn'></input>
                </div>
            </form>
          </div>


          <div id='collab' className={`tab-content ${activeTab==='collab'? 'active': ''}`}>
            <h3 className='form-title'>Collaboration Request</h3><br></br>
            <div className='form-line'></div>
            <form>
              <div className='two-input-container'>
                <div className='sm-input'>
                  <label>Your Name</label>
                  <input type="text"></input>
                </div>
                <div className='sm-input'>
                  <label>Your Role</label>
                  <input type="text" placeholder='e.g., Developer, Designer, etc.'></input>
                </div>
              </div>
              <div className='big-input'>
                <label>Project/Idea Description</label>
                <textarea rows={7} placeholder='Tell me about your project or idea'></textarea>
              </div>
              <div className='big-input'>
                <label>Skills You're Looking for</label>
                <input type="text" placeholder='e.g., Java Development, IoT, Flutter, etc.'></input>
              </div>
              <div className='big-input'>
                <label>Best Way to Contact You</label>
                <input type="text"></input>
              </div>
              <div className='sm-input'>
                <input type="submit" value="Send Collaboration Request" id='submit-btn'></input>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className='contact-cards'>
        <div className='contact-card'>
          <div className='action-icon'>
            <i className='fas fa-file-download'></i>
          </div>
          <h3>Download Resume</h3>
          <p>Get My complete Resume with all details</p>
          <a href="#" class="action-btn">Download PDF</a>
        </div>
        <div className='contact-card'>
          <div className='action-icon'>
            <i className='fas fa-calendar-check'></i>
          </div>
          <h3>Schedule a Meeting</h3>
          <p>Book a time for a video call or meeting</p>
          <a href="#" className='action-btn'>Book Now</a>
        </div>
        <div className='contact-card'>
          <div className='action-icon'>
            <i className='fas fa-code-branch'></i>
          </div>
          <h3>Open Source Collaboration</h3>
          <p>Interested in working together on open source projects</p>
          <a href="#" className='action-btn'>View GitHub</a>
        </div>  
        <div className='contact-card'>
          <div className='action-icon'>
            <i className='fas fa-rocket'></i>
          </div>
          <h3>Startup Pitch</h3>
          <p>Have a Startup Idea? Let's Discuss potential collaboration</p>
          <a href="#" className='action-btn'>Pitch Idea</a>
        </div>

      </div>
    </div>

    </motion.div>
      
  )
  
}
