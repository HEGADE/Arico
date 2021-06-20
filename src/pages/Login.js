import React, { useState, useEffect, useContext } from "react";
import Header from "../commomComponets/Heading";
import FlexLogin from "../customStyleCom/customStyle";
import { Redirect } from "react-router-dom";
import { authC } from "../store/SignupContext";
import { LocalStorage } from "../helper/localStorage";
import { Msg } from "../commomComponets/Msg";
import CircularIndeterminate from "../commomComponets/Loader";

const Login = () => {
  const [isAuthenticatedUser, setAuthenticated] = useState(false);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [_token, setToken] = useState("");
  const { setIsLogg, login, loadingHandler, loading, isLog ,setLoading} =
    useContext(authC);
  const [_msg, setMsg] = useState(null);

  const submit = async (e) => {
    // logger Function
    let Button = e;
    Button.preventDefault();
    loadingHandler(Button, "gray", true);
    try {
      let data = await login(username, password);
      setMsg(data?.data?.msg); 

      if (data?.data?.token) {
        LocalStorage.setItem(data?.data?.token);
        setToken(data?.data?.token);
        setIsLogg(true);
        loadingHandler(Button, "gray", false);

        setTimeout(() => {
          setAuthenticated(true);
        }, 1000);
      }
    } catch (e) {
      setMsg("Some network error");
 
    }
  };

  document.title = "Login";
  if (loading) return <CircularIndeterminate />;
  if (isLog) return <Redirect to="/" />;

  return (
    <>
      {_msg && <Msg msg={_msg} bgColor={!_token ? "red" : "green"} />}
      <Header />
      <div className="login_header">Login</div>
      <FlexLogin>
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
      </FlexLogin>
    </>
  );
};

export default Login;
