import React, { useState } from "react";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import { NavLink } from "react-router-dom";
// import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
// import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
// import MailRoundedIcon from '@material-ui/icons/MailRounded';
// import PhoneIphoneRoundedIcon from '@material-ui/icons/PhoneIphoneRounded';
// import LockRoundedIcon from '@material-ui/icons/LockRounded';
// import RoomRoundedIcon from '@material-ui/icons/RoomRounded';
// import LocalShippingRoundedIcon from '@material-ui/icons/LocalShippingRounded';
// import LocalDiningRoundedIcon from '@material-ui/icons/LocalDiningRounded';
// import PaymentRoundedIcon from '@material-ui/icons/PaymentRounded';
import axios from 'axios';
import { Container,Form,Col,Button } from "react-bootstrap";


const SignUp = () => {
  const [mess, setMess] = useState({
    password: "",
    email: "",
    messDetails:{
        messName: "",
        ownerName:"",
        phone: "",
        address:""
    },
    price:{
        homeDelivery:{
            available:"",
            DeliveryCharge:"",
        },
        onVenue:{
            available:""
        }
    }
  });

  const inputEvent = (e) => {
    const { name, value } = e.target;

    setMess((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(mess);
    axios.post('api/register/mess',{
      "email": mess.email,
      "password": mess.password,
      "messDetails": {
              "messName": mess.messName,
              "ownerName": mess.ownerName,
              "phone": mess.phone,
              "address": mess.address
          },
      "price": {
              "homeDelivery": {
                  "available": mess.available,
                  "DeliveryCharge": mess.DeliveryCharge 
              },
              "onVenue": {
                  "available": mess.available
              }
      }
    })
    .then((response) => {
        console.log(response);
        alert("Sign Up successfully");
        if(response.status === 200)
          window.location = '/login/mess';
    })
    .catch( (error) => {
        console.log(error)
    })  
    
  
  };

  return (
    <Container>
      
          <h3 className="switch" style={{textAlign:"center",margin:"1.5rem 8rem"}}>
            <button>
              <NavLink to="/login/mess">Login</NavLink>
            </button>
            |  
            <button>
              <NavLink to="/signup/mess">SignUp</NavLink>
            </button>
          </h3>
      
      <Form onSubmit={onSubmit}>
            <h1 style={{textAlign:"center",margin:"3rem 0px",fontFamily:"'Nunito Sans',sans-serif"}}>
              Sign Up <FastfoodIcon />
            </h1>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Mess name</Form.Label>
            <Form.Control type="text"  name="messName" placeholder="Enter Mess Name" onChange={inputEvent} value={mess.messDetails[0]} required/>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Owner name</Form.Label>
            <Form.Control type="text" name="ownerName" placeholder="Enter Owner name" onChange={inputEvent}   value={mess.messDetails[1]} required/>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter Email" onChange={inputEvent} value={mess.email} required/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Enter password" onChange={inputEvent}   value={mess.password} required/>
          </Form.Group>
        </Form.Row>


        <Form.Group controlId="formGridAddress1">
          <Form.Label>Mess Address</Form.Label>
          <Form.Control placeholder="Enter Mess Address" name="address" onChange={inputEvent} value={mess.messDetails[3]} required/>
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} >
            <Form.Label>Mobile no</Form.Label>
            <Form.Control type="text" name="phone" placeholder="Enter Mobile no." onChange={inputEvent}   value={mess.messDetails[2]} required/>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Dining Available</Form.Label>
            <Form.Control type="text" name="onVenue" placeholder="True/False" onChange={inputEvent}   value={mess.price.onVenue[0]} required/>
          </Form.Group> 
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} >
            <Form.Label>Home Delivery</Form.Label>
            <Form.Control type="text" name="available" placeholder="True/False" onChange={inputEvent}  value={mess.price.homeDelivery[0]} required/>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Home Delivery Charge</Form.Label>
            <Form.Control type="text" name="deliveryCharge" placeholder="Delivery charge" onChange={inputEvent}  value={mess.price.homeDelivery[1]} required/>
          </Form.Group>
        </Form.Row>



        <Button variant="primary" type="submit" style={{marginLeft:"45%"}}>
          SignUp
        </Button>
      </Form>
    </Container>
      
  );
};

export default SignUp;

{/* <div className="containerr">
        <div className="main_div">
          <h3 className="switch">
            <button>
              <NavLink to="/login/mess">Login</NavLink>
            </button>
            |
            <button>
              <NavLink to="/signup/mess">SignUp</NavLink>
            </button>
          </h3>

        <form onSubmit={onSubmit} autoComplete="off">
          <div className="inputForm" id="mess-signup">
            <h1>
              Sign Up <FastfoodIcon />
            </h1>
            <div className="inputTag">
              <input
                type="text"
                placeholder="Enter Your  Mess Name"
                name="messName"
                onChange={inputEvent}
                value={mess.messDetails[0]}
              />
              <HomeRoundedIcon
                  style={{
                    background: "transparent",
                    color: "black",
                    top: "1rem",
                    left: "1rem",
                    position: "absolute",
                  }}
                />
              <input
                type="text"
                placeholder="Enter Your Owner Name"
                name="ownerName"
                onChange={inputEvent}
                value={mess.messDetails[1]}
              />
              <PersonRoundedIcon
                  style={{
                    background: "transparent",
                    color: "black",
                    top: "4.7rem",
                    left: "1rem",
                    position: "absolute",
                  }}
                />
              <input
                type="email"
                placeholder="Enter Your EmailID"
                name="email"
                onChange={inputEvent}
                value={mess.email}
              />
              <MailRoundedIcon
                  style={{
                    background: "transparent",
                    color: "black",
                    top: "8.4rem",
                    left: "1rem",
                    position: "absolute",
                  }}
                />
              <input
                type="number"
                placeholder="Enter Your Phone no."
                name="phone"
                onChange={inputEvent}
                value={mess.messDetails[2]}
              />
              <PhoneIphoneRoundedIcon
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
                placeholder="Enter password"
                name="password"
                onChange={inputEvent}
                value={mess.password}
              />
              <LockRoundedIcon
                  style={{
                    background: "transparent",
                    color: "black",
                    top: "15.8rem",
                    left: "1rem",
                    position: "absolute",
                  }}
                />
              <input
                type="text"
                placeholder="Enter Your Mess Address"
                name="address"
                onChange={inputEvent}
                value={mess.messDetails[3]}
              />
              <RoomRoundedIcon
                  style={{
                    background: "transparent",
                    color: "black",
                    top: "19.5rem",
                    left: "1rem",
                    position: "absolute",
                  }}
                />
              <input
                type="text"
                placeholder="Home Delivery True/False"
                name="available"
                onChange={inputEvent}
                value={mess.price.homeDelivery[0]}
              />
              <LocalShippingRoundedIcon
                  style={{
                    background: "transparent",
                    color: "black",
                    top: "23.2rem",
                    left: "1rem",
                    position: "absolute",
                  }}
                />
              <input
                type="text"
                placeholder="On Venue Available True/False"
                name="onVenue"
                onChange={inputEvent}
                value={mess.price.onVenue[0]}
              />
              <LocalDiningRoundedIcon
                  style={{
                    background: "transparent",
                    color: "black",
                    top: "26.9rem",
                    left: "1rem",
                    position: "absolute",
                  }}
                />
               <input
                type="number"
                placeholder="Home Delivery Charge"
                name="deliveryCharge"
                onChange={inputEvent}
                value={mess.price.homeDelivery[1]}
              />
              <PaymentRoundedIcon
                  style={{
                    background: "transparent",
                    color: "black",
                    top: "30.6rem",
                    left: "1rem",
                    position: "absolute",
                  }}
                />
              <button type="submit">SIGN UP</button>
            </div>
          </div>
        </form>
      </div>
      </div>
    </> */}