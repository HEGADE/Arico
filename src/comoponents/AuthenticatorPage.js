import React from "react";
import ArcioHeading from "../commomComponets/Heading";
import "../assets/css/auth.css";
import { Link } from "react-router-dom";
import {LocalStorage} from "../helper/localStorage"
const AuthenticatorPage = () =>{

 let  storage =new LocalStorage()
 storage.setItem("hha")
  
 return (
    <>
    <ArcioHeading />

    <div className="welcome_heading">
      <p>
        Welcome to Arico,
        <br /> <small>arena of articles</small>
      </p>
    </div>
    <div className="auth_container">
    <Link to="/login">
      <div className="login">
       Login
      </div></Link> <Link to="/Signup">
      <div className="signup">
      Signup
      </div>
     </Link>
      <small>
        <Link to="/terms">Terms and Conditions</Link>
      </small>
    </div>
    <div className="circle"></div>
  </>
);
}

export default AuthenticatorPage;
