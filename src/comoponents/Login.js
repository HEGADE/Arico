import React from "react";
import Header from "../commomComponets/Heading"

const Login = () => {
  return (
    <>
    <Header/>
      <div className="login_container">
      <label > username</label>
        <input type="text" placeholder="username" />
        <label > password</label>

        <input type="password" placeholder="password" />
        <button> Login</button>
      </div>
    </>
  );
};

export default Login;
