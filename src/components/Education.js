import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import './Education.css'
import axios from 'axios';

export default function Education() {

    const [educationData, setEducationData]=useState([]);
    const [showRequestForm, setShowRequestForm]=useState(false);
    // const [totalYears, setTotalYears]=useState(0);

    
    useEffect(()=>{
        axios.get("http://localhost:8080/getEducation")
        .then((res)=>{
            setEducationData(res.data);
            // setTotalYears(calculateTotalEducationYears(educationData));
        })
        .catch((error)=>console.error(error));
    }, []);



    const calculateTotalEducationYears = (educationData) => {
        let totalMonths = 0;

        educationData.forEach((edu) => {
            console.log("loop executed");
            if (edu.startDate && edu.endDate) {
                console.log("first if condition eexeecuted");
                const start = new Date(edu.startDate);
                const end = new Date(edu.endDate);

                const yearsDiff = end.getFullYear() - start.getFullYear();
                const monthsDiff = end.getMonth() - start.getMonth();
                const totalEduMonths = yearsDiff * 12 + monthsDiff;

                if (totalEduMonths > 0) {
                    console.log("second if conditon executed");
                    totalMonths += totalEduMonths;
                }
            }
        });

        const totalYears = (totalMonths / 12).toFixed(2);
        return totalYears;
    };
 
    const [pdfUrl, setPdfUrl]=useState(null);

    const [docRequestData, setDocRequestData]=useState({
        name: '',
        email: '',
        phone: '',
        purpose: '',
        body: ''
    });

    const handleDocRequestChange=(e)=>{
        const {name, value}=e.target;
        setDocRequestData(prev=>({
            ...prev,
            [name]:value
        }));
    }


    const handleDocRequestSubmit=async(e)=>{
        e.preventDefault();

        try{
            const response=await axios.post(
                "http://localhost:8080/sendDocRequest",
                docRequestData,
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );

            if(response){
                alert("Request send successfully");
                setDocRequestData({
                    name: '',
                    email: '',
                    phone: '',
                    purpose: '',
                    body: ''
                });

                setShowRequestForm(false);
            }
            else{
                alert("Request did not send successfully");
            }
        }catch(e){
            console.error(e);
            alert("Request did not send successfully");
        }
    }
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
                {
                    educationData.map((edu, index)=>(
                        <div key={index} className='education-section2-card'>
                            <div className='education-card-heading'>
                                <div className='education-card-logo'>
                                        <img  src={`http://localhost:8080/getInstituteLogo/${edu.institutionLogoPath}`} alt={edu.institutionLogoPath} />
                                        
                                </div>
                                <div className='education-card-heading-content'>
                                    <h2>{edu.degree}</h2>
                                    <p className='clg-name'>{edu.instituteName}</p>
                                    <span className='education-period'>{edu.startDate} To {edu.endDate}</span>
                                </div>
                            </div>
                        
                       
                            <h2 className='edu-desc'><i className="fas fa-university"></i><div style={{display: 'flex', gap: '10px'}}><h3>University/Board: </h3>{edu.universityBoard}</div></h2>
                            <h2 className='edu-desc'><i className="fas fa-map-marker-alt"></i>Location: {edu.location}</h2>
                            <h2 className='edu-desc'><i class="fas fa-clock"></i>Course Time: {edu.courseTime}</h2>
                            <h2 className='edu-desc'><i class="fas fa-book-open"></i>Field Of Study: {edu.fieldOfStudy}</h2>
                            <p className='edu-desc'><i className='fas fa-star'></i>CGPA/Percentage: {edu.percentageCgpa}</p>
                            <p className='edu-desc'><i className='fas fa-award'></i>Top 10 performer of college batch</p>
                            <p className='edu-desc'><i className='fas fa-project-diagram'></i>Completed multiple technical projects</p>
                            <button onClick={ () =>{setPdfUrl(`http://localhost:8080/educationDocuments/${edu.certificatesPath}`); console.log(pdfUrl);}} className='edu-doc-view'>View Documents</button>
                        </div>
                    ))
                }
            </div>
            <div className='education-section3'>
                <h1>Academic Excellence</h1>
                <p>Key metrics from my educational journey</p>
                <div className='exc-container'>
                    <div className='exc-card'>
                        <i className='fas fa-calendar-alt'></i>
                        {/* <h1>{totalYears}</h1> */}
                        <h1>{calculateTotalEducationYears(educationData)}</h1>
                        <p>Years Of Education</p>
                    </div>
                    <div className='exc-card'>
                        <i className='fas fa-graduation-cap'></i>
                        <h1>{educationData.length}</h1>
                        <p>Degrees Completed</p>
                    </div>
                    <div className='exc-card'>
                        <i className='fas fa-trophy'></i>
                        <h1>Top 10</h1>
                        <p>Academic Rank</p>
                    </div>
                    {
                        educationData.map((edu, index)=>(
                            <div className='exc-card'>
                                <i className='fas fa-percentage'></i>
                                <h1>{edu.percentageCgpa}</h1>
                                <p>{edu.degree} score</p>
                            </div>
                        ))
                    }
                   
                    
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
                    <div className='verification-card' onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=shreyashlimbikai123@gmail.com","_blank")}>
                        <i className='fas fa-envelope'></i>
                        <h3>Email</h3>
                        <p>shreyashlimbikai123@gmail.com</p>
                    </div>
                    <div className='verification-card' onClick={(e)=>{e.preventDefault();navigator.clipboard.writeText("+91 9370657291");alert("Phone Number is copied")}}>
                        <i className='fas fa-phone-alt'></i>
                        <h3>Phone</h3>
                        <p>+91 9370657291</p>
                    </div>
                    <div className='verification-card' onClick={() => window.open("https://www.google.com/maps/search/?api=1&query=Bedage,Miraj,Sangli,Maharashtra","_blank")}>
                        <i className='fas fa-map-marker-alt'></i>
                        <h3>Location</h3>
                        <p>Miraj, Maharashtra</p>
                    </div>
                    <div className='verification-card' onClick={()=>setShowRequestForm(true)}>
                        <i className='fas fa-file'></i>
                        <h3>Documents</h3>
                        <p>Available On Request</p>
                    </div> 
                </div>
            </div>
        </div>
        {pdfUrl && (
            <div className='pdf-overlay'>
                <div className='pdf-modal'>
                    
                    <button className='edu-pdf-close-btn'onClick={()=>setPdfUrl(null)}>X</button>
                
                    <iframe className='pdf-viewer' src={pdfUrl} title='PDF Viewer' width="100%" height="100%"></iframe>
                </div>
            </div>
        )}
        {showRequestForm && (
            <div className='doc-request-page'>
                <div className='doc-request-card'>
                    <div className='doc-request-closebtn-box'>
                        <div>
                            {/* <h2>Document Request Form</h2> */}
                        </div>
                        <button onClick={()=>setShowRequestForm(false)}>X</button>
                    </div>
                    <form onSubmit={handleDocRequestSubmit}>
                        <div className='docreq-two-inp'>
                            <div className='doc-req-inp-box'>
                                <label>Name</label>
                                <input required type='text' placeholder='Enter your name' name='name' value={docRequestData.name} onChange={handleDocRequestChange}></input>
                            </div>
                            <div className='doc-req-inp-box'>
                                <label>Email</label>
                                <input required type='email' placeholder='Enter your email' name='email' value={docRequestData.email} onChange={handleDocRequestChange}></input>
                            </div>
                        </div>
                        <div className='docreq-two-inp'>
                            <div className='doc-req-inp-box'>
                                <label>Phone</label>
                                <input required type='text' placeholder='Enter your phone no' name='phone' value={docRequestData.phone} onChange={handleDocRequestChange}></input>
                            </div>
                            <div className='doc-req-inp-box'>
                                <label>Purpose of document request</label>
                                <input required type='text'placeholder='Enter the purpose of document request' name='purpose' value={docRequestData.purpose} onChange={handleDocRequestChange}></input>
                            </div>
                        </div>
                        <label>Body</label>
                        <textarea required placeholder='Put your body content here' name='body' value={docRequestData.body} onChange={handleDocRequestChange}></textarea>
                        <div className='submit-btn-box'>
                            <input className='submit button' type='submit' value="Submit"></input>
                        </div>
                    </form>
                </div>
                
            </div>
        )}
    </motion.div>
    
  )
}
