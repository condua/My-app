import React, { useState } from "react";
import Add from "../img/addAvatar.png";

import { useNavigate, Link } from "react-router-dom";
const Register = () => {
  let navigate = useNavigate(); 
  const routeChange = (p) =>{ 
    let path = p; 
    navigate(path);
  }
  return (
    <div className="formContainer">
      <div className="frameSignupLogin">
      <div className="leftlogo"> 
      <img src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.15752-9/310312120_5635171316563304_5108304047570009659_n.png?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=i7BZJEmk5noAX_if2GN&_nc_oc=AQmafQc9iZZyfPjNAAFrcICIARwZZooWhTVakoX7Pu9j0BSOLd0hqTrWzudzdj5aa9Q&_nc_ht=scontent.fsgn5-3.fna&oh=03_AdSpA_HpYvc9e4stT3THD_jiou-Lqw5xqiDPJXrA0s_RZA&oe=637362BE" style={{width:'100px',height:'100px'}} alt="" />
      English examination system </div>
      </div>  
      <div className="formWrapperRegister" style={{marginTop:'100px',padding:'none'}}>
        <span className="logo">Register</span>
        <form >
          <p>Name</p>
          <input required type="text" placeholder="display name" />
          <p>Phone</p>
          <input type="tel" id="phone" name="phone" placeholder="Phone" pattern="[0-9]{10}" required/>
          <p>Date of birth</p>
          <input 
            id="date"
            type="date"
            defaultValue=""
          />
          <p>Email</p>
          <input required type="email" placeholder="email" />
          <p>Password</p>
          <input type="password" placeholder="password" id="pwd" name="pwd" minlength="8"/>
          <input required style={{ display: "none" }} type="file" id="file" />
          {/* <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an avatar</span>
          </label> */}
          <div className="checkbox1">
            <input type="checkbox"/>
            <span> I agree to the <a href="#">Terms of Service</a> and <a href="">Privacy Policy</a></span>
          </div>
          <button >Create an account</button>
        </form>
        
        <p>
          You do have an account? <Link to="/Login">Login</Link>
        </p>
      </div>
      <button className="button1" onClick={()=>routeChange('../register')}>Sign up </button>
      
      <button className="button2" onClick={()=>routeChange('../login')}>Log in </button>
    </div>
  );
};

export default Register;
