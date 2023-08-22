import React from 'react'
import './register.scss'
import { Link } from 'react-router-dom'

export const Register = () => {
  return (
    <div className='register'> 
      <div className="sidebar">
        <h1>Board.</h1>
      </div>
      <div className="auth">
        <h2>Sign Up</h2>
        <form>
          <label htmlFor="email">Email address</label>
          <input type="email" name='email' id='email' required/>
        
          <label htmlFor="password">Password</label>
          <input type="password" name='password' id='password' required/>
          <button typeof='submit'>Sign in</button>
        </form>
        <p>Already have an account? <Link to={"/login"}>Login</Link></p>
      </div>
    </div>
  )
}
