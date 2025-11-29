import React, {useState} from 'react'
import './Management.css'

export default function Management() {

    const [activeTab, setActiveTab]=useState('skills');
    const handleTabClick=(tabId)=>{
        setActiveTab(tabId);
    }
    const [skillValue, setSkillValue] = useState(50);
  return (
    <div className='page-management-container'>
      <div className='heading'>
        <h2>Pages Management</h2>
      </div>
      <div className='management-sections'>
        <div className={`management-card ${activeTab==='skills' ? 'management-card-active':''}`} onClick={()=>handleTabClick('skills')}>
            <i className='fas fa-tools'></i>
            <h2>Manage Skills</h2>
        </div>
        <div className={`management-card ${activeTab==='experience' ? 'management-card-active': ''}`} onClick={()=>handleTabClick('experience')}>
            <i className='fas fa-briefcase'></i>
            <h2>Manage Experience</h2>
        </div>
        <div className={`management-card ${activeTab==='project'?'management-card-active': ''}`} onClick={()=>handleTabClick('project')}>
            <i className='fas fa-project-diagram'></i>
            <h2>Manage Projects</h2>
        </div>
        <div className={`management-card ${activeTab==='education'?'management-card-active': ''}`} onClick={()=>handleTabClick('education')}>
            <i className='fas fa-graduation-cap'></i>
            <h2>Manage Education</h2>
        </div>
        <div className={`management-card ${activeTab==='resume'? 'management-card-active':''}`} onClick={()=>handleTabClick('resume')}>
            <i className='fas fa-file-alt'></i>
            <h2>Update Resume</h2>
        </div>
      </div>
      <div className={`mag-form ${activeTab==='skills'?'active':''}`}>
        <h2>Manage Skills</h2><br/>
        <div className='mag-line'></div><br/>
        <form>
            <div className='mag-two-items'>
                <div className='mag-sm-input'>
                    <label>Skill Name</label>
                    <input type='text' placeholder='Enter Skill name'></input>
                </div>
                <div className='mag-sm-input'>
                    <label>Skill logo(BootStrap icon class)</label>
                    <input type='text' placeholder='Enter logo class'></input>
                </div>
                
            </div><br></br>
            <div className='mag-two-items'>
                <div className='mag-sm-input'>
                    <label>Category/Type</label>
                    <input type='text' placeholder='Enter category/type'></input>
                </div>
                <div className='mag-sm-input'>
                    <label>Experience Level</label>
                    <select>
                        <option>Select Level</option>
                        <option>Beginner</option>
                        <option>Intermediage</option>
                        <option>Advanced</option>
                        <option>Expert</option>

                    </select>
                </div>
                
            </div><br></br>
            <div className='mag-two-items'>
                <div className='mag-sm-input'>
                    <label>Years of Experience</label>
                    <input type='number' placeholder='Enter the years'></input>
                </div>
                <div className='mag-sm-input'>
                    <label>Rating({skillValue})</label>
                    <input type='range' min="0" max="100" onChange={(e)=>{setSkillValue(e.target.value)}}></input>
                </div>
                
                
            </div><br></br>
            <div className='mag-single-item'>
                <div className='mag-bg-input'>
                    <label>Description/What you can do</label>
                    <textarea placeholder='Enter the description about skill'></textarea>
                </div>
            </div><br></br>
            <div className='mag-two-items'>
                <div className='mag-mid-input'>
                    <label>Projects using this skills</label>
                    <input type='text' placeholder='Enter the project name'></input>
                </div><br></br><br></br>
                {/* <div className='mag-btn'><p>+ Add</p></div> */}
                <button className='mag-btn'>+ Add</button>
            </div><br/>
            <div className='mag-submit-button'>
                <input type="submit" value="+ Add Skill"></input>
            </div>
        </form>

        
      </div>
      <div className={`mag-form ${activeTab==='experience'?'active':''}`}>
        <h2>Manage Experience</h2><br/>
        <div className='mag-line'></div><br/>
        <form>
            <div className='mag-two-items'>
                <div className='mag-sm-input'>
                    <label>Job Title</label>
                    <input type='text' placeholder='Enter job title'></input>
                </div>
                <div className='mag-sm-input'>
                    <label>Company logo(PNG File)</label>
                    <input type='file'></input>
                </div>
                
            </div><br></br>
            <div className='mag-two-items'>
                <div className='mag-sm-input'>
                    <label>Company Name</label>
                    <input type='text' placeholder='Enter company name'></input>
                </div>
                <div className='mag-sm-input'>
                    <label>Work Type</label>
                    <select>
                        <option>Select Work Type</option>
                        <option>Full Time</option>
                        <option>Part Time</option>
                        <option>Contract</option>
                        <option>Freelance</option>
                        <option>Internship</option>

                    </select>
                </div>
                
            </div><br></br>
            <div className='mag-two-items'>
                <div className='mag-sm-input'>
                    <label>Start Date</label>
                    <input type='date'></input>
                </div>
                <div className='mag-sm-input'>
                    <label>End Date</label>
                    <input type='Date'></input>
                    <p>Leafe Empty if currently working</p>
                </div>
            </div><br></br>
            <div className='mag-single-item'>
                <div className='mag-bg-input'>
                    <label>Location</label>
                    <input type='text' placeholder='Enter the location'></input>
                </div>
            </div><br></br>

            <div className='mag-single-item'>
                <div className='mag-bg-input'>
                    <label>Description/Responsibilities</label>
                    <textarea placeholder='Enter the description about post'></textarea>
                </div>
            </div><br></br>
            <div className='mag-two-items'>
                <div className='mag-mid-input'>
                    <label>Technologies Used</label>
                    <input type='text' placeholder='Enter Technologies'></input>
                </div><br></br><br></br>
                {/* <div className='mag-btn'><p>+ Add</p></div> */}
                <button className='mag-btn'>+ Add</button>
            </div><br/>
            <div className='mag-two-items'>
                <div className='mag-mid-input'>
                    <label>Projects Worked On</label>
                    <input type='text' placeholder='Enter Project Name'></input>
                </div><br></br><br></br>
                {/* <div className='mag-btn'><p>+ Add</p></div> */}
                <button className='mag-btn'>+ Add</button>
            </div><br/>
            <div className='mag-single-item'>
                <div className='mag-bg-input'>
                    <label>Documents(Certificates, etc)</label>
                    <input type='file'></input>
                </div>
            </div><br></br>
            <div className='mag-submit-button'>
                <input type="submit" value="+ Add Experience"></input>
            </div>
        </form>

        
      </div>
      <div className={`mag-form ${activeTab==='project'?'active':''}`}>
        <h2>Manage Projects</h2><br/>
        <div className='mag-line'></div><br/>
        <form>
            <div className='mag-single-item'>
                <div className='mag-bg-input'>
                    <label>Project Title</label>
                    <input type='text' placeholder='Enter project title'></input>
                </div>
            </div><br></br>
            <div className='mag-single-item'>
                <div className='mag-bg-input'>
                    <label>Short Description</label>
                    <textarea placeholder='Describe the project'></textarea>
                </div>
            </div><br></br>
            <div className='mag-two-items'>
               <div className='mag-sm-input'>
                    <div className='mag-sm-input'>
                    <label>Project Type</label>
                    <input type='text' placeholder='Enter project type'></input>
                </div>
                </div>
                <div className='mag-sm-input'>
                    <label>Your Role</label>
                    <input type='text' placeholder='Enter your role'></input>
                </div>
            </div><br></br>
            <div className='mag-two-items'>
                <div className='mag-mid-input'>
                    <label>Technologies/Tools Used</label>
                    <input type='text' placeholder='Enter Technology/Tool'></input>
                </div><br></br><br></br>
                {/* <div className='mag-btn'><p>+ Add</p></div> */}
                <button className='mag-btn'>+ Add</button>
            </div><br/>
            <div className='mag-two-items'>
                <div className='mag-mid-input'>
                    <label>Features/Modules</label>
                    <input type='text' placeholder='Enter Features/Modules'></input>
                </div><br></br><br></br>
                {/* <div className='mag-btn'><p>+ Add</p></div> */}
                <button className='mag-btn'>+ Add</button>
            </div><br/>
             <div className='mag-two-items'>
                <div className='mag-sm-input'>
                    <label>Start Date</label>
                    <input type='date'></input>
                </div>
                <div className='mag-sm-input'>
                    <label>End Date</label>
                    <input type='Date'></input>
                    <p>Leave Empty if ongoing</p>
                </div>
            </div><br></br>
            <div className='mag-two-items'>
               <div className='mag-sm-input'>
                    <div className='mag-sm-input'>
                    <label>Team Size</label>
                    <input type='number' placeholder='Enter number of team members'></input>
                </div>
                </div>
                <div className='mag-sm-input'>
                    <label>Status</label>
                    <select>
                        <option>Select Status</option>
                        <option>Completed</option>
                        <option>In Progress</option>
                        <option>On Hold</option>
                        <option>Planned</option>
                    </select>
                </div>
            </div><br></br>
            <div className='mag-two-items'>
               <div className='mag-sm-input'>
                    <div className='mag-sm-input'>
                    <label>Demo Link</label>
                    <input type='text' placeholder='Enter the demo link'></input>
                </div>
                </div>
                <div className='mag-sm-input'>
                    <label>GitHub Link</label>
                    <input type='text' placeholder='Enter github link'></input>
                </div>
            </div><br></br>
            <div className='mag-submit-button'>
                <input type="submit" value="+ Add Project"></input>
            </div>
        </form>
      </div>




      <div className={`mag-form ${activeTab==='education'?'active':''}`}>
        <h2>Manage Education</h2><br/>
        <div className='mag-line'></div><br/>
        <form>
            <div className='mag-two-items'>
               <div className='mag-sm-input'>
                    <div className='mag-sm-input'>
                    <label>Degree/Qualification</label>
                    <input type='text' placeholder='Enter degree/qualification'></input>
                </div>
                </div>
                <div className='mag-sm-input'>
                    <label>Institute Name</label>
                    <input type='text' placeholder='Enter institute name'></input>
                </div>
            </div><br></br>
            <div className='mag-two-items'>
               <div className='mag-sm-input'>
                    <div className='mag-sm-input'>
                    <label>University/Board</label>
                    <input type='text' placeholder='Enter university/board name'></input>
                </div>
                </div>
                <div className='mag-sm-input'>
                    <label>Location</label>
                    <input type='text' placeholder='Enter location'></input>
                </div>
            </div><br></br>
            <div className='mag-two-items'>
                <div className='mag-sm-input'>
                    <label>Start Date</label>
                    <input type='date'></input>
                </div>
                <div className='mag-sm-input'>
                    <label>End Date</label>
                    <input type='Date'></input>
                    <p>Leave Empty if currently studying</p>
                </div>
            </div><br></br>
            <div className='mag-two-items'>
               <div className='mag-sm-input'>
                    <div className='mag-sm-input'>
                    <label>Percentabe/CGPA</label>
                    <input type='number' placeholder='Enter the percentage/CGPA'></input>
                </div>
                </div>
                <div className='mag-sm-input'>
                    <label>Course Time</label>
                    <select>
                        <option>Full Time</option>
                        <option>Part Time</option>
                        <option>Distance Learning</option>
                    </select>
                </div>
            </div><br></br>
            <div className='mag-single-item'>
                <div className='mag-bg-input'>
                    <label>Field Of Study</label>
                    <input type='text' placeholder='Enter the field'></input>
                </div>
            </div><br></br>
             <div className='mag-two-items'>
               <div className='mag-sm-input'>
                <div className='mag-sm-input'>
                    <label>Institution Logo(PNG Image)</label>
                    <input type='file'></input>
                </div>
                </div>
                <div className='mag-sm-input'>
                    <label>Certificates(PDF)</label>
                    <input type='file'></input>
                </div>
            </div><br></br>
             <div className='mag-submit-button'>
                <input type="submit" value="+ Add Education"></input>
            </div>
        </form>
      </div>



      <div className={`mag-form ${activeTab==='resume'?'active':''}`}>
        <h2>Update Resume</h2><br/>
        <div className='mag-line'></div><br/>
        <form>
            <div className='mag-single-item'>
                <div className='mag-bg-input'>
                    <label>Resume File(PDF)</label>
                    <input type='file'></input>
                </div>
            </div><br></br>
            <div className='mag-single-item'>
                <div className='mag-bg-input'>
                    <label>Resume Version</label>
                    <input type='text' placeholder='e.g. v2.1, January 2024'></input>
                </div>
            </div><br></br>
            <div className='mag-single-item'>
                <div className='mag-bg-input'>
                    <label>Notes/Description</label>
                    <textarea placeholder='Brief description of updates in this version'></textarea>
                </div>
            </div><br></br>



             <div className='mag-submit-button'>
                
                <button type='submit'>
                    <i className='fas fa-upload'></i><p>Upload Resume</p>
                </button>
            </div>
        </form>
      </div>
    </div>
  )
}
