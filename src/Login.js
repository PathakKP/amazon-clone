import React, { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'
import "./Login.css"
import {auth} from './firebase'

function Login() {
  const navigate=useNavigate();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const signIn=e =>{
    e.preventDefault();

    auth  
        .signInWithEmailAndPassword(email,password)
        .then((auth)=>{
            navigate('/');
        })
        .catch(error=>alert(error.message))
    //some fancy firebase login shit...
  }

  const register=e=> {
    e.preventDefault();

    auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
          //it successfully created an new user
          console.log(auth);
          if(auth) {
            navigate('/');
          }
        })
        .catch(error => alert(error.message))

    //do some fancy firebase stuff;
  }

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
                <input type='text' value={email} onChange={e=>setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input type='password' value={password} onChange={e=>setPassword(e.target.value)}/>

                <button  type='submit' onClick={signIn}
                className='login_signInButton' >Sign In</button>

                
            </form>
            <p>By continuing, you agree to Amazon's 
                    Conditions of Use and Privacy Notice.</p>

                    <button onClick={register}
                     className='login_registerButton'>Create your Amazon Account</button>
        </div>
        <p>© 1996-2022, Amazon.com,
             Inc. or its affiliates</p>
    </div>
  )
}

export default Login