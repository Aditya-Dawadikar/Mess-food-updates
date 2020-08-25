import React from "react";
import SignUp from "./components/auth/customer/SignUp";
import SignUpImg from "./components/auth/SignUpImg";
import Login from "./components/auth/customer/Login";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Switch,Route,NavLink } from 'react-router-dom';
import LoginM from './components/auth/mess/Login';
import SignUpM from './components/auth/mess/Signup';
import CustDashboard from './components/dashboard/Customer';
import MessDashboard from './components/dashboard/Mess';


const App = () => {
  return (
    <BrowserRouter>
      <div className="containerr">
      
          <SignUpImg />
          <div className="main_div">
            <h3 className="switch">
              <button><NavLink to='/login/customer'>Login</NavLink></button> |
              <button><NavLink to='/signup/customer'>SignUp</NavLink></button>
            </h3>
        
          
            <Switch>
              <Route path='/login/customer' component={Login} />
              <Route path='/signup/customer' component={SignUp} />
              <Route path='/login/mess' component={LoginM} />
              <Route path='/signup/mess' component={SignUpM} />
              <Route path='/customer/dashboard' component={CustDashboard} />
              <Route path='/mess/dashboard' component={MessDashboard} />
            </Switch>
        </div>
      </div>
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
          {check.loginCond && <Login />}
          {check.signUpCond && <SignUp />}
        </div>
      </div>

*/
