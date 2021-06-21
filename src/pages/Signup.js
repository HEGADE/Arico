import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { authC } from "../store/SignupContext";
import Heading from "../commomComponets/Heading";
import { Msg } from "../commomComponets/Msg";
import { LocalStorage } from "../helper/localStorage";
import CircularIndeterminate from "../commomComponets/Loader";

const Signup = () => {
  const { signup, isLog, setIsLogg, loadingHandler, loading } =
    useContext(authC);
  const [_isLog, setIsLog] = useState(false);
  const [_token, setToken] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [_msg, setMsg] = useState(null);

  const submit = async (e) => {
    let Button = e;
    Button.preventDefault();
    loadingHandler(Button, "gray", true);

    try {
      let { msg, token } = await signup(
        username,
        name,
        email,
        password,
        cPassword
      );

      setMsg(msg);
      if (token) {
        LocalStorage.setItem(token);
        setMsg("User Created");
        setIsLogg(true);
        setIsLog(true);
      
      }
      loadingHandler(Button, "#0077ff", false);
    } catch (e) {
      setMsg("Network error please try again");
      loadingHandler(Button, "#0077ff", false);
    }
  };
  if (loading) return <CircularIndeterminate />;
  if (isLog) return <Redirect to="/" />;

  return (
    <>
      <Heading title="Signup" />
      {_msg && <Msg msg={_msg} bgColor={!_token ? "red" : "green"} />}
      <dir className="signup_container">
        <label>username </label>
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
        <button onClick={submit}> {loading ? "Loading" : "Login"}</button>
      </dir>
    </>
  );
};

export default Signup;
