import React from 'react'
import './login.scss'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <div className='login'>
      <div className="sidebar">
        <h1>Board.</h1>
      </div>
      <div className="auth">
        <h2>Sign In</h2>
        <p>Sign in to your account</p>
        <div className="localTag">
          <span>Sign in with Google</span>
          <span>Sign in with Apple</span>
        </div>
        <form>
          <label htmlFor="username">Email address</label>
          <input type="email" name='username' id='username' required/>
          <label htmlFor="password">Password</label>
          <input type="password" name='password' id='password' required/>
          <Link className='link'>Forgot password?</Link>
          <button typeof='submit'>Sign in</button>
        </form>
        <p>Don't have an account? <Link to={"/register"}>Register here</Link></p>
      </div>
    </div>
  )
}
