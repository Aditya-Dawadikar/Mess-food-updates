import React, { useState } from "react";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { Container,Form,Col,Button } from "react-bootstrap";

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
    axios
      .post("api/register/customer", {
        name: user.fullName,
        email: user.email,
        password: user.password,
        phone: user.phone,
      })
      .then((response) => {
        // console.log(response);
        alert("Sign Up successfully");
        if (response.status === 200) window.location = "/login/customer";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {/* <div className="containerr">
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
          {/* <div className="switch-user">
          <NavLink to='/signup/customer' activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item"><button >Customer</button></NavLink>
          <NavLink to='/signup/mess' activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item"><button >Mess</button></NavLink>
          </div> 
        </div>
      </div> */}
      <Container>
        <h3 className="switch" style={{textAlign:"center",margin:"1.5rem 8rem"}}>
            <button>
              <NavLink to="/login/customer">Login</NavLink>
            </button>
            |  
            <button>
              <NavLink to="/signup/customer">SignUp</NavLink>
            </button>
        </h3>
        <Form onSubmit={onSubmit} style={{width:"70%",margin:"0px 15%"}}>
            <h1 style={{textAlign:"center",margin:"3rem 0px",fontFamily:"'Nunito Sans',sans-serif"}}>
              SignUp <FastfoodIcon />
            </h1>
          
            <Form.Group as={Col} >
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="fullName" placeholder="Enter Your Name" onChange={inputEvent} value={user.fullName} required/>
            </Form.Group>
            <Form.Group as={Col} >
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control type="text" name="phone" placeholder="Enter Mobile No." onChange={inputEvent} value={user.phone} required/>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter Email" onChange={inputEvent} value={user.email} required/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" placeholder="Enter password" onChange={inputEvent}   value={user.password} required/>
            </Form.Group>
            <Button variant="primary" type="submit" style={{margin:"2rem 10rem 0 45%"}}>
                SignUp
            </Button>
            
        </Form>
        
     
    </Container>
    </>
  );
};
export default SignUp;
