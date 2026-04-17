import React, { useEffect, useState } from 'react'
import './StartupIdea.css'
import axios from 'axios';

export default function StartupIdea({onClose}) {


    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
          document.body.style.overflow = 'auto';
        };
    }, []);


    const[startupData, setStartupData]=useState({
        fullName: '',
        email: '',
        phone: '',
        startUpName: '',
        idea: '',
        problem: '',
        solution: '',
        targetAudience: '',
        currentStage: '',
        haveYouBuild: '',
        lookingFor: [],
        expectedRole: ''
    });
    const [startupLoading, setStartupLoading] = useState(false);

    const handleInputChange=(e)=>{
        const{name, value}=e.target;
        setStartupData(prev=>({
            ...prev,
            [name]:value
        }));
    }

    const handleCheckBoxChange=(e)=>{
        const {value, checked}=e.target;
        setStartupData((prev)=>{
            if(checked){
                return{
                    ...prev,
                    lookingFor: [...prev.lookingFor, value],
                };
            }
            else{
                return{
                    ...prev, 
                    lookingFor: prev.lookingFor.filter(
                        (item)=>item!==value
                    ),
                };
            }
        });
    };


    const handleStartupSubmit=async(e)=>{
        e.preventDefault();
        setStartupLoading(true);
        try {
            const response=await axios.post(
                "https://portfolio-backend-77cq.onrender.com/startup-idea",
                startupData,
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );

            if(response){
                alert("Request Has Been sent Successfully");
                onClose();
            }
            else{
                alert("Failed to send the Request");
            }
        } catch (e) {
            console.error(e);
            alert("Failed to send the Request");
        } finally {
            setStartupLoading(false);
        }
    }

  return (
    <div className='si-page'>
        <div className='si-card'>
            <button className="close-btn" onClick={onClose}>✕</button>
            <form className='si-form' onSubmit={handleStartupSubmit}>
                <h2>Startup Idea</h2>
                <div className='si-two-item-box'>
                    <div className='si-form-group'>
                        <label>Full Name</label>
                        <input type='text' name='fullName' value={startupData.fullName} onChange={handleInputChange}></input>
                    </div>
                    <div className='si-form-group'>
                        <label>Email</label>
                        <input type='email' name='email' value={startupData.email} onChange={handleInputChange}></input>
                    </div>
                </div>
                <div className='si-two-item-box'>
                    <div className='si-form-group'>
                        <label>Phone/WhatsApp</label>
                        <input type='phone' name='phone' value={startupData.phone} onChange={handleInputChange}></input>
                    </div>
                    <div className='si-form-group'>
                        <label>StartUp Name</label>
                        <input type='text' name='startUpName' value={startupData.startUpName} onChange={handleInputChange}></input>
                    </div>
                </div>
                <div className='si-two-item-box'>
                    <div className='si-form-group'>
                        <label>Idea Summary</label>
                        <textarea rows="4" placeholder='Explain Your Idea...' name='idea' value={startupData.idea} onChange={handleInputChange}></textarea>
                    </div>
                    <div className='si-form-group'>
                        <label>Problem being solved</label>
                        <textarea rows="4" placeholder='Explain Your problem which will be solved...' name='problem' value={startupData.problem} onChange={handleInputChange}></textarea>
                    </div>
                </div>
                <div className='si-two-item-box'>
                    <div className='si-form-group'>
                        <label>Proposed Solution</label>
                        <textarea rows="5" placeholder='Explain Your Solution...' name='solution' value={startupData.solution} onChange={handleInputChange}></textarea>
                    </div>
                    <div className='si-form-group'>
                        <div className='si-form-group'>
                            <label>Target Audience/User</label>
                            <input type='text' name='targetAudience' value={startupData.targetAudience} onChange={handleInputChange}></input>
                        </div>
                        <div className='si-form-group'>
                            <label>Current Stage</label>
                            <select name='currentStage' value={startupData.currentStage} onChange={handleInputChange}>
                                <option>Select</option>
                                <option value="idea only">Idea Only</option>
                                <option value="prototype">Prototype</option>
                                <option value="mvp">MVP</option>
                                <option value="live product">Live Product</option>
                                <option value="revenue generation">Revenue Generation</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='si-two-item-box'>
                    <div style={{display: "flex", flexDirection: "column", gap: '20px'}}>
                        <div className='si-form-group'>
                            <label>Have you build anything already?</label>
                            <select name='haveYouBuild' value={startupData.haveYouBuild} onChange={handleInputChange}>
                                <option value="">Select</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                        <div className='si-form-group'> 
                            <label>Expected role from me</label>
                            <input type='text' name='expectedRole' value={startupData.expectedRole} onChange={handleInputChange}></input>
                        </div>
                    </div>
                    
                    <div className='si-form-group'>
                        <label>What are you looking for?</label>
                        <div style={{width: '500px', display: 'flex', flexDirection: 'column', gap: "10px", padding: '10px'}}>
                            <label style={{display: "flex", gap: "5px", alignItems: 'center'}}><input type='checkbox' value="Technical Cofounder" onChange={handleCheckBoxChange} checked={startupData.lookingFor.includes("Technical Cofounder")}></input> Technical Cofounder</label>
                            <label style={{display: "flex", gap: "5px", alignItems: 'center'}}><input type='checkbox' value="Developer Help" onChange={handleCheckBoxChange} checked={startupData.lookingFor.includes("Developer Help")}></input > Developer Help</label>
                            <label style={{display: "flex", gap: "5px", alignItems: 'center'}}><input type='checkbox' value="Product Guidance" onChange={handleCheckBoxChange} checkeed={startupData.lookingFor.includes("Product Guidance")}></input> Product Guidance</label>
                            <label style={{display: "flex", gap: "5px", alignItems: 'center'}}><input type='checkbox' value="Feedback only" onChange={handleCheckBoxChange} checked={startupData.lookingFor.includes("Feedback only")}></input> Feedback only</label>
                            <label style={{display: "flex", gap: "5px", alignItems: 'center'}}><input type='checkbox' value="Investment Discussion" onChange={handleCheckBoxChange} checked={startupData.lookingFor.includes("Investment Discussion")}></input> Investment Discussion</label>
                        </div>
                    </div>
                </div>
                
                <button type='submit' disabled={startupLoading}>{startupLoading ? "Submitting..." : "Submit"}</button>
            </form>
        </div>
    </div>
  )
}
