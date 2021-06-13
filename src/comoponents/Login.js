import React, { useState, useEffect, useContext } from "react";
import Header from "../commomComponets/Heading";
import { isAuthenticated } from "../helper/isAuthenticated";
import { Redirect } from "react-router-dom";
import { authC } from "../store/SignupContext";
import { LocalStorage } from "../helper/localStorage";
import { Msg } from "../commomComponets/Msg";

const Login = () => {
  const [isAuthenticatedUser, setAuthenticated] = useState(false);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [_token, setToken] = useState("");

  const { setIsLogg, login, loadingHandler, loading } = useContext(authC);
  const [_msg, setMsg] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    loadingHandler(e, "gray", true);
    try {
      let data = await login(username, password);
      console.log(data);
      setMsg(data?.data?.msg);
      loadingHandler(e, "#ff005e", false);
      if (data?.data?.token) {
        LocalStorage.setItem(data?.data?.token);
        setToken(data?.data?.token);

        setIsLogg(true);
        setTimeout(() => {
          setAuthenticated(true);
        }, 1000);
      }
    } catch (e) {
      alert("some network error");
    }
  };
  useEffect(() => {
    isAuthenticated()
      .then((data) => {
        if (!data) {
          setAuthenticated(true);
        }
      })
      .catch((e) => {
        alert("Some error occurred");
      });
  }, []);
  document.title = "Login";
  if (isAuthenticatedUser) return <Redirect to="/" />;
  else
    return (
      <>
        <Header />
        {_msg && <Msg msg={_msg} bgColor={!_token ? "red" : "green"} />}
        <div className="login_header">Login</div>
        <div className="login_container">
          <label> username</label>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          <label> password</label>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={submit}> {loading ? "Loading" : "Login"}</button>
        </div>
      </>
    );
};

export default Login;
