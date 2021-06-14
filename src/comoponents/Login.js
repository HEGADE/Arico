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

  useEffect(() => { // login checker function
    isAuthenticated()
      .then((data) => {
        if (!data) setAuthenticated(true);
      })
      .catch((e) => {
        setMsg("Some error occurred");
      });
  }, []);

  const submit = async (e) => {// logger Function
    let Button = e;
    Button.preventDefault();
    loadingHandler(Button, "gray", true);
    try {
      let data = await login(username, password);
      setMsg(data?.data?.msg);
      loadingHandler(Button, "#ff005e", false);
      if (data?.data?.token) {
        LocalStorage.setItem(data?.data?.token);
        setToken(data?.data?.token);
        setIsLogg(true);

        setTimeout(() => {
          setAuthenticated(true);
        }, 1000);
      }
    } catch (e) {
      setMsg("Some network error");
      loadingHandler(Button, "#ff005e", false);
    }
  };
 
  document.title = "Login";
  if (isAuthenticatedUser) return <Redirect to="/" />;
  else
    return (
      <>
        <Header />
        <div className="login_header">Login</div>
        {_msg && <Msg msg={_msg} bgColor={!_token ? "red" : "green"} />}
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
          <button onClick={submit}> {loading ? "Loading.." : "Login"}</button>
        </div>
      </>
    );
};

export default Login;
