import React from "react";
import ArcioHeading from "../commomComponets/Heading";
import "../assets/css/auth.css";
import { Link } from "react-router-dom";
const AuthenticatorPage = () => (
  <>
    <ArcioHeading />

    <div className="welcome_heading">
      <p>
        Welcome to Arico,
        <br /> <small>arena of articles</small>
      </p>
    </div>
    <div className="auth_container">
      <div className="login">
        <Link to="/login">Login</Link>
      </div>
      <div className="signup">
        <Link to="/Signup">Signup</Link>
      </div>
      <small>
        <Link to="/terms">Terms and Conditions</Link>
      </small>
    </div>
    <div className="circle"></div>
  </>
);

export default AuthenticatorPage;
