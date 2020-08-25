import React, { useState } from "react";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import PhoneIphoneOutlinedIcon from "@material-ui/icons/PhoneIphoneOutlined";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import axios from 'axios';


const SignUp = () => {
  const [user, setState] = useState({
    fullName: "",
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
    console.log(user);
    axios.post('http://localhost:9000/api/register/customer',{
      "name": user.fullName,
			"email": user.email,
			"password": user.password,
			"phone": user.phone
    })
    .then((response) => {
        console.log(response);
        alert("sign Up successfully");
        if(response.status === 200)
          window.location = '/login/customer';
    })
    .catch( (error) => {
        console.log(error)
    })  
    
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
                name="fullName"
                onChange={inputEvent}
                value={user.fullName}
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
                value={user.email}
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
                value={user.phone}
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
                value={user.password}
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
