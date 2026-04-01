import React, {useEffect, useRef, useState} from 'react'
import './Management.css'
import { motion } from 'framer-motion';
import axios from 'axios';
export default function Management() {


    
    const [projectInput, setProjectInput] = useState('');

    const [activeTab, setActiveTab]=useState('skills');
    const [formLoading, setFormLoading] = useState(false);

    const handleTabClick=(tabId)=>{
        setActiveTab(tabId);
    }

    const [uploadedData, setUploadedData]=useState([]);


    const fetchUploadedData = async () => {
    let url = "";

    if (activeTab === "skills") {
        url = "http://localhost:8080/getSkills";
    } else if (activeTab === "experience") {
        url = "http://localhost:8080/getExperience";
    } else if (activeTab === "project") {
        url = "http://localhost:8080/getProjects";
    } else if (activeTab === "education") {
        url = "http://localhost:8080/getEducation";
    } else if (activeTab === "resume") {
        url = "http://localhost:8080/getResume";
    } else if (activeTab === "profileEdit") {
        url = "http://localhost:8080/getProfiles";
    } else {
        url = "http://localhost:8080/getCertificates";
    }

    try {
        const res = await axios.get(url);
        setUploadedData(res.data);
    } catch (error) {
        console.error(error);
    }
};




    useEffect(() => {
        fetchUploadedData();
    }, [activeTab]);
    
    const handleDelete = (id) => {
        if (!window.confirm("Are you sure you want to delete this record?")) {
            return;
        }

        let url = "";

        if (activeTab === "skills") {
            url = `http://localhost:8080/deleteSkill/${id}`;
        } 
        else if (activeTab === "experience") {
            url = `http://localhost:8080/deleteExperience/${id}`;
        } 
        else if (activeTab === "project") {
            url = `http://localhost:8080/deleteProject/${id}`;
        } 
        else if (activeTab === "education") {
            url = `http://localhost:8080/deleteEducation/${id}`;
        } 
        else if(activeTab==="resume"){
            url = `http://localhost:8080/deleteResume/${id}`;
        }
        else if(activeTab==="profileEdit"){
            url=`http://localhost:8080/deleteProfileData/${id}`;
        }else{
            url=`http://localhost:8080/deleteCertificate/${id}`;
        }

        axios.delete(url)
        .then(() => {
            setUploadedData(prev =>
                prev.filter(item => item.id !== id)
            );
        })
        .catch(err => console.error("Delete failed:", err));
    };


    const[skillData, setSkillData]=useState({
        name:'',
        logo:'',
        category: '',
        experienceLevel: 'Select Level',
        experienceYears: '',
        rating: '',
        use_purpose: '',
        description: '',
        projectsUsing: []
    });

    const handleSkillChange=(e)=>{
        const{name, value}=e.target;
        // setSkillData(...skillData, [name], value);
        setSkillData(prev=>({
            ...prev,
            [name]: value
        }));
    }

    const handleSkillSubmit= async(e)=>{
        e.preventDefault();
        setFormLoading(true);

        try{
            const response=await axios.post(
                "http://localhost:8080/saveSkill",
                skillData,
                {
                    headers: {
                        "Content-Type": "application/json"  
                    }
                }
            );
            if(response.data===true){
                alert("Skill Saved Successfully");
                fetchUploadedData();  
                setSkillData({
        name:'',
        logo:'',
        category: '',
        experienceLevel: 'Select Level',
        experienceYears: 0,
        rating: 0,
        use_purpose: '',
        description: '',
        projectsUsing: []
    });
            }
            else{
                alert("Unable to save Skill(condition)");
            }
        }catch(e){
            console.error(e);
            alert("Unable to save skill(catch)");
        } finally {
            setFormLoading(false);
        }
    }




    
    



    const [experienceData, setExperienceData]=useState({
        jobTitle: '',
        companyName: '',
        workType: 'Select Wrok Type',
        startDate: '',
        endDate: '',
        location: '',
        description: '',

        technologiesUsed: [],
        projectsWorkedOn: [],

        companyLogo: null,
        documents: null,
    });
    const [technologyInput, setTechnologyInput]=useState('');
    const [projectsWorkedOnInput, setProjectsWorkedOnInput]=useState('');
    const expLogoRef = useRef(null);
    const expDocRef=useRef(null);
    const handleExperienceSubmit= async(e)=>{
        e.preventDefault();
        setFormLoading(true);

        const formData=new FormData();
        formData.append(
            "experience", 
            new Blob([JSON.stringify({
                jobTitle: experienceData.jobTitle,
                companyName: experienceData.companyName,
                workType: experienceData.workType,
                startDate: experienceData.startDate,
                endDate: experienceData.endDate,
                location: experienceData.location,
                description: experienceData.description,
                technologiesUsed: experienceData.technologiesUsed,
                projectsWorkedOn: experienceData.projectsWorkedOn
            })], {type: "application/json"})
        );

        if(experienceData.companyLogo){
            formData.append("companyLogo", experienceData.companyLogo);
        }

        if(experienceData.documents){
            formData.append("documents", experienceData.documents);
        }

        try{
            const response=await axios.post(
                "http://localhost:8080/saveExperience",
                formData
            );
            if(response.data===true){
                alert("Experience Added Successfully");
                fetchUploadedData();
                setExperienceData({
                    jobTitle: '',
                    companyName: '',
                    workType: 'Select Wrok Type',
                    startDate: '',
                    endDate: '',
                    location: '',
                    description: '',

                    technologiesUsed: [],
                    projectsWorkedOn: [],

                    companyLogo: null,
                    documents: null,
                });
                if(expLogoRef.current){
                    expLogoRef.current.value=null;
                }
                if(expDocRef.current){
                    expDocRef.current.value=null;
                }
            }
            else{
                alert("Unable to add Experience");
            }
        }catch(e){
            console.error(e);
            alert("Unable to add Experience");
        } finally {
            setFormLoading(false);
        }

    }


    const handleExperienceChange=(e)=>{
        const{name, value}=e.target;
        setExperienceData(prev=>({
            ...prev,
            [name]:value
        }));
    }




    const [projectData, setProjectData] = useState({
        projectTitle: '',
        shortDescription: '',
        projectType: '',
        role: '',

        technologiesUsed: [],
        features: [],

        startDate: '',
        endDate: '',
        teamSize: '',
        status: 'Select Status',

        demoLink: '',
        githubLink: ''
    });
    // const [technologyInput, setTechnologyInput] = useState('');
    const [featureInput, setFeatureInput] = useState('');


    const handleProjectChange = (e) => {
        const { name, value } = e.target;
        setProjectData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleProjectSubmit = async (e) => {
        e.preventDefault();
        setFormLoading(true);

        try {
            const response = await axios.post(
                "http://localhost:8080/saveProject",
                projectData,
                { headers: { "Content-Type": "application/json" } }
            );

            if (response.data === true) {
                alert("Project added successfully");
                fetchUploadedData();
                setProjectData({
        projectTitle: '',
        shortDescription: '',
        projectType: '',
        role: '',

        technologiesUsed: [],
        features: [],

        startDate: '',
        endDate: '',
        teamSize: '',
        status: 'Select Status',

        demoLink: '',
        githubLink: ''
    });
            } else {
                alert("Failed to add project");
            }
        } catch (error) {
            console.error(error);
            alert("Error adding project");
        } finally {
            setFormLoading(false);
        }
    };






    const [educationData, setEducationData] = useState({
        degree: '',
        instituteName: '',
        universityBoard: '',
        location: '',
        startDate: '',
        endDate: '',
        percentageCgpa: '',
        courseTime: '',
        fieldOfStudy: '',
        institutionLogo: null,
        certificates: null
    });

    const eduLogoRef=useRef(null);
    const eduCertRef=useRef(null);

    const handleEducationChange = (e) => {
        const { name, value } = e.target;
        setEducationData(prev => ({
            ...prev,
            [name]: value
        }));
    };


    const handleEducationSubmit=async(e)=>{
        e.preventDefault();
        setFormLoading(true);

        const formData=new FormData();
        formData.append(
            "education",
            new Blob([JSON.stringify({
                degree: educationData.degree,
                instituteName: educationData.instituteName,
                universityBoard: educationData.universityBoard,
                location: educationData.location,
                startDate: educationData.startDate,
                endDate: educationData.endDate,
                percentageCgpa: educationData.percentageCgpa,
                courseTime: educationData.courseTime,
                fieldOfStudy: educationData.fieldOfStudy
            })], {type: "application/json"})
        );
        if(educationData.institutionLogo){
            formData.append("institutionLogo", educationData.institutionLogo);
        }
        if(educationData.certificates){
            console.log("certificates condition executed");
            formData.append("certificates", educationData.certificates);
        }

        try{
            const response=await axios.post(
                "http://localhost:8080/saveEducation",
                formData
            );
            if(response.data===true){
                alert("Education added Successfully");
                fetchUploadedData();
                setEducationData({
                    degree: '',
                    instituteName: '',
                    universityBoard: '',
                    location: '',
                    startDate: '',
                    endDate: '',
                    percentageCgpa: '',
                    courseTime: '',
                    fieldOfStudy: '',
                    institutionLogo: null,
                    certificates: null
                });
                if(eduLogoRef.current){
                    eduLogoRef.current.value=null;
                }
                if(eduCertRef.current){
                    eduCertRef.current.value=null;
                }
            }
            else{
                alert("Unable to add education(condition)");
            }
        }catch(e){
            console.error(e);
            alert("Unable to add education(exception)");
        } finally {
            setFormLoading(false);
        }
    }





    const[resumeData, setResumeData]=useState({
        resume: null,
        resumeVersion: '',
        description: ''
    });
    const resDocRef=useRef(null);

    const handleResumeChange=(e)=>{
        const {name, value}=e.target;
        setResumeData(prev=>({
            ...prev,
            [name]: value
        }))
    }

    const handleResumeSubmit=async(e)=>{
        e.preventDefault();
        setFormLoading(true);

        const formData= new FormData();
        formData.append(
            "resumeData",
            new Blob([JSON.stringify({
                resumeVersion: resumeData.resumeVersion,
                description: resumeData.description
            })], {type: "application/json"})
        );
        if(resumeData.resume){
            // console.log("resume condition executed");
            formData.append("resume", resumeData.resume);
        }

        try{
             const response=await axios.post(
                "http://localhost:8080/updateResume",
                formData
            );

            if(response){
                alert("Successfully updated resume");
                fetchUploadedData();
                setResumeData({
                    resume: null,
                    resumeVersion: '',
                    description: ''
                });
                if(resDocRef.current){
                    resDocRef.current.value=null;
                }
            }
            else{
                alert("Unable to update resume(condition)");
            }
        }catch(e){
            console.error(e);
            alert("Unable to Update resume(exception)");
        } finally {
            setFormLoading(false);
        }
    }



    const [profileData, setProfileData]=useState({
        name: '',
        heading: '',
        profilePicture: null
    });
    const proDocRef=useRef(null);

    const handleProfileChange=(e)=>{
        const {name, value}=e.target;
        setProfileData(prev=>({
            ...prev,
            [name]: value
        }));
    }

    const handleProfileSubmit=async(e)=>{
        e.preventDefault();
        setFormLoading(true);
        const formData= new FormData();
        formData.append(
            "profileData",
            new Blob([JSON.stringify({
                name: profileData.name,
                heading: profileData.heading
            })], {type: "application/json"})
        );
        if(profileData.profilePicture != null){
            formData.append("profilePicture", profileData.profilePicture);
        }
        try{
             const response=await axios.post(
                "http://localhost:8080/updateProfileData",
                formData
            );

            if(response){
                alert("Successfully updated profile");
                fetchUploadedData();
                setProfileData({
                    name: '',
                    heading: '',
                    profilePicture: null
                });
                if(proDocRef.current){
                    proDocRef.current.value=null;
                }
            }
            else{
                alert("Unable to update profile(condition)");
            }
        }catch(e){
            console.error(e);
            alert("Unable to Update profile(exception)");
        } finally {
            setFormLoading(false);
        }
    }


    const [certificateData, setCertificateData]=useState({
        name: '',
        provider: '',
        logo: '',
        issueDate: '',
        badge: '',
        credentialId: '',
        skillsGained: [],
        certificate: null
    });

    const [certSkillInput, setCertSkillInput]=useState('');
    const certDocRef=useRef(null);

    const handleCertificateChange=(e)=>{
        const {name, value}=e.target;
        setCertificateData(prev=>({
            ...prev,
            [name]: value
        }));
    }

    const handleCertificateSubmit=async(e)=>{
        e.preventDefault();
        setFormLoading(true);
        const formData=new FormData();
        formData.append(
            "certificateData",
            new Blob([JSON.stringify({
                name: certificateData.name,
                provider: certificateData.provider,
                logo: certificateData.logo,
                issueDate: certificateData.issueDate,
                badge: certificateData.badge,
                credentialId: certificateData.credentialId,
                skillsGained: certificateData.skillsGained
            })], {type: "application/json"})
        );

        if(certificateData.certificate != null){
            formData.append("certificate", certificateData.certificate);
        }

        try{
            const response=await axios.post(
                "http://localhost:8080/saveCertificate",
                formData
            );
            if(response){
                alert("Certificates added Successfully");
                fetchUploadedData();
                setCertificateData({
                    name: '',
                    provider: '',
                    logo: '',
                    issueDate: '',
                    badge: '',
                    credentialId: '',
                    skillsGained: [],
                    certificate: null
                });
                if(certDocRef.current){
                    certDocRef.current.value=null;
                }
            }
            else{
                console.log("conditional error occure");
                alert("Unable to add certificate");
            }
        }catch(e){
            console.error(e);
            console.log("Excpeptional error occured");
            alert("Unable to add certificate");
        } finally {
            setFormLoading(false);
        }
    }



    const [passwordData, setPasswordData]=useState({
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
    });
    const [passwordError, setPasswordError] = useState('');

    const handlePasswordChange=(e)=>{
        const {name, value}=e.target;
        setPasswordData(prev => {
            const updatedData = {
                ...prev,
                [name]: value
            };
            if (updatedData.newPassword === updatedData.confirmPassword) {
                setPasswordError("");
            } else {
                setPasswordError("Passwords did not match");
            }
            return updatedData;
        });

    }
    const handlePasswordSubmit=async(e)=>{
        e.preventDefault();
        setFormLoading(true);

        const formdata=new FormData();
        formdata.append("oldPassword", passwordData.oldPassword);
        formdata.append("newPassword", passwordData.newPassword);

        try{
            const response=await axios.post("http://localhost:8080/updatePassword", formdata);

            alert(response.data);
            setPasswordData({
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
    });
        }catch(e){
            console.error(e);
            alert("Error while updating the passwword(exceptoin)");
        } finally {
            setFormLoading(false);
        }

    }


    
    const [oldPassView, setOldPassView]=useState(false);
    const [newPassView, setNewPassView]=useState(false);
    const [confirmPassView, setConfirmPassView]=useState(false);

  return (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
    >
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
        <div className={`management-card ${activeTab==='profileEdit'? 'management-card-active':''}`} onClick={()=>handleTabClick('profileEdit')}>
            <i className='fas fa-user-edit'></i>
            <h2>Update Profile <br/> Picture & Heading</h2>
        </div>
        <div className={`management-card ${activeTab==='Certificates'? 'management-card-active':''}`} onClick={()=>handleTabClick('Certificates')}>
            <i className='fas fa-certificate'></i>
            <h2>Manage Certificates</h2>
        </div>
        <div className={`management-card ${activeTab==='passwordUpdate'? 'management-card-active':''}`} onClick={()=>handleTabClick('passwordUpdate')}>
            <i className='fas fa-key'></i>
            <h2>Update Password</h2>
        </div>
      </div>
      <div className={`mag-form ${activeTab==='skills'?'active':''}`}> 
        <h2>Manage Skills</h2><br/>
        <div className='mag-line'></div><br/> 
        <form onSubmit={handleSkillSubmit}>  
            <div className='mag-two-items'>
                <div className='mag-sm-input'>
                    <label>Skill Name</label>
                    <input required type='text' placeholder='Enter Skill name' name='name' value={skillData.name} onChange={handleSkillChange}></input>
                </div>
                <div className='mag-sm-input'>
                    <label>Skill logo(BootStrap icon class)</label>
                    <input required type='text' placeholder='Enter logo class' name='logo' value={skillData.logo} onChange={handleSkillChange}></input>
                </div>
                
            </div><br></br>
            <div className='mag-two-items'>
                <div className='mag-sm-input'>
                    <label>Category/Type</label>
                    {/* <input type='text' placeholder='Enter category/type' name='category' value={skillData.category} onChange={handleSkillChange}></input> */}
                    <select required name='category' value={skillData.category} onChange={handleSkillChange}>
                        <option value="">Select Category</option>
                        <option value="Programming Language">Programming Language</option>
                        <option value="Frameworks & Technologies">Frameworks & Technologies</option>
                        <option value="Tools & Platforms">Tools & Platforms</option>
                    </select>
                </div>
                <div className='mag-sm-input'>
                    <label>Experience Level</label>
                    <select required name='experienceLevel' value={skillData.experienceLevel} onChange={handleSkillChange}>
                        <option value="">Select Level</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                        <option value="Expert">Expert</option>
                    </select>
                </div>
                
            </div><br></br>
            <div className='mag-two-items'>
                <div className='mag-sm-input'>
                    <label>Years of Experience</label>
                    <input required type='number' placeholder='Enter the years' name='experienceYears' value={skillData.experienceYears} onChange={handleSkillChange}></input>
                </div>
                <div className='mag-sm-input'>
                    <label>Rating({skillData.rating})</label>
                    <input required type='range' min="0" max="100" name='rating' value={skillData.rating} onChange={handleSkillChange}></input>
                </div>
                
                
            </div><br></br>
            <div className='mag-single-item'>
                <div className='mag-bg-input'>
                    <label>Use/Purpose: </label>
                    <input required type='text' placeholder='Use / Purpose' name='use_purpose' value={skillData.use_purpose} onChange={handleSkillChange}></input>
                </div>
            </div><br/>
            <div className='mag-single-item'>
                <div className='mag-bg-input'>
                    <label>Description/What you can do</label>
                    <textarea required placeholder='Enter the description about skill' name='description' value={skillData.description} onChange={handleSkillChange}></textarea>
                </div>
            </div><br></br>
            <div className='mag-two-items'>
                <div className='mag-mid-input'>
                    <label>Projects using this skills</label>
                    <input type='text' placeholder='Enter the project name' value={projectInput} onChange={(e)=>setProjectInput(e.target.value)}></input>
                </div><br></br><br></br>
                {/* <div className='mag-btn'><p>+ Add</p></div> */}
                <button type='button' className='mag-btn' onClick={()=>{
                    if(projectInput.trim()==='')return;
                    setSkillData(prev=>({
                        ...prev,
                        projectsUsing: [...prev.projectsUsing, projectInput]
                    }));
                    setProjectInput('');
                }}>+ Add</button>
            </div><br/>
            <div className="project-tags">
                {skillData.projectsUsing.map((project, index)=>(
                    <div key={index} className='project-tag'>
                        <span>{project}</span>
                        <button type='button' className='remove-btn' onClick={()=>{
                            setSkillData(prev=>({
                                ...prev,
                                projectsUsing: prev.projectsUsing.filter((_, i)=>i !== index)
                            }));
                        }}>x</button>
                    </div>
                ))}
            </div>
            <br/>
            <div className='mag-submit-button'>
                <input type="submit" value={formLoading ? "Saving..." : "+ Add Skill"} disabled={formLoading}></input>
            </div>
        </form>
      </div>


      <div className={`mag-form ${activeTab==='experience'?'active':''}`}>
        <h2>Manage Experience</h2><br/>
        <div className='mag-line'></div><br/>
        <form onSubmit={handleExperienceSubmit}>
            <div className='mag-two-items'>
                <div className='mag-sm-input'>
                    <label>Job Title</label>
                    <input required type='text' name="jobTitle" value={experienceData.jobTitle} placeholder='Enter job title' onChange={handleExperienceChange}></input>
                </div>
                <div className='mag-sm-input'>
                    <label>Company logo(PNG File)</label>
                    <input required type='file' accept='image/png' ref={expLogoRef} onChange={(e)=>setExperienceData(prev=>({
                        ...prev,
                        companyLogo: e.target.files[0]
                    }))} name="companyLogo"></input>
                </div>
                
            </div><br></br>
            <div className='mag-two-items'>
                <div className='mag-sm-input'>
                    <label>Company Name</label>
                    <input required type='text'  name="companyName" value={experienceData.companyName} placeholder='Enter company name' onChange={handleExperienceChange}></input>
                </div>
                <div className='mag-sm-input'>
                    <label>Work Type</label>
                    <select required name="workType" value={experienceData.workType} onChange={handleExperienceChange}>
                        <option value="">Select Work Type</option>
                        <option value="Full Time">Full Time</option>
                        <option value="Part Time">Part Time</option>
                        <option value="Contract">Contract</option>
                        <option value="Freelance">Freelance</option>
                        <option value="Internship">Internship</option>

                    </select>
                </div>
                
            </div><br></br>
            <div className='mag-two-items'>
                <div className='mag-sm-input'>
                    <label>Start Date</label>
                    <input required type='date' name='startDate' value={experienceData.startDate} onChange={handleExperienceChange}></input>
                </div>
                <div className='mag-sm-input'>
                    <label>End Date</label>
                    <input type='Date' name='endDate' value={experienceData.endDate} onChange={handleExperienceChange}></input>
                    <p>Leafe Empty if currently working</p>
                </div>
            </div><br></br>
            <div className='mag-single-item'>
                <div className='mag-bg-input'>
                    <label>Location</label>
                    <input required type='text' name='location' value={experienceData.location} placeholder='Enter the location' onChange={handleExperienceChange}></input>
                </div>
            </div><br></br>

            <div className='mag-single-item'>
                <div className='mag-bg-input'>
                    <label>Description/Responsibilities</label>
                    <textarea required name='description' value={experienceData.description} placeholder='Enter the description about post' onChange={handleExperienceChange}></textarea>
                </div>
            </div><br></br>
            <div className='mag-two-items'>
                <div className='mag-mid-input'>
                    <label>Technologies Used</label>
                    <input  type='text' name='technologiesUsed' value={technologyInput} onChange={(e)=>setTechnologyInput(e.target.value)} placeholder='Enter Technologies'></input>
                </div><br></br><br></br>
                {/* <div className='mag-btn'><p>+ Add</p></div> */}
                <button type='button' className='mag-btn' onClick={()=>{
                    if(technologyInput.trim()==='')return;
                    setExperienceData(prev=>({
                        ...prev,
                        technologiesUsed: [...prev.technologiesUsed, technologyInput]
                    }));
                    setTechnologyInput('');
                }}>+ Add</button>
            </div><br/>
            <div className='project-tags'>
                {experienceData.technologiesUsed.map((technology, index)=>(
                    <div key={index} className='project-tag'>
                        <span>{technology}</span>
                        <button type='button' className='remove-btn' onClick={()=>{
                            setExperienceData(prev=>({
                                ...prev,
                                technologiesUsed: prev.technologiesUsed.filter((_, i)=>i !==index)
                            }));
                        }}>x</button>
                    </div>
                ))}
            </div>

            <div className='mag-two-items'>
                <div className='mag-mid-input'>
                    <label>Projects Worked On</label>
                    <input type='text' name='projectsWrokedOn' value={projectsWorkedOnInput} placeholder='Enter Project Name' onChange={(e)=>setProjectsWorkedOnInput(e.target.value)}></input>
                </div><br></br><br></br>
                {/* <div className='mag-btn'><p>+ Add</p></div> */}
                <button type='button' className='mag-btn' onClick={()=>{
                    if(projectsWorkedOnInput.trim()==='')return;
                    setExperienceData(prev=>({
                        ...prev,
                        projectsWorkedOn: [...prev.projectsWorkedOn, projectsWorkedOnInput]
                    }));
                    setProjectsWorkedOnInput('');
                }}>+ Add</button>
            </div><br/>
            <div className='project-tags'>
                {experienceData.projectsWorkedOn.map((projectWorked, index)=>(
                    <div key={index} className='project-tag'>
                        <span>{projectWorked}</span>
                        <button type='button' className='remove-btn' onClick={()=>{
                            setExperienceData(prev=>({
                                ...prev,
                                projectsWorkedOn: prev.projectsWorkedOn.filter((_, i)=>i !== index)
                            }));
                        }}>x</button>
                    </div>
                ))}
            </div>
            <div className='mag-single-item'>
                <div className='mag-bg-input'>
                    <label>Documents(Certificates, etc)</label>
                    <input required type='file' ref={expDocRef} onChange={(e)=>setExperienceData(prev=>({
                        ...prev,
                        documents: e.target.files[0]
                        
                    }))} name='documents'></input>
                </div>
            </div><br></br>
            <div className='mag-submit-button'>
                <input type="submit" value={formLoading ? "Saving..." : "+ Add Experience"} disabled={formLoading}></input>
            </div>
        </form>
      </div>


      <div className={`mag-form ${activeTab==='project'?'active':''}`}>
        <h2>Manage Projects</h2><br/>
        <div className='mag-line'></div><br/>
        <form onSubmit={handleProjectSubmit}>
            <div className='mag-single-item'>
                <div className='mag-bg-input'>
                    <label>Project Title</label>
                    <input required type='text' name='projectTitle' value={projectData.projectTitle} placeholder='Enter project title' onChange={handleProjectChange}></input>
                </div>
            </div><br></br>
            <div className='mag-single-item'>
                <div className='mag-bg-input'>
                    <label>Short Description</label>
                    <textarea required placeholder='Describe the project' name='shortDescription' value={projectData.shortDescription} onChange={handleProjectChange}></textarea>
                </div>
            </div><br></br>
            <div className='mag-two-items'>
               <div className='mag-sm-input'>
                    <div className='mag-sm-input'>
                    <label>Project Type</label>
                    <input required type='text' placeholder='Enter project type' name='projectType' value={projectData.projectType} onChange={handleProjectChange}></input>
                </div>
                </div>
                <div className='mag-sm-input'>
                    <label>Your Role</label>
                    <input required type='text' placeholder='Enter your role' name='role' value={projectData.role} onChange={handleProjectChange}></input>
                </div>
            </div><br></br>
            <div className='mag-two-items'>
                <div className='mag-mid-input'>
                    <label>Technologies/Tools Used</label>
                    <input type='text' placeholder='Enter Technology/Tool' name='technologyInput' value={technologyInput} onChange={(e)=>setTechnologyInput(e.target.value)}></input>
                </div><br></br><br></br>
                {/* <div className='mag-btn'><p>+ Add</p></div> */}
                <button type='button' className='mag-btn' onClick={()=>{
                    if(technologyInput.trim()==='')return;
                    setProjectData(prev=>({
                        ...prev,
                        technologiesUsed: [...prev.technologiesUsed, technologyInput]
                    }));
                    setTechnologyInput('');
                }}>+ Add</button>
            </div><br/>
            <div className="project-tags">
                {projectData.technologiesUsed.map((technology, index)=>(
                    <div key={index} className='project-tag'>
                        <span>{technology}</span>
                        <button type='button' className='remove-btn' onClick={()=>{
                            setProjectData(prev=>({
                                ...prev,
                                technologiesUsed: prev.technologiesUsed.filter((_, i)=>i !== index)
                            }));
                        }}>x</button>
                    </div>
                ))}
            </div>
            <br/>


            <div className='mag-two-items'>
                <div className='mag-mid-input'>
                    <label>Features/Modules</label>
                    <input type='text' placeholder='Enter Features/Modules' name='featuresInput' value={featureInput} onChange={(e)=>setFeatureInput(e.target.value)}></input>
                </div><br></br><br></br>
                {/* <div className='mag-btn'><p>+ Add</p></div> */}
                <button type='button' className='mag-btn' onClick={()=>{
                    if(featureInput.trim()==='')return;
                    setProjectData(prev=>({
                        ...prev,
                        features: [...prev.features, featureInput]
                    }));
                    setFeatureInput('');
                }}>+ Add</button>
            </div><br/>
            <div className="project-tags">
                {projectData.features.map((feature, index)=>(
                    <div key={index} className='project-tag'>
                        <span>{feature}</span>
                        <button type='button' className='remove-btn' onClick={()=>{
                            setProjectData(prev=>({
                                ...prev,
                                features: prev.features.filter((_, i)=>i !== index)
                            }));
                        }}>x</button>
                    </div>
                ))}
            </div>
            <br/>
             <div className='mag-two-items'>
                <div className='mag-sm-input'>
                    <label>Start Date</label>
                    <input required type='date' name='startDate' value={projectData.startDate} onChange={handleProjectChange}></input>
                </div>
                <div className='mag-sm-input'>
                    <label>End Date</label>
                    <input type='Date' name='endDate' value={projectData.endDate} onChange={handleProjectChange}></input>
                    <p>Leave Empty if ongoing</p>
                </div>
            </div><br></br>
            <div className='mag-two-items'>
               <div className='mag-sm-input'>
                    <div className='mag-sm-input'>
                    <label>Team Size</label>
                    <input required type='number' placeholder='Enter number of team members' name='teamSize' value={projectData.teamSize} onChange={handleProjectChange}></input>
                </div>
                </div>
                <div className='mag-sm-input'>
                    <label>Status</label>
                    <select required name='status' value={projectData.status} onChange={handleProjectChange}>
                        <option value="">Select Status</option>
                        <option value="Completed">Completed</option>
                        <option value="InProgress">In Progress</option>
                        <option value="OnHold">On Hold</option>
                        <option value="Planned">Planned</option>
                    </select>
                </div>
            </div><br></br>
            <div className='mag-two-items'>
               <div className='mag-sm-input'>
                    <div className='mag-sm-input'>
                    <label>Demo Link</label>
                    <input required type='text' placeholder='Enter the demo link' name='demoLink' value={projectData.demoLink} onChange={handleProjectChange}></input>
                </div>
                </div>
                <div className='mag-sm-input'>
                    <label>GitHub Link</label>
                    <input required type='text' placeholder='Enter github link' name='githubLink' value={projectData.githubLink} onChange={handleProjectChange}></input>
                </div>
            </div><br></br>
            <div className='mag-submit-button'>
                <input type="submit" value={formLoading ? "Saving..." : "+ Add Project"} disabled={formLoading}></input>
            </div>
        </form>
      </div>


      <div className={`mag-form ${activeTab==='education'?'active':''}`}>
        <h2>Manage Education</h2><br/>
        <div className='mag-line'></div><br/>
        <form onSubmit={handleEducationSubmit}>
            <div className='mag-two-items'>
               <div className='mag-sm-input'>
                    <div className='mag-sm-input'>
                    <label>Degree/Qualification</label>
                    <input required type='text' placeholder='Enter degree/qualification' name='degree' value={educationData.degree} onChange={handleEducationChange}></input>
                </div>
                </div>
                <div className='mag-sm-input'>
                    <label>Institute Name</label>
                    <input required type='text' placeholder='Enter institute name' name='instituteName' value={educationData.instituteName} onChange={handleEducationChange}></input>
                </div>
            </div><br></br>
            <div className='mag-two-items'>
               <div className='mag-sm-input'>
                    <div className='mag-sm-input'>
                    <label>University/Board</label>
                    <input required type='text' placeholder='Enter university/board name' name='universityBoard' value={educationData.universityBoard} onChange={handleEducationChange}></input>
                </div>
                </div>
                <div className='mag-sm-input'>
                    <label>Location</label>
                    <input required type='text' placeholder='Enter location' name='location' value={educationData.location} onChange={handleEducationChange}></input>
                </div>
            </div><br></br>
            <div className='mag-two-items'>
                <div className='mag-sm-input'>
                    <label>Start Date</label>
                    <input required type='date' name='startDate' value={educationData.startDate} onChange={handleEducationChange}></input>
                </div>
                <div className='mag-sm-input'>
                    <label>End Date</label>
                    <input type='Date' name='endDate' value={educationData.endDate} onChange={handleEducationChange}></input>
                    <p>Leave Empty if currently studying</p>
                </div>
            </div><br></br>
            <div className='mag-two-items'>
               <div className='mag-sm-input'>
                    <div className='mag-sm-input'>
                    <label>Percentabe/CGPA</label>
                    <input required type='text' placeholder='Enter the percentage/CGPA' name='percentageCgpa' value={educationData.percentageCgpa} onChange={handleEducationChange}></input>
                </div>
                </div>
                <div className='mag-sm-input'>
                    <label>Course Time</label>
                    <select required name='courseTime' value={educationData.courseTime} onChange={handleEducationChange}>
                        <option value="">Select Course Time</option>
                        <option value="Full Time">Full Time</option>
                        <option value="Part Time">Part Time</option>
                        <option value="Distance Learning">Distance Learning</option>
                    </select>
                </div>
            </div><br></br>
            <div className='mag-single-item'>
                <div className='mag-bg-input'>
                    <label>Field Of Study</label>
                    <input required type='text' placeholder='Enter the field' name='fieldOfStudy' value={educationData.fieldOfStudy} onChange={handleEducationChange}></input>
                </div>
            </div><br></br>
             <div className='mag-two-items'>
               <div className='mag-sm-input'>
                <div className='mag-sm-input'>
                    <label>Institution Logo(PNG Image)</label>
                    <input required type='file' ref={eduLogoRef} accept='image/png' name='institutionLogo' onChange={(e)=>setEducationData(prev=>({
                        ...prev,
                        institutionLogo: e.target.files[0]
                    }))}></input>
                </div>
                </div>
                <div className='mag-sm-input'>
                    <label>Certificates(PDF)</label>
                    <input required type='file' ref={eduCertRef} accept="application/pdf" name='certificates' onChange={(e)=>setEducationData(prev=>({
                        ...prev,
                        certificates: e.target.files[0]
                    }))}></input>
                </div>
            </div><br></br>
             <div className='mag-submit-button'>
                <input type="submit" value={formLoading ? "Saving..." : "+ Add Education"} disabled={formLoading}></input>
            </div>
        </form>
      </div>



      <div className={`mag-form ${activeTab==='resume'?'active':''}`}>
        <h2>Update Resume</h2><br/>
        <div className='mag-line'></div><br/>
        <form onSubmit={handleResumeSubmit}>
            <div className='mag-single-item'>
                <div className='mag-bg-input'>
                    <label>Resume File(PDF)</label>
                    <input required type='file' ref={resDocRef} accept='application/pdf' name='resume' onChange={(e)=>setResumeData(prev=>({
                        ...prev,
                        resume: e.target.files[0]
                    }))}></input>
                </div>
            </div><br></br>
            <div className='mag-single-item'>
                <div className='mag-bg-input'>
                    <label>Resume Version</label>
                    <input required type='text' placeholder='e.g. v2.1, January 2024' name='resumeVersion' value={resumeData.resumeVersion} onChange={handleResumeChange}></input>
                </div>
            </div><br></br>
            <div className='mag-single-item'>
                <div className='mag-bg-input'>
                    <label>Notes/Description</label>
                    <textarea required placeholder='Brief description of updates in this version' name='description' value={resumeData.description} onChange={handleResumeChange}></textarea>
                </div>
            </div><br></br>



             <div className='mag-submit-button'>
                
                <button type='submit' disabled={formLoading}>
                    <i className='fas fa-upload'></i><p>{formLoading ? "Saving..." : "Upload Resume"}</p>
                </button>
            </div>
        </form>
      </div> 


      <div className={`mag-form ${activeTab==='profileEdit'?'active':''}`}>
        <h2>Update Profile Picture & Heading</h2><br/>
        <div className='mag-line'></div><br/>
        <form onSubmit={handleProfileSubmit}>
            <div className='mag-single-item'>
                <div className='mag-bg-input'>
                    <label>Profile Picture(PNG)</label>
                    <input required type='file' ref={proDocRef} accept='image/png' name='profilePicture' onChange={(e)=>setProfileData(prev=>({
                        ...prev,
                        profilePicture: e.target.files[0]
                    }))}></input>
                </div>
            </div><br></br>
            <div className='mag-single-item'>
                <div className='mag-bg-input'>
                    <label>Name</label>
                    <input required type='text' placeholder='Enter your name' name='name' value={profileData.name} onChange={handleProfileChange}></input>
                </div>
            </div><br></br>
            <div className='mag-single-item'>
                <div className='mag-bg-input'>
                    <label>Heading</label>
                    <textarea required placeholder='Brief description of updates in this version' name='heading' value={profileData.heading} onChange={handleProfileChange}></textarea>
                </div>
            </div><br></br>
             <div className='mag-submit-button'>
                
                <button type='submit' disabled={formLoading}>
                    <i className='fas fa-upload'></i><p>{formLoading ? "Saving..." : "Upload Profile Picture & Heading"}</p>
                </button>
            </div>
        </form>
      </div>
        
        <div className={`mag-form ${activeTab==='Certificates'?'active':''}`}>
        <h2>Manage Certificates</h2><br/>
        <div className='mag-line'></div><br/> 
        <form onSubmit={handleCertificateSubmit}>  
            <div className='mag-two-items'>
                <div className='mag-sm-input'>
                    <label>Certificate Name</label>
                    <input required type='text' placeholder='Enter Certificate name' name='name' value={certificateData.name} onChange={handleCertificateChange}></input>
                </div>
                <div className='mag-sm-input'>
                    <label>Certificate logo(BootStrap icon class)</label>
                    <input required type='text' placeholder='Enter logo class' name='logo' value={certificateData.logo} onChange={handleCertificateChange}></input>
                </div>
                
            </div><br></br>
            <div className='mag-two-items'>
                <div className='mag-sm-input'>
                    <label>Badge</label>
                    {/* <input type='text' placeholder='Enter category/type' name='category' value={skillData.category} onChange={handleSkillChange}></input> */}
                    <select required name='badge' value={certificateData.badge} onChange={handleCertificateChange}>
                        <option value="">Select Badge</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Professional">Professional</option>
                        <option value="Expert">Expert</option>
                    </select>
                </div>
                <div className='mag-sm-input'>
                    <label>Issued Date</label>
                    <input required type='date' name="issueDate" value={certificateData.issueDate} onChange={handleCertificateChange}></input>
                </div>
                
            </div><br></br>
            <div className='mag-two-items'>
                <div className='mag-sm-input'>
                    <label>Certificate Provider</label>
                    <input required type='text' placeholder='Enter the Certificate Provider' name='provider' value={certificateData.provider} onChange={handleCertificateChange}></input>
                </div>
                <div className='mag-sm-input'>
                    <label>Credential ID</label>
                    <input required type='text' placeholder='Enter the Credential ID' name='credentialId' value={certificateData.credentialId} onChange={handleCertificateChange}></input>
                </div>
                
                
            </div><br></br>
            <div className='mag-single-item'>
                <div className='mag-bg-input'>
                    <label>Certificate </label>
                    <input required type='file' ref={certDocRef} placeholder='Upload Certificate file' name='certificate' onChange={(e)=>setCertificateData(prev=>({
                        ...prev,
                        certificate: e.target.files[0]
                    }))}></input>
                </div>
            </div>
            <br></br>
            <div className='mag-two-items'>
                <div className='mag-mid-input'>
                    <label>Skills Gained</label>
                    <input type='text' placeholder='Enter the skill name' value={certSkillInput} onChange={(e)=>setCertSkillInput(e.target.value)}></input>
                </div><br></br><br></br>
                {/* <div className='mag-btn'><p>+ Add</p></div> */}
                <button type='button' className='mag-btn' onClick={()=>{
                    if(certSkillInput.trim()==='')return;
                    setCertificateData(prev=>({
                        ...prev,
                        skillsGained: [...prev.skillsGained, certSkillInput]
                    }));
                    setCertSkillInput('');
                }}>+ Add</button>
            </div><br/>
            <div className="project-tags">
                {certificateData.skillsGained.map((skill, index)=>(
                    <div key={index} className='project-tag'>
                        <span>{skill}</span>
                        <button type='button' className='remove-btn' onClick={()=>{
                            setCertificateData(prev=>({
                                ...prev,
                                skillsGained: prev.skillsGained.filter((_, i)=>i !== index)
                            }));
                        }}>x</button>
                    </div>
                ))}
            </div>
            <br/>
            <div className='mag-submit-button'>
                <input type="submit" value={formLoading ? "Saving..." : "+ Add Certificate"} disabled={formLoading}></input>
            </div>
        </form>
      </div>




      <div className={`mag-form ${activeTab==='passwordUpdate'?'active':''}`}>
        <h2>Update Password</h2><br/>
        <div className='mag-line'></div><br/>
        <form onSubmit={handlePasswordSubmit}>
            <div className='mag-single-item'>
                <div className='mag-bg-input'>
                    <label>Old Password</label>
                    <div className='oldPass-box'>
                        <input required type={oldPassView?'text':'password'} placeholder='Enter Old password' name='oldPassword' value={passwordData.oldPassword} onChange={handlePasswordChange}></input>
                        <i className={oldPassView?'fas fa-eye': 'fas fa-eye-slash'} onClick={()=>{
                            if(oldPassView){
                                setOldPassView(false);
                            }
                            else{
                                setOldPassView(true);
                            }
                        }}></i>
                    </div>
                </div>
            </div><br></br>
            <div className='mag-single-item'>
                <div className='mag-bg-input'>
                    <label>New Password</label>
                    <div className='oldPass-box'>
                        <input required type={newPassView?'text':'password'} placeholder='Enter new password' name='newPassword' value={passwordData.newPassword} onChange={handlePasswordChange}></input>
                        <i className={newPassView?'fas fa-eye': 'fas fa-eye-slash'} onClick={()=>{
                            if(newPassView){
                                setNewPassView(false);
                            }
                            else{
                                setNewPassView(true);
                            }
                        }}></i>
                    </div>
                </div>
            </div><br></br>
            <div className='mag-single-item'>
                <div className='mag-bg-input'>
                    <label>Confirm Password &nbsp; &nbsp; {passwordError && <span style={{color: "red", fontSize: "15px"}} className="error">({passwordError})</span>}</label>
                    {/* <textarea placeholder='Brief description of updates in this version' name='heading' value={profileData.heading} onChange={handleProfileChange}></textarea> */}
                    <div className='oldPass-box'>
                        <input required type={confirmPassView?'text':'password'} placeholder='Confirm password' name='confirmPassword' value={passwordData.confirmPassword} onChange={handlePasswordChange}></input>
                        <i className={confirmPassView?'fas fa-eye': 'fas fa-eye-slash'} onClick={()=>{
                            if(confirmPassView){
                                setConfirmPassView(false);
                            }
                            else{
                                setConfirmPassView(true);
                            }
                        }}></i>
                    </div>
                </div>
            </div><br></br>
             <div className='mag-submit-button'>
                
                <button type='submit' disabled={formLoading}>
                    <i className='fas fa-edit'></i><p>{formLoading ? "Saving..." : "Update Password"}</p>
                </button>
            </div>
        </form>
      </div>




    {activeTab==='passwordUpdate'?(
        <p></p>
    ):(
        <div className="records-container">
        <h1>Records</h1>

        <div className="record-list">
        {uploadedData.length===0?(
            <p>No Records Found</p>
        ):(
            <table className="record-table">
                <thead>
                    <tr>
                        <th className="action-col">Action</th>

                        {uploadedData.length > 0 &&
                            Object.keys(uploadedData[0]).map((key) => (
                                <th key={key}>{key}</th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {uploadedData.map((record, index) => (
                        <tr key={index}>
                            <td className="action-col">
                                <button className="delete-btn" onClick={()=>handleDelete(record.id)}>
                                    <i className="fas fa-trash"></i>
                                </button>
                            </td>

                            {Object.values(record).map((value, i) => (
                                <td key={i} title={value}>{value}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        )}
             
        </div>
       </div>
    )}
    </div>
    </motion.div>
  )
}
