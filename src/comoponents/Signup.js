import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { authC } from "../store/SignupContext";
import Heading from "../commomComponets/Heading";
import { Msg } from "../commomComponets/Msg";
import { LocalStorage } from "../helper/localStorage";

const Signup = () => {
  const { signup, isLog, setIsLogg } = useContext(authC);
  const [_isLog, setIsLog] = useState(false);
  const [_token, setToken] = useState("");
  const [loading, setloading] = useState("Signup");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [_msg, setMsg] = useState(null);
  const submit = async (e) => {
    e.preventDefault();
    e.target.style.background = "gray";

    setloading("Loading..");
    function bgChanger() {
      e.target.style.background = "#0077ff";
      setloading("Signup");
    }
    e.target.style.background = "grey";
    signup(username, name, email, password, cPassword)
      .then(({ msg, token }) => {
        setMsg(msg);

        setToken(token);
        if (token) {
          LocalStorage.setItem(token);
          setIsLogg(true);
          setIsLog(true);
        }

        bgChanger();
      })
      .catch((e) => {
        console.log(e);
        setMsg("Network error");
        bgChanger();
      });
  };

  return (
    <>
      {_isLog && <Redirect to="/" />}

      <Heading />
      {_msg && <Msg msg={_msg} bgColor={!_token ? "red" : "green"} />}
      <dir className="signup_container">
        <label>username {isLog}</label>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>name </label>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>email </label>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>password </label>

        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>confirm password </label>

        <input
          type="text"
          placeholder="Confirm Password"
          value={cPassword}
          onChange={(e) => setCPassword(e.target.value)}
        />
        <button onClick={submit}>{loading}</button>
      </dir>
    </>
  );
};

export default Signup;
