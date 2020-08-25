import React, { useState } from "react";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import axios from 'axios';


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
    axios.post('http://localhost:9000/api/register/mess',{
        "email": mess.email,
		"password": mess.password,
		"messDetails": {
            "messName": mess.messDetails[0],
            "ownerName": mess.messDetails[1],
            "phone": mess.messDetails[2],
            "address": mess.messDetails[3]
		    },
		"price": {
            "homeDelivery": {
                "available": mess.price.homeDelivery[0],
                "DeliveryCharge": mess.price.homeDelivery[1]
            },
            "onVenue": {
                "available": mess.price.onVenue[0]
            }
		}
    })
    .then((response) => {
        console.log(response);
        console.log("sign Up successfully");
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
                placeholder="Enter Your  Mess Name"
                name="messName"
                onChange={inputEvent}
                value={mess.messDetails[0]}
              />
              <input
                type="text"
                placeholder="Enter Your Owner Name"
                name="ownerName"
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
              <input
                type="number"
                placeholder="Enter Your Phone no."
                name="phone"
                onChange={inputEvent}
                value={mess.messDetails[2]}
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
                name="address"
                onChange={inputEvent}
                value={mess.messDetails[3]}
              />
              <input
                type="text"
                placeholder="Home Delivery True/False"
                name="available"
                onChange={inputEvent}
                value={mess.price.homeDelivery[0]}
              />
              <input
                type="text"
                placeholder="On Venue Available True/False"
                name="onVenue"
                onChange={inputEvent}
                value={mess.price.onVenue[0]}
              />
               <input
                type="number"
                placeholder="Home Delivery Charge"
                name="deliveryCharge"
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
