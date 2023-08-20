import React, { useState } from "react";
import "./Login1.scss";
import  { Link, useNavigate } from 'react-router-dom';
import { axiosClient } from "../../utils/axiosClient";
import { KEY_ACCESS_TOKEN, setIteam } from "../../utils/localStorageManager";

function Login1() {

  const[email ,setEmail]=useState('')
  const[password ,setPassword]=useState('')
  const navigate =useNavigate();

  async function handleSubmit(e){
    e.preventDefault();
    try {
      const response = await axiosClient.post('/auth/login',{
        email,
        password
      })
        setIteam(KEY_ACCESS_TOKEN, response.result.accessToken )
        navigate('/');

    } catch (e) {
      console.log(e);
    }
   
  }

  return (
    <div className="Login">
      <div className="login-box">
        <h2 className="heading">Login</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="email" className="email" id="email" onChange={(e)=>setEmail(e.target.value)} />

          <label htmlFor="password">Password</label>
          <input type="password" className="password" id="password" onChange={(e)=>setPassword(e.target.value)}/>

          <input type="submit" className="submit" />
        </form>
        <p className="subheading"> 
          Do not have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login1;
