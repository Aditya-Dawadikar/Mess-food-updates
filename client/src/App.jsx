import React, { useState } from "react";
import SignUp from "./SignUp";
import SignUpImg from "./SignUpImg";
import Login from "./Login";
// import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [check, setCheck] = useState({
    loginCond: true,
    signUpCond: false,
  });
  const loginAction = () => {
    setCheck({
      signUpCond: false,
      loginCond: true,
    });
  };

  const signUpAction = () => {
    setCheck({
      signUpCond: true,
      loginCond: false,
    });
  };

  return (
    <>
      <div className="container">
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
    </>
  );
};

export default App;
