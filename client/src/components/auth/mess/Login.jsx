import React, { useState } from "react";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import { NavLink } from "react-router-dom";
import SignUpImg from "../SignUpImg";
import axios from "axios";

const SignUp = () => {
  const [mess, setUser] = useState({
    password: "",
    email: "",
  });

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
    console.log(mess);
    axios
      .post("http://localhost:9000/api/login/mess", {
        email: mess.email,
        password: mess.password,
      })
      .then(function (response) {
        console.log(response);
        if (response.status === 200) window.location = "/mess/dashboard";
      });
  };

  return (
    <>
      <div className="containerr">
        <SignUpImg />
        <div className="main_div">
          <h3 className="switch">
            <button>
              <NavLink eaxct to="/login/mess">Login</NavLink>
            </button>
            |
            <button>
              <NavLink exact to="/signup/mess">SignUp</NavLink>
            </button>
          </h3>
          <form onSubmit={onSubmit} autoComplete="off">
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
                  value={mess.email}
                />
                <EmailOutlinedIcon
                  style={{
                    background: "transparent",
                    color: "black",
                    top: "1.5rem",
                    left: "1rem",
                    position: "absolute",
                  }}
                />
                <input
                  type="password"
                  placeholder="Enter Your password"
                  name="password"
                  onChange={inputEvent}
                  value={mess.password}
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
              <button ><NavLink to='/login/customer' activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Customer</NavLink></button>
              <button ><NavLink to='/login/mess' activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Mess</NavLink></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
