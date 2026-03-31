import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';


import './Certifications.css';
import axios from 'axios';

export default function Certifications() {
    const [pdfUrl, setPdfUrl]=useState(null);
    const [certificatesData, setCertificatesData]=useState([]);
 
    useEffect(()=>{
        axios.get("http://localhost:8080/getCertificates")
        .then((res)=>setCertificatesData(res.data))
        .catch((error)=>console.error(error));
    },[]);
    

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
        >
            <div className='cert-page'>

                <div className='cert-heading'>
                    <h1>My Certifications</h1>
                    <div className='color-bar'></div>
                    <p>Professional certifications and achievements that validate my expertise and commitment to continuous learning.</p>
                </div>
                <div className='card-container'>
                    {
                        certificatesData.map((cert, index)=>(
                            <div className='cert-card' key={index}>
                                <div className='cert-card-heading'>
                                    <div className='cert-card-logo'>
                                        <i className={cert.logo}></i>
                                    </div>
                                    <div className='cert-card-title'>
                                        <h2>{cert.name}</h2>
                                        <p>{cert.provider}</p>
                                    </div>
                                </div> 
                                <div className='cert-date-badge'>
                                    <p className='cert-card-date'><i className="fas fa-calendar-alt"></i> &nbsp;Issued on: {cert.issueDate}</p>
                                    <p className='cert-card-badge'>{cert.badge}</p>
                                </div>
                                <p className='cert-card-credential'>Credential ID: {cert.credentialId}</p>
                                <div className='cert-card-skills'>
                                    <p>Skills Gained: </p>
                                    <div className='cert-skills'>
                                        {
                                            cert.skillsGained.map((skill, index)=>(
                                                <p key={index}>{skill}</p>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className='cert-view-btn-container'>
                                    <button className='cert-view-btn'onClick={()=>setPdfUrl(`http://localhost:8080/educationDocuments/${cert.certificatePath}`)}>View Certificate<i className="fas fa-external-link-alt"></i></button>
                                </div>
                            </div>
                        ))
                    }
                    
                    
                    
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
        </motion.div>
  )
}
