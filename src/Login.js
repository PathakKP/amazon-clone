import React from 'react'
import { Link } from 'react-router-dom'
import "./Login.css"

function Login() {
  return (
    <div className='login'>
        <Link to='/'>
        
        <img 
            className='login_logo'
            src={'./Amazon_logo.png'} />
        </Link>

        <div className="login_container">
            <h1>Sign-in</h1>
            <form>
                <h5>E-mail</h5>
                <input type='text' />

                <h5>Password</h5>
                <input type='password' />

                <button className='login_signInButton' >Sign In</button>

                
            </form>
            <p>By continuing, you agree to Amazon's 
                    Conditions of Use and Privacy Notice.</p>

                    <button className='login_registerButton'>Create your Amazon Account</button>
        </div>
        <p>© 1996-2022, Amazon.com,
             Inc. or its affiliates</p>
    </div>
  )
}

export default Login