import React, { useState } from "react";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import PhoneIphoneOutlinedIcon from "@material-ui/icons/PhoneIphoneOutlined";
import FastfoodIcon from "@material-ui/icons/Fastfood";

const SignUp = () => {
  const [set, setState] = useState({
    fullname: "",
    password: "",
    email: "",
    phone: "",
  });

  const inputEvent = (e) => {
    const { name, value } = e.target;

    setState((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(set);
    alert("sign Up successfully");
  };

  return (
    <>
        <form onSubmit={onSubmit} autoComplete="off">
          <div className="inputForm">
            <h1>
              Sign Up <FastfoodIcon />
            </h1>
            <div className="inputTag">
              <input
                type="text"
                placeholder="Enter Your Name"
                name="fullname"
                onChange={inputEvent}
                value={set.fullname}
              />
              <PersonOutlineOutlinedIcon
                style={{
                  background: "transparent",
                  color: "black",
                  top: "1.5rem",
                  left: "1rem",
                  position: "absolute",
                }}
              />
              <input
                type="email"
                placeholder="Enter Your EmailID"
                name="email"
                onChange={inputEvent}
                value={set.email}
              />
              <EmailOutlinedIcon
                style={{
                  background: "transparent",
                  color: "black",
                  top: "7.1rem",
                  left: "1rem",
                  position: "absolute",
                }}
              />
              <input
                type="text"
                placeholder="Enter Your Phone no."
                name="phone"
                onChange={inputEvent}
                value={set.phone}
              />
              <PhoneIphoneOutlinedIcon
                style={{
                  background: "transparent",
                  color: "black",
                  top: "12.1rem",
                  left: "1rem",
                  position: "absolute",
                }}
              />
              <input
                type="password"
                placeholder="Enter Your password"
                name="password"
                onChange={inputEvent}
                value={set.password}
              />
              <LockOutlinedIcon
                style={{
                  background: "transparent",
                  color: "black",
                  top: "17.1rem",
                  left: "1rem",
                  position: "absolute",
                }}
              />
              <button type="submit">SIGN UP</button>
            </div>
          </div>
        </form>
    </>
  );
};

export default SignUp;
