import React, { useState,useEffect } from "react";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import { NavLink } from "react-router-dom";
import SignUpImg from "../SignUpImg";
import axios from "axios";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password,setPassword ] = useState("");
  const [user,setUser] = useState({});
  
  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    console.log(loggedInUser);
    if(loggedInUser){
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  if(user){
    window.location = "/customer/dashboard";
    const x=localStorage.getItem('user');
    console.log(x.token);
  }
  const onSubmit = async e => {
    e.preventDefault();
    try{
        const user = { username, password };
        //send username & password to server
        const response = await axios.post(
          "http://localhost:9000/api/login/customer", {
            email:username,
            password:password
          }
          
        );
        //set the state of user
        setUser(response.data)
        //store the user in localStorage
        localStorage.setItem('user', response.data);
        console.log(response.data);
    }catch(err){
      console.error(err);
    }
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
                  placeholder="Enter Your username"
                  name="email"
                  onChange={({ target }) => setUsername(target.value) }
                  value={username}
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
                  onChange={({ target }) => setPassword(target.value) }
                  value={password}
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
