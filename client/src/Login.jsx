import React, { useState } from "react";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import FastfoodIcon from "@material-ui/icons/Fastfood";

const SignUp = () => {
  const [fullName, setFullName] = useState({
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
    console.log(fullName);
  };

  return (
    <>
      
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
                value={fullName.email}
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
                value={fullName.password}
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
      
    </>
  );
};

export default SignUp;
