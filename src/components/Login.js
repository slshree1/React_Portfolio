import React from 'react'
import './Login.css'
import { motion } from 'framer-motion';
export default function Login() {
  return (
    <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
    >
    <div className='login-container'>
        <h1>Welcome Back Shreyash</h1>
      <form className='login-card' method='post'>
        <h1>Login to Update Details</h1><br></br>
        <div className='inputfield-container'>
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" placeholder='email' required /><br/>
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" placeholder='Password' required /><br/><br/>
        <button type="submit">Login</button><br/>

        </div>
        <a href="/">Forgot Password</a>
      </form>
    </div>
    </motion.div>
  )
}
