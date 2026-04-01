import React, {useState} from 'react'
import './Contact.css'
import { motion } from 'framer-motion';
import axios from 'axios';
import BookMeeting from './BookMeeting';
import StartupIdea from './StartupIdea';
export default function Contact() {
 
  const [activeTab, setActiveTab]= useState('general');
  const handleTabClick=(tabId)=>{
  setActiveTab(tabId);
  }



  const[generalData, setGeneralData]=useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [generalLoading, setGeneralLoading] = useState(false);

  const handleGeneralChange=(e)=>{
    const {name, value}=e.target;
    setGeneralData(prev=>({
      ...prev,
      [name]: value
    }));
  }

  const handleGeneralSubmit=async(e)=>{
    e.preventDefault();
    setGeneralLoading(true);
    try{
      const response=await axios.post(
        "http://localhost:8080/sendGeneralMessage",
        generalData,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      if(response){
        alert("Message sent Successfully");
      }
      else{
        alert("Unable to send message");
      }

    }catch(e){
      console.error(e);
      alert("Unable to send message");
    } finally {
      setGeneralLoading(false);
    }
  }



  const [jobOfferData, setJobOfferData]=useState({
    name: '',
    company: '',
    position: '',
    employmentType: '',
    details: '',
    contactDetails: ''
  });
  const [jobOfferLoading, setJobOfferLoading] = useState(false);

  const handleJobOfferChange=(e)=>{
    const {name, value}=e.target;
    setJobOfferData(prev=>({
      ...prev,
      [name]: value
    }));
  }

  const handleJobOfferSubmit=async(e)=>{
    e.preventDefault();
    setJobOfferLoading(true);
    console.log(jobOfferData.employmentType);
    try{
      const response=await axios.post(
        "http://localhost:8080/sendJobOfferMessage",
        jobOfferData,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      if(response){
        alert("Message send Successfully");
      }
      else{
        alert("Unable to send message");
      }
    }catch(e){
      console.error(e);
      alert("Unable to send Message");
    } finally {
      setJobOfferLoading(false);
    }
  }




  const [projectData, setProjectData]=useState({
    name: '',
    email: '',
    projectTitle: '',
    projectType: '',
    budget: '',
    timeline: '',
  });
  const [projectLoading, setProjectLoading] = useState(false);

  
  const handleProjectChange=(e)=>{
    const {name, value}=e.target;
    setProjectData(prev=>({
      ...prev,
      [name]: value
    }));
  }

  const handleProjectSubmit=async(e)=>{
    e.preventDefault();
    setProjectLoading(true);

    try{
      const response=await axios.post(
        "http://localhost:8080/sendProjectRequest",
        projectData,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );


      if(response){
        alert("Message sent Successfully");
      }
      else{
        alert("Unable to send Message");
      }
    }catch(e){
      console.error(e);
      alert("Unable to send Message");
    } finally {
      setProjectLoading(false);
    }
  }




  const[colabData, setColabData]=useState({
    name: '',
    role: '',
    projectIdeaDesc: '',
    skills: '',
    contactDetails: ''
  });
  const [colabLoading, setColabLoading] = useState(false);

  const handleColabChange=(e)=>{
    const {name, value}=e.target;
    setColabData(prev=>({
      ...prev,
      [name]: value
    }));
  }


  const handleColabSubmit=async(e)=>{
    e.preventDefault();
    setColabLoading(true);

    try{
      const response=await axios.post(
        "http://localhost:8080/sendColabRequest",
        colabData,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      if(response){
        alert("Message sent Successfully");
      }
      else{
        alert("Unable to send message");
      }
    }catch(e){
      console.error(e);
      alert("Unable to send Message");
    } finally {
      setColabLoading(false);
    }
  }

  const handleNoAccountLink=(e)=>{
    e.preventDefault();
    alert("Account Not Available Yet");
  }


  const [showBookMeeting, setShowBookMeeting]=useState(false);
  const [showStartupIdea, setStartupIdea]=useState(false);

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
            <a href='https://www.linkedin.com/in/shreyash-limbikai/' target='blank' className='profile-card'>
              <div className='profile-icon'>
                <i className="fab fa-linkedin-in"></i>
              </div>
              <div className='profile-name'>LinkedIn</div>
            </a>
            <a href='https://github.com/slshree1' target='blank' className='profile-card'>
              <div className='profile-icon'>
                <i className="fab fa-github"></i>
              </div>
              <div className='profile-name'>GitHub</div>
            </a>
            <a href='#' onClick={handleNoAccountLink} className='profile-card'>
              <div className='profile-icon'>
                <i className="fab fa-twitter"></i>
              </div>
              <div className='profile-name'>Twiter</div>
            </a>
            <a href='#' onClick={handleNoAccountLink} className='profile-card'>
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
            <form onSubmit={handleGeneralSubmit}>
              <div className='two-input-container'>
                <div className='sm-input'>
                  <label htmlFor='fullname'>Full Name</label>
                  <input type='text' name='fullName' value={generalData.fullName} onChange={handleGeneralChange}></input>
                </div>
                <div className='sm-input'>
                  <label htmlFor='email'>Email Address</label>
                  <input type="text" name='email' value={generalData.email} onChange={handleGeneralChange}></input>
                </div>
              </div>
              <div className='big-input'>
                <label htmlFor='subject'>Subject</label>
                <input type="text" name='subject' value={generalData.subject} onChange={handleGeneralChange}></input>
              </div>
              <div className='big-input'>
                <label>Message</label>
                <textarea required rows={10} name='message' value={generalData.message} onChange={handleGeneralChange}></textarea>
              </div>
              <div className='sm-input'>
                <input type='submit' value={generalLoading ? "Sending..." : "Send Message"} id='submit-btn' disabled={generalLoading}></input>
              </div>
            </form>
          </div>


          <div id='job' className={`tab-content ${activeTab==='job'? 'active': ''}`}>
            <h3 className='form-title'>Job Opportunities</h3><br/>
            <div className='form-line'></div>
            <form onSubmit={handleJobOfferSubmit}>
              <div className='two-input-container'>
                <div className='sm-input'>
                  <label>Your Name</label>
                  <input type="text" name="name" value={jobOfferData.name} onChange={handleJobOfferChange}></input>
                </div>
                <div className='sm-input'>
                  <label>Company</label>
                  <input type="text" name="company" value={jobOfferData.company} onChange={handleJobOfferChange}></input>
                </div>
              </div>
              <div className='two-input-container'>
                <div className='sm-input'>
                  <label>Role/Position</label>
                  <input type="text" name='position' value={jobOfferData.position} onChange={handleJobOfferChange}></input>
                </div>
                <div className='sm-input'>
                  <label>Employment Type</label>
                  <select id='job-type' name='employmentType' value={jobOfferData.employmentType} onChange={handleJobOfferChange}>
                    <option value="">Select Type</option>
                    <option value="Internship">Internship</option>
                    <option value="Full-Time">Full-Time</option>
                    <option value="Part-Time">Part-Time</option>
                    <option value="Contract">Contract</option>
                  </select>
                </div>
              </div>
              <div className='big-input'>
                <label>Job Details & Requirements</label>
                <textarea required rows={10} name='details' value={jobOfferData.details} onChange={handleJobOfferChange}></textarea>
              </div>
              <div className='big-input'>
                <label>How to Contact You</label>
                <input type="text" name='contactDetails' value={jobOfferData.contactDetails} onChange={handleJobOfferChange}></input>
              </div>
              <div className='sm-input'>
                <input type="submit" value={jobOfferLoading ? "Sending..." : "Submit Job Details"} id='submit-btn' disabled={jobOfferLoading}></input>
              </div>
            </form>
          </div>



          <div id='project' className={`tab-content ${activeTab==='project'? 'active': ''}`}>
            <h3 className='form-title'>Project Development Request</h3><br></br>
            <div className='form-line'></div>
            <form onSubmit={handleProjectSubmit}>
              <div className='two-input-container'>
                <div className='sm-input'>
                  <label>Your Name</label>
                  <input type="text" name='name' value={projectData.name} onChange={handleProjectChange}></input>
                </div>
                <div className='sm-input'>
                  <label>Email</label>
                  <input type="email" name='email' value={projectData.email} onChange={handleProjectChange}></input>
                </div>
              </div>
              <div className='big-input'>
                <label>Project Title</label>
                <input type="text" name='projectTitle' value={projectData.projectTitle} onChange={handleProjectChange}></input>
              </div>
              <div className='big-input'>
                <label>Project Type</label>
                <select name='projectType' value={projectData.projectType} onChange={handleProjectChange}>
                  <option value="">Select Type</option>
                  <option value="Web Application">Web Application</option>
                  <option value="Mobile App">Mobile App</option>
                  <option value="Desktop Software">Desktop Software</option>
                  <option value="IoT System">IoT System</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className='two-input-container'>
                <div className='sm-input'>
                  <label>Estimated Budget(₹)</label>
                  <input type="text" name='budget' value={projectData.budget} onChange={handleProjectChange}></input>
                </div>
                <div className='sm-input'>
                  <label>Expected Timeline</label>
                  <input type="text" placeholder='e.g., 2 months' name='timeline' value={projectData.timeline} onChange={handleProjectChange}></input>
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
            <form onSubmit={handleColabSubmit}>
              <div className='two-input-container'>
                <div className='sm-input'>
                  <label>Your Name</label>
                  <input type="text" name='name' value={colabData.name} onChange={handleColabChange}></input>
                </div>
                <div className='sm-input'>
                  <label>Your Role</label>
                  <input type="text" placeholder='e.g., Developer, Designer, etc.' name='role' value={colabData.role} onChange={handleColabChange}></input>
                </div>
              </div>
              <div className='big-input'>
                <label>Project/Idea Description</label>
                <textarea rows={7} placeholder='Tell me about your project or idea' name='projectIdeaDesc' value={projectData.projectIdeaDesc} onChange={handleColabChange}></textarea>
              </div>
              <div className='big-input'>
                <label>Skills You're Looking for</label>
                <input type="text" placeholder='e.g., Java Development, IoT, Flutter, etc.' name='skills' value={colabData.skills} onChange={handleColabChange}></input>
              </div>
              <div className='big-input'>
                <label>Best Way to Contact You</label>
                <input type="text" name='contactDetails' value={projectData.contactDetails} onChange={handleColabChange}></input>
              </div>
              <div className='sm-input'>
                <input type="submit" value={colabLoading ? "Sending..." : "Send Collaboration Request"} id='submit-btn' disabled={colabLoading}></input>
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
          <a href="http://localhost:8080/downloadResume" class="action-btn">Download PDF</a>
        </div>
        <div className='contact-card'>
          <div className='action-icon'>
            <i className='fas fa-calendar-check'></i>
          </div>
          <h3>Schedule a Meeting</h3>
          <p>Book a time for a video call or meeting</p>
          <a className='action-btn' onClick={()=>{setShowBookMeeting(true)}}>Book Now</a>
        </div>
        <div className='contact-card'>
          <div className='action-icon'>
            <i className='fas fa-code-branch'></i>
          </div>
          <h3>Open Source Collaboration</h3>
          <p>Interested in working together on open source projects</p>
          <a href="https://github.com/slshree1" className='action-btn'>View GitHub</a>
        </div>  
        <div className='contact-card'>
          <div className='action-icon'>
            <i className='fas fa-rocket'></i>
          </div>
          <h3>Startup Pitch</h3>
          <p>Have a Startup Idea? Let's Discuss potential collaboration</p>
          <a className='action-btn' onClick={()=>{setStartupIdea(true)}}>Pitch Idea</a>
        </div>

      </div>
    </div>
    {showBookMeeting && <BookMeeting onClose={() => setShowBookMeeting(false)} />}
    {showStartupIdea && <StartupIdea onClose={() => setStartupIdea(false)} />}
    </motion.div>
      
  )
  
}
