import React, { useState } from "react";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import { NavLink } from "react-router-dom";
import SignUpImg from "../SignUpImg";
import axios from "axios";

const SignUp = () => {
  const [user, setFullName] = useState({
    password: "",
    email: "",
  });

  const inputEvent = (e) => {
    const { name, value } = e.target;

    setFullName((preValue) => {
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
      .post("http://localhost:9000/api/login/customer", {
        email: user.email,
        password: user.password,
      })
      .then(function (response) {
        console.log(response);
        if (response.status === 200) window.location = "/customer/dashboard";
      });
  };

  return (
    <>
      <div className="containerr">
        <SignUpImg />
        <div className="main_div">
          <h3 className="switch">
            <button>
              <NavLink to="/login/customer">Login</NavLink>
            </button>
            |
            <button>
              <NavLink to="/signup/customer">SignUp</NavLink>
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
                  value={user.email}
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
