import React, { useState } from "react";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import PhoneIphoneOutlinedIcon from "@material-ui/icons/PhoneIphoneOutlined";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import axios from 'axios';


const SignUp = () => {
  const [mess, setMess] = useState({
    fullName: "",
    password: "",
    email: "",
    messDetails:{
        messName: "",
        ownerName:"",
        phone: "",
        address:"",
    },
    price:{
        homeDelivery:{
            available:"",
            DeliveryCharge:"",
        },
        onVenue:{
            available:"",
        }
    },
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
    axios.post('http://localhost:9000/api/register/customer',{
      "name": mess.fullName,
			"email": mess.email,
			"password": mess.password,
			"phone": mess.phone
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
                value={mess.fullName}
              />
              <input
                type="text"
                placeholder="Enter Your Owner Name"
                name="messDetails.ownerName"
                onChange={inputEvent}
                value={mess.messDetails[1]}
              />
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
                  top: "7.1rem",
                  left: "1rem",
                  position: "absolute",
                }}
              />
              <input
                type="number"
                placeholder="Enter Your Phone no."
                name="messDetails.phone"
                onChange={inputEvent}
                value={mess.phone}
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
                placeholder="Enter password"
                name="password"
                onChange={inputEvent}
                value={mess.password}
              />
              <input
                type="text"
                placeholder="Enter Your Mess Address"
                name="messDetails.address"
                onChange={inputEvent}
                value={mess.messDetails[3]}
              />
              <input
                type="text"
                placeholder="Home Delivery True/False"
                name="price.homeDelivery.available"
                onChange={inputEvent}
                value={mess.price.homeDelivery[0]}
              />
              <input
                type="text"
                placeholder="On Venue Available True/False"
                name="price.onVenue.available"
                onChange={inputEvent}
                value={mess.price.onVenue[0]}
              />
               <input
                type="number"
                placeholder="Home Delivery Charge"
                name="price.homeDelivery.deliveryCharge"
                onChange={inputEvent}
                value={mess.price.homeDelivery[1]}
              />
              <button type="submit">SIGN UP</button>
            </div>
          </div>
        </form>
    </>
  );
};

export default SignUp;