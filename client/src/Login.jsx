import React, { useState } from "react";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import FastfoodIcon from "@material-ui/icons/Fastfood";

const SignUp = () => {
  const [user, setUser] = useState({
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
    console.log(user);
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
                top: "6.5rem",
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
