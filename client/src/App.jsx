import React from "react";
import SignUp from "./components/auth/customer/SignUp";
import SignUpImg from "./components/auth/SignUpImg";
import Login from "./components/auth/customer/Login";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Switch,Route,NavLink } from 'react-router-dom';
import LoginM from './components/auth/mess/Login';
import SignUpM from './components/auth/mess/Signup';


const App = () => {
  return (
    <BrowserRouter>
      <div className="containerr">
        <SignUpImg />
        <div className="main_div">
          <h3 className="switch">
            <button><NavLink to='/customer/login'>Login</NavLink></button> |
            <button><NavLink to='/customer/signup'>SignUp</NavLink></button>
          </h3>
          <Switch>
            <Route path='/customer/login' component={Login} />
            <Route path='/customer/signup' component={SignUp} />
            <Route path='/mess/login' component={LoginM} />
            <Route path='/mess/signup' component={SignUpM} />
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
