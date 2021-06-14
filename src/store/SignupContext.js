import React, { createContext, useState } from "react";
import { config } from "../config";
import axios from "axios";
import { LocalStorage } from "../helper/localStorage";

export const authC = createContext();
export const SignupContext = ({ children }) => {
  const [isLog, setIsLogg] = useState(true);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState("");

  const signup = async (username, name, email, password, cPassword) => {
    if (password !== cPassword) {
      return { msg: "passwords are not matching", token };
    }
    if (
      password.trim().length < 4 ||
      email.trim().length < 4 ||
      username.trim().length < 4 ||
      name.trim().length < 4 ||
      cPassword.trim().length < 4
    ) {
      return { msg: "Details must be 4 character  long", token };
    }
    const body = {
      username,
      name,
      email,
      password,
    };

    let data = await axios.post(
      "http://localhost:8000/api/signup/",
      JSON.stringify(body),
      config
    );
    

    return { msg: data.data.msg, token: data.data.token };
  };
  const login=async(username,password)=>{
    const body = {
      username,
      password,
    };
    let data = await axios.post(
      "http://localhost:8000/api/login/",
      JSON.stringify(body),
      config
    );
    return data
  }
  const loadingHandler=(e,bgColor,boolean)=>{
    e.target.style.background=bgColor
    setLoading(boolean)

  }
  return <authC.Provider value={{ signup,isLog, setIsLogg,login,loadingHandler,loading }}>{children}</authC.Provider>;
};