import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import axios from 'axios';
export default function Login() {
  const [email, setEmail]=useState("");
  const [pass, setPass]=useState("");
  const [passView, setPassView]=useState(false);
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();   // prevents page refresh

  

    const loginData={email, pass};
    const response= await fetch("http://localhost:8080/login", {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(loginData)
    });

    const data=await response.json();
    if(data.status==="success"){
      alert("login Successful"); 
      navigate("/Management"); 
    }
    else{
      alert("Invalid Credentials");
    }
  };

  const[showForgotPassword, setShowForgotPassword]=useState(false);


  const handleForgotPassword= async()=>{
    try{
      const response=await axios.get("http://localhost:8080/forgotPassword");
      if(response.data ===true){
        alert("Password sent to Admin's email address");
        setShowForgotPassword(false);
      }else{
        alert("Error sending password. Please try again later.");
      }
    }catch(error){
      alert("Error sending password. Please try again later.");
    }
  }

  return (
    <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
    >
      <div className='login-container'>
        <h1>Welcome Back Shreyash</h1>
        <form className='login-card' method='post' onSubmit={handleSubmit}>
          <h1>Login to Update Details</h1><br></br>
          <div className='inputfield-container'>
            <label htmlFor="email">Email:</label>
            <input className='login-card-input' type="text" name="email" placeholder='email' required onChange={(e)=>setEmail(e.target.value)}/><br/>
            <label htmlFor="password">Password:</label>
            <div className='password-field'>
              <input type={passView?'text':'password'} name="password" placeholder='Password' required onChange={(e)=>setPass(e.target.value)}/>
              <i className={passView?'fas fa-eye': 'fas fa-eye-slash'} onClick={()=>{
                if(passView){
                  setPassView(false);
                }
                else{
                  setPassView(true);
                }
              }}></i>
            </div><br/><br/>
            <button type="submit">Login</button><br/>
          </div>
          <a onClick={()=>setShowForgotPassword(true)}>Forgot Password</a>
        </form>
      </div>

      {showForgotPassword &&(
        <div className='forgot-pass-container'>
          <div className='forgot-pass-card'>
            <div style={{display: "flex", justifyContent: "space-between"}}>
              <p></p>
              <button className='forgot-pass-close-btn' onClick={()=>setShowForgotPassword(false)}>X</button>
            </div>
            <div className='forgot-pass-card-section2'>
              <h2>Forgot Password</h2>
              <p>By Clicking the following button, the password will be sent to Administrator,s email address.</p>
              <button onClick={handleForgotPassword}>Send Password</button>
            </div>
          </div>
        </div> 
      )}
    </motion.div>
  )
}
