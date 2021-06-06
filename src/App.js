import AuthPage from "./comoponents/AuthenticatorPage";
import Articles from "./comoponents/Articles"
import Login from "./comoponents/Login"
import Signup from "./comoponents/Signup"
import Terms from "./comoponents/terms"
import { Route, Switch, BrowserRouter as Router, Link } from "react-router-dom";

function App() {
  return (
    <>
    <Router>

      <Switch>
        <Route exact path="/" component={Articles} />
        <Route exact path="/auth" component={AuthPage} />
        <Route exact path="/terms" component={Terms} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Signup" component={Signup} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
