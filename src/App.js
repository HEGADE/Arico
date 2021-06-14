import React, { lazy, Suspense } from "react";
import CircularIndeterminate from "./commomComponets/Loader";
import { Route, Switch, BrowserRouter as Router, Link } from "react-router-dom";
const Articles = lazy(() => {
  return import("./comoponents/Articles");
});
const Login = lazy(() => {
  return import("./comoponents/Login");
});
const Signup = lazy(() => {
  return import("./comoponents/Signup");
});
const Terms = lazy(() => {
  return import("./comoponents/terms");
});
const AuthPage = lazy(() => {
  return import("./comoponents/AuthenticatorPage");
});

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<CircularIndeterminate />}>
          <Switch>
            <Route exact path="/" component={Articles} />
            <Route exact path="/auth" component={AuthPage} />
            <Route exact path="/terms" component={Terms} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Signup" component={Signup} />
          </Switch>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
