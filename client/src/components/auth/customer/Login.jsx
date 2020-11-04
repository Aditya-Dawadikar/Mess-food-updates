import React, { useState, useEffect } from "react";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import { NavLink } from "react-router-dom";
import SignUpImg from "../SignUpImg";
import axios from "axios";

const SignUp = () => {
  const initialState = localStorage.getItem('token');
  const [custToken, setCustToken]=useState(initialState);
  const [user, setUser] = useState({
    password: "",
    email: "",
  });

  useEffect(()=>{
    if(custToken)
    window.location = "/customer/dashboard"
  },[custToken])


  const inputEvent = (e) => {
    const { name, value } = e.target;

    setUser((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };
  
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    axios
      .post("api/login/customer", {
        email: user.email,
        password: user.password,
      })
      .then(response => {
        // console.log(response.data);
        localStorage.setItem('token',response.data.token.token)
        localStorage.setItem('refreshToken',response.data.token.refreshToken);
        localStorage.setItem('userId',response.data.userId)
        setCustToken(response.data);
        // console.log(custToken);
        if (response.status === 200) window.location = "/customer/dashboard" ;
      })
      .catch(error=>{
        alert('Wrong username or password');
        // console.log(error);
      });
  };

  return (
    <>
      <div className="containerr">
        <SignUpImg />
        <div className="main_div">
          <h3 className="switch">
            <button>
              <NavLink exact to="/login/customer">Login</NavLink>
            </button>
            |
            <button>
              <NavLink exact to="/signup/customer">SignUp</NavLink>
            </button>
          </h3>
          <form onSubmit={onSubmit} autoComplete="on">
            <div className="inputForm">
              <h1>
                Login <FastfoodIcon />
              </h1>
              <div className="inputTag">
                <input
                  type="email"
                  placeholder="Enter Your EmailID"
                  name="email"
                  onChange={inputEvent}
                  value={user.email}
                />
                <EmailOutlinedIcon
                  style={{
                    background: "transparent",
                    color: "black",
                    top: "1.7rem",
                    left: "1rem",
                    position: "absolute",
                  }}
                />
                <input
                  type="password"
                  placeholder="Enter Your password"
                  name="password"
                  onChange={inputEvent}
                  value={user.password}
                />
                <LockOutlinedIcon
                  style={{
                    background: "transparent",
                    color: "black",
                    top: "7.1rem",
                    left: "1rem",
                    position: "absolute",
                  }}
                />
                <button type="submit">LOGIN</button>
              </div>
            </div>
          </form>
         <div className="switch-user">
         <NavLink to='/login/customer' activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item"><button >Customer</button></NavLink>
          <NavLink to='/login/mess' activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item"><button >Mess</button></NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;

