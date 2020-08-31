import React from "react";
import SignUp from "./components/auth/customer/SignUp";
import Login from "./components/auth/customer/Login";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginM from "./components/auth/mess/Login";
import SignUpM from "./components/auth/mess/Signup";
import CustDashboard from "./components/dashboard/cust-dash/Customer.jsx";
import MessDashboard from "./components/dashboard/mess-dash/Mess.jsx";
import MessDetails from "./components/dashboard/cust-dash/MessDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/signup/customer" exact component={SignUp} />
        <Route path="/login/customer" exact component={Login} />
        <Route path="/login/mess" component={LoginM} />
        <Route path="/signup/mess" component={SignUpM} />
        <Route path="/customer/dashboard" component={CustDashboard} />
        <Route path="/mess/dashboard" component={MessDashboard} />
        <Route path="/customer/mess-details" component={MessDetails} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

/*
<div className="containerr">
        <SignUpImg />
        <div className="main_div">
          <h3 className="switch">
            <button onClick={loginAction}>Login</button> |
            <button onClick={signUpAction}>SignUp</button>
          </h3>
          {check.loginCond ? <Login/> : <SignUp/> }
          <div className="cust-owner">
            <button onClick={loginAction}>Customer</button> |
            <button onClick={signUpAction}>Mess Owner</button>
          </div>
        </div>
      </div>

*/
