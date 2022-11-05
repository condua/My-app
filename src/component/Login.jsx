import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Register from "./Register";
const Login = () => {
  let navigate = useNavigate(); 
  const routeChange = (p) =>{ 
    let path = p; 
    navigate(path);
  }
  return (
    
    <div className="formContainer">
  
      {/* <div className="imglogo"></div> */}
      <div className="frameSignupLogin">
      <div className="leftlogo"> 
      <img src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.15752-9/310312120_5635171316563304_5108304047570009659_n.png?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=i7BZJEmk5noAX_if2GN&_nc_oc=AQmafQc9iZZyfPjNAAFrcICIARwZZooWhTVakoX7Pu9j0BSOLd0hqTrWzudzdj5aa9Q&_nc_ht=scontent.fsgn5-3.fna&oh=03_AdSpA_HpYvc9e4stT3THD_jiou-Lqw5xqiDPJXrA0s_RZA&oe=637362BE" style={{width:'100px',height:'100px'}} alt="" />
      English examination system </div>
      </div>
      <div className="Img"></div>
      <div className="formWrapper">
        <span className="logo">Login</span>
        {/* <span className="title">Login</span> */}
        <form >
          <input type="email" placeholder="username" />
          <input type="password" placeholder="password" />
          <div className="checkbox">
          <input type="checkbox" />
          <span> Keep me logged in</span>
          <Link to="/#" className="forgotpassword">Forgot Password</Link>
        </div>
        </form>
        
        <button className="signin">
          Login
        </button>

        <p style={{marginRight:'9rem'}}>Not a member? <a href="/register">Sign up</a> </p>
        {/* <Link to="/register" style={{}}>Sign up</Link> */}
      </div>
      <button className="button1" onClick={()=>routeChange('../register')}>Sign up </button>
      
      <button className="button2" onClick={()=>routeChange('../login')}>Log in </button>
    </div>
    
  );
    
};

export default Login;
