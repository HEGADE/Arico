import React, { lazy, Suspense } from "react";
import CircularIndeterminate from "./commomComponets/Loader";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Notfound from "./pages/NotFound"
import { ReadMore } from "./pages/ReadMore";
const Articles = lazy(() => {
  return import("./pages/Articles");
});
const Login = lazy(() => {
  return import("./pages/Login");
});
const Signup = lazy(() => {
  return import("./pages/Signup");
});
const Terms = lazy(() => {
  return import("./pages/terms");
});
const AuthPage = lazy(() => {
  return import("./pages/AuthenticatorPage");
});
const Profile = lazy(() => {
  return import("./pages/Profile");
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
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/readmore/:id" component={ReadMore} />
            <Route exact path="/*" >
            <Notfound/>
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
